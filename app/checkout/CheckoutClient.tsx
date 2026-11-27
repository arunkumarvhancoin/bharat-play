/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Plus,
  Minus,
  AlertCircle,
  Package,
  Clock,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GAMES, GameItem } from "../data/games";

// Purchase Tiers definition
export type PurchaseTier = "standard-unit" | "premium-unit" | "standard-edu" | "premium-edu";

interface TierDetails {
  id: PurchaseTier;
  title: string;
  badge: string;
  tagline: string;
  unitPrice: number;
  unitsCount: number;
  isEducational: boolean;
  editionName: string;
}

const PRICING_TIERS: Record<PurchaseTier, TierDetails> = {
  "standard-unit": {
    id: "standard-unit",
    title: "Standard Edition (1 Unit)",
    badge: "Library / Single Copy",
    tagline: "Official standard physical box edition for libraries, educators & individual play.",
    unitPrice: 5000,
    unitsCount: 1,
    isEducational: false,
    editionName: "Standard Box Edition (1 Unit)",
  },
  "premium-unit": {
    id: "premium-unit",
    title: "Premium Limited Edition (1 Unit)",
    badge: "Limited Edition Collector",
    tagline: "Archival collector's grade box with premium tokens, heavy-stock cards & executive finish.",
    unitPrice: 10000,
    unitsCount: 1,
    isEducational: false,
    editionName: "Premium Limited Edition (1 Unit)",
  },
  "standard-edu": {
    id: "standard-edu",
    title: "Educational Package · Standard (10 Units)",
    badge: "Class of 60",
    tagline: "Equip 10 student pods (up to 60 students) with lesson plans, teacher training & student fellowships.",
    unitPrice: 45000,
    unitsCount: 10,
    isEducational: true,
    editionName: "Standard Educational Package (10 Units · Class of 60)",
  },
  "premium-edu": {
    id: "premium-edu",
    title: "Educational Package · Premium (10 Units)",
    badge: "Class of 60 · Premium Tier",
    tagline: "10 Premium Limited Edition boxes plus full teacher training, assessment rubrics & publication opportunities.",
    unitPrice: 90000,
    unitsCount: 10,
    isEducational: true,
    editionName: "Premium Educational Package (10 Units · Class of 60)",
  },
};

const EDUCATIONAL_INCLUSIONS = [
  "Certified Teacher Training Session (Live facilitation & debrief workshop)",
  "Complete Set of Modular Lesson Plans (Urban policy, civics, systems thinking)",
  "Quiz & Assessment Plans (Diagnostic rubrics & outcome tracking)",
  "Student Articles Publication Opportunities on Bharat Play research platforms",
  "Direct Student Internship & Fellowship Opportunities with Bharat Play",
];

// Cashfree SDK Type helper
type CashfreeCheckout = (config: { mode: "sandbox" | "production" }) => {
  checkout: (options: {
    paymentSessionId: string;
    redirectTarget?: "_modal" | "_self" | "_blank";
  }) => Promise<{ error?: { message?: string }; paymentDetails?: unknown }>;
};

declare global {
  interface Window {
    Cashfree?: CashfreeCheckout;
  }
}

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Chandigarh",
  "Puducherry",
  "Other",
];

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const gameParam = searchParams.get("game") || "city-runners";
  const tierParam = (searchParams.get("tier") as PurchaseTier) || "standard-unit";

  // Matched game item (defaults to City Runners)
  const selectedGame: GameItem =
    GAMES.find((g) => g.id === gameParam) ||
    GAMES.find((g) => g.id === "city-runners") ||
    GAMES[0];

  // Pricing Tier state
  const [selectedTier, setSelectedTier] = useState<PurchaseTier>(
    PRICING_TIERS[tierParam] ? tierParam : "standard-unit"
  );

  const activeTier = PRICING_TIERS[selectedTier] || PRICING_TIERS["standard-unit"];
  const unitPrice = activeTier.unitPrice;

  // Checkout form states
  const [quantity, setQuantity] = useState<number>(1);
  const [showMobileSummary, setShowMobileSummary] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    building: "",
    street: "",
    landmark: "",
    city: "",
    state: "Karnataka",
    pincode: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Completed order verification state
  const [isPaid, setIsPaid] = useState(false);
  const [isVerifying, setIsVerifying] = useState(() => Boolean(searchParams.get("order_id")));
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    amountPaid: number;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    productTitle: string;
    deliveryAddress?: string;
    date: string;
  } | null>(null);

  const orderIdParam = searchParams.get("order_id");

  // Cashfree Payment Gateway SDK loader
  const loadCashfreeSdk = useCallback(async (): Promise<CashfreeCheckout | null> => {
    if (typeof window === "undefined") return null;
    if (window.Cashfree) return window.Cashfree;

    return new Promise<CashfreeCheckout | null>((resolve) => {
      const existing = document.querySelector('script[src*="cashfree.js"]');
      if (existing) {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (window.Cashfree) {
            clearInterval(interval);
            resolve(window.Cashfree);
          } else if (attempts > 20) {
            clearInterval(interval);
            resolve(null);
          }
        }, 100);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.async = true;
      script.onload = () => resolve(window.Cashfree || null);
      script.onerror = () => resolve(null);
      document.head.appendChild(script);
    });
  }, []);

  // Check URL order_id verification (e.g. on return redirect)
  useEffect(() => {
    if (!orderIdParam) return;

    let isMounted = true;

    fetch(`/api/cashfree/verify-payment?order_id=${encodeURIComponent(orderIdParam)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.isPaid) {
          setIsPaid(true);
          setConfirmedOrder({
            orderId: orderIdParam,
            amountPaid: data.amountPaid || data.amount || unitPrice,
            customerName: data.customer?.customer_name || "Valued Patron",
            customerPhone: data.customer?.customer_phone || "",
            customerEmail: data.customer?.customer_email || "",
            productTitle: data.purpose || `${selectedGame.name} - ${activeTier.title}`,
            deliveryAddress: undefined,
            date: new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          });
        } else {
          setSubmitError(
            "Payment verification returned an incomplete or cancelled status. If your payment was deducted, please allow 5 minutes or contact support."
          );
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error("Order verification error:", err);
        setSubmitError("Could not verify payment status automatically. Please check your connection.");
      })
      .finally(() => {
        if (isMounted) setIsVerifying(false);
      });

    return () => {
      isMounted = false;
    };
  }, [orderIdParam, selectedGame.name, unitPrice, activeTier.title]);

  // Form field change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address for order confirmation";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "").slice(-10);
    if (cleanPhone.length !== 10) {
      errors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.building.trim()) {
      errors.building = "House/Flat/Apartment number is required";
    }

    if (!formData.street.trim()) {
      errors.street = "Street address or locality is required";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    }

    if (!formData.state.trim()) {
      errors.state = "State is required";
    }

    const cleanPin = formData.pincode.replace(/[^0-9]/g, "");
    if (cleanPin.length !== 6) {
      errors.pincode = "Enter a valid 6-digit postal PIN code";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Cashfree Payment Flow
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {
      const totalAmount = unitPrice * quantity;
      const cleanPhone = formData.phone.replace(/[^0-9]/g, "").slice(-10);
      const totalUnits = activeTier.unitsCount * quantity;
      const tierTitle = `${selectedGame.name} - ${activeTier.title}`;

      const exactReturnUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/checkout?game=${selectedGame.id}&tier=${selectedTier}&order_id={order_id}`
          : undefined;

      const combinedNotes = [
        `Package: ${activeTier.title} (${totalUnits} Units)`,
        formData.notes.trim(),
      ]
        .filter(Boolean)
        .join(" | ");

      const orderPayload = {
        orderType: "game_purchase",
        gameId: selectedGame.id,
        gameTitle: tierTitle,
        name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: cleanPhone,
        quantity: totalUnits,
        amount: totalAmount,
        deliveryAddress: {
          building: formData.building.trim(),
          street: formData.street.trim(),
          landmark: formData.landmark.trim(),
          city: formData.city.trim(),
          state: formData.state.trim(),
          pincode: formData.pincode.trim(),
        },
        notes: combinedNotes,
        returnUrl: exactReturnUrl,
      };

      const res = await fetch("/api/cashfree/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to initialize payment gateway.");
      }

      const { paymentSessionId, orderId, cashfreeEnv, paymentUrl } = data;

      const CashfreeFactory = await loadCashfreeSdk();

      if (paymentSessionId && CashfreeFactory) {
        try {
          const cashfree = CashfreeFactory({
            mode: cashfreeEnv === "production" ? "production" : "sandbox",
          });

          cashfree
            .checkout({
              paymentSessionId: paymentSessionId,
              redirectTarget: "_modal",
            })
            .then(async (result) => {
              setIsSubmitting(false);

              if (result?.error) {
                setSubmitError(
                  "⚠️ Payment was cancelled or incomplete. Your order has not been placed yet. Your details are saved below so you can try again."
                );
              } else {
                setIsVerifying(true);
                try {
                  const vRes = await fetch(
                    `/api/cashfree/verify-payment?order_id=${encodeURIComponent(orderId)}`
                  );
                  const vData = await vRes.json();
                  if (vData.isPaid) {
                    setIsPaid(true);
                    setConfirmedOrder({
                      orderId: orderId,
                      amountPaid: totalAmount,
                      customerName: formData.fullName.trim(),
                      customerPhone: cleanPhone,
                      customerEmail: formData.email.trim(),
                      productTitle: `${selectedGame.name} (Official Board Game)`,
                      deliveryAddress: `${formData.building}, ${formData.street}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
                      date: new Date().toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }),
                    });
                  } else {
                    setSubmitError(
                      "Payment is still processing or was not confirmed by the bank. If money was debited, contact support with Order ID: " +
                        orderId
                    );
                  }
                } catch {
                  setSubmitError(
                    "Payment verification is in progress. Please check your order status shortly."
                  );
                } finally {
                  setIsVerifying(false);
                }
              }
            })
            .catch((checkoutErr) => {
              console.warn("Cashfree checkout error:", checkoutErr);
              setIsSubmitting(false);
              setSubmitError(
                "Payment modal could not be completed. You can try again or check your network."
              );
            });

          return;
        } catch (modalErr) {
          console.warn("Cashfree modal launch error:", modalErr);
        }
      }

      if (paymentUrl) {
        window.location.href = paymentUrl;
        return;
      }

      throw new Error("Unable to open payment modal. Please try again.");
    } catch (err: unknown) {
      console.error("Order submit exception:", err);
      setIsSubmitting(false);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while communicating with the payment gateway."
      );
    }
  };

  /* Optional Enquiry Fallback Handler:
  const handleEnquireNow = async (e: React.FormEvent) => {
    ...
  };
  */

  const totalPrice = unitPrice * quantity;

  // -------------------------------------------------------------
  // SUCCESS / CONFIRMED SCREEN
  // -------------------------------------------------------------
  if (isPaid && confirmedOrder) {
    return (
      <div className="max-w-[840px] mx-auto w-full px-4 md:px-6 py-12">
        <div
          className="bg-white border-2 border-[#12352B] rounded-[28px] p-6 sm:p-10 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0px #12352B" }}
        >
          {/* Top celebratory banner */}
          <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200/80 w-fit mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              ORDER CONFIRMED · PAYMENT SUCCESSFUL
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy leading-none mb-3">
            THANK YOU, YOUR ORDER IS <span className="text-brand-orange">CONFIRMED!</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium mb-8">
            Thank you for purchasing <strong>{confirmedOrder.productTitle}</strong>. Your payment of{" "}
            <strong>₹{confirmedOrder.amountPaid.toLocaleString("en-IN")}</strong> has been received and your dispatch reference is registered.
          </p>

          {/* Order Details Bento Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                ORDER REFERENCE ID
              </span>
              <p className="font-mono text-base font-bold text-brand-navy break-all">
                {confirmedOrder.orderId}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                TOTAL AMOUNT PAID
              </span>
              <p className="font-mono text-2xl font-black text-brand-green">
                ₹{confirmedOrder.amountPaid.toLocaleString("en-IN")}
              </p>
              <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                ✓ Official invoice provided on confirmation
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                DISPATCH &amp; DELIVERY TIMELINE
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Truck className="w-4 h-4 text-brand-orange" />
                <span className="font-mono text-sm font-bold text-brand-navy">
                  3 – 5 Business Days Upon Confirmation
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Pan-India courier delivery directly to your provided shipping destination.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                CUSTOMER &amp; DELIVERY CONTACT
              </span>
              <p className="text-sm font-bold text-brand-navy">
                {confirmedOrder.customerName}
              </p>
              <p className="text-xs font-mono text-slate-600 mt-0.5">
                📞 +91 {confirmedOrder.customerPhone}
              </p>
              {confirmedOrder.customerEmail && (
                <p className="text-xs font-mono text-slate-600">
                  ✉️ {confirmedOrder.customerEmail}
                </p>
              )}
            </div>
          </div>

          {/* Delivery Address if available */}
          {confirmedOrder.deliveryAddress && (
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 mb-8">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                SHIPPING DESTINATION
              </span>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                {confirmedOrder.deliveryAddress}
              </p>
            </div>
          )}

          {/* What to expect next */}
          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 mb-8">
            <h3 className="font-mono text-xs font-bold uppercase text-brand-navy tracking-wider mb-2 flex items-center gap-2">
              <Package className="w-4 h-4 text-brand-orange" /> WHAT HAPPENS NEXT?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <li>• Payment received &amp; confirmed. Your order has been registered with reference <strong>{confirmedOrder.orderId}</strong>.</li>
              <li>• Our team will reach out via WhatsApp/Phone with your official invoice and confirm your dispatch schedule.</li>
              <li>• Your physical tabletop game box will be packaged securely and dispatched directly to your address.</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://wa.me/918237132553?text=${encodeURIComponent(
                `Hi Bharat Play, I just placed an order for ${confirmedOrder.productTitle} with Reference ID ${confirmedOrder.orderId}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase transition-colors"
            >
              <span>WHATSAPP SUPPORT (+91 82371 32553)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/games"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-orange text-white font-mono text-xs font-bold uppercase transition-colors ml-auto"
            >
              <span>EXPLORE MORE GAMES</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VERIFYING STATE
  // -------------------------------------------------------------
  if (isVerifying) {
    return (
      <div className="max-w-[600px] mx-auto w-full px-4 py-24 text-center">
        <div className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <h2 className="font-display text-2xl font-bold uppercase text-brand-navy mb-2">
          VERIFYING YOUR PAYMENT...
        </h2>
        <p className="text-sm font-mono text-slate-600">
          Communicating with secure payment gateway. Please do not close or refresh this page.
        </p>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CHECKOUT FORM SCREEN
  // -------------------------------------------------------------
  return (
    <div className="max-w-[1180px] mx-auto w-full px-4 md:px-6">
      {/* Back button & Breadcrumb */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <Link
          href={`/games`}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-brand-navy hover:text-brand-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO GAMES
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-gray-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>DIRECT ORDER DISPATCH · INSTANT CONFIRMATION</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="pb-6 mb-6 sm:mb-8 border-b border-gray-200">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-orange" /> BHARAT PLAY SIMULATIONS STORE
        </div>
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-navy">
          CHECKOUT &amp; <span className="text-brand-orange">DISPATCH.</span>
        </h1>
        <p className="text-xs sm:text-base text-slate-600 font-medium mt-1">
          Complete your delivery details to purchase official game boxes. Express Pan-India dispatch with instant order confirmation.
        </p>
      </div>

      {/* Error Banner */}
      {submitError && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border-2 border-red-300 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-medium leading-relaxed">
            {submitError}
          </div>
        </div>
      )}

      {/* Mobile Top Order Summary Drawer (Compact & Collapsible) */}
      <div className="lg:hidden mb-6 bg-white border-2 border-[#12352B] rounded-2xl p-4 shadow-sm">
        <button
          type="button"
          onClick={() => setShowMobileSummary((v) => !v)}
          className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-navy/5 border border-gray-200 shrink-0">
              <img
                src={selectedGame.image || "/cr.webp"}
                alt={selectedGame.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] font-bold uppercase text-brand-orange truncate">
                {selectedGame.name} · {activeTier.badge}
              </div>
              <h3 className="font-display text-sm font-bold uppercase text-brand-navy truncate">
                {activeTier.title}
              </h3>
              <p className="text-[11px] font-mono text-slate-500">
                Qty: {quantity} ({activeTier.unitsCount * quantity} Units)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="text-right">
              <div className="font-mono text-base font-black text-brand-green leading-none">
                ₹{totalPrice.toLocaleString("en-IN")}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                {showMobileSummary ? "Hide" : "Details"}
              </div>
            </div>
            {showMobileSummary ? (
              <ChevronUp className="w-4 h-4 text-brand-navy" />
            ) : (
              <ChevronDown className="w-4 h-4 text-brand-navy" />
            )}
          </div>
        </button>

        {showMobileSummary && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 text-xs font-mono">
            <div className="flex justify-between items-center text-slate-600">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-lg bg-[#FFFDF9] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1 || isSubmitting}
                  className="px-2.5 py-1 text-slate-600 hover:bg-gray-100 disabled:opacity-40"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 py-1 font-mono text-xs font-bold text-brand-navy">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10 || isSubmitting}
                  className="px-2.5 py-1 text-slate-600 hover:bg-gray-100 disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Unit Price:</span>
              <span className="font-bold text-brand-navy">₹{unitPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between font-bold text-brand-navy pt-2 border-t border-dashed border-gray-200">
              <span>Total Payable:</span>
              <span className="text-brand-green text-sm font-black">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="text-[11px] font-sans text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200/80 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Includes 100% Original Box Edition, Facilitator Guide &amp; Express Delivery</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Checkout Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28 lg:mb-16">
        
        {/* LEFT COLUMN: DELIVERY ADDRESS & CONTACT FORM (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleProceedToPayment} className="space-y-6">
            
            {/* Step 0: Select Pricing Tier / Educational Package */}
            <div
              className="bg-white border-2 border-[#C2410C] rounded-[24px] p-6 sm:p-8"
              style={{ boxShadow: "6px 6px 0px #C2410C" }}
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-display text-lg font-bold uppercase text-brand-navy">
                    SELECT EDITION &amp; PACKAGE
                  </h2>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  SCHOOLS · COLLEGES · LIBRARIES
                </span>
              </div>

              {/* 4-Tier Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {(Object.keys(PRICING_TIERS) as PurchaseTier[]).map((tierKey) => {
                  const t = PRICING_TIERS[tierKey];
                  const isSelected = selectedTier === tierKey;
                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tierKey);
                        setQuantity(1);
                      }}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-brand-orange bg-orange-50/70 shadow-sm ring-2 ring-orange-500/30"
                          : "border-gray-200 bg-[#FFFDF9] hover:border-brand-navy/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span
                            className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-brand-orange text-white"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {t.badge}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-slate-500">
                            {t.unitsCount} {t.unitsCount === 1 ? "Unit" : "Units"}
                          </span>
                        </div>
                        <h4 className="font-display text-sm font-bold uppercase text-brand-navy leading-snug">
                          {t.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                          {t.tagline}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gray-200/80 flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-base font-black text-brand-navy">
                            ₹{t.unitPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase ${
                            isSelected ? "text-brand-orange font-black" : "text-slate-400"
                          }`}
                        >
                          {isSelected ? "● SELECTED" : "SELECT"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Inclusions checklist for Educational Packages */}
              {activeTier.isEducational && (
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 mt-4">
                  <div className="flex items-center gap-2 text-emerald-950 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    EDUCATIONAL PACKAGE INCLUSIONS (CLASS OF 60 STUDENTS)
                  </div>
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                    {EDUCATIONAL_INCLUSIONS.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}


            </div>

            {/* Step 2: Contact Details */}
            <div
              className="bg-white border-2 border-[#0C2444] rounded-[24px] p-6 sm:p-8"
              style={{ boxShadow: "6px 6px 0px #0C2444" }}
            >
              <div className="flex items-center gap-2 pb-4 mb-5 border-b border-gray-100">
                <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <h2 className="font-display text-lg font-bold uppercase text-brand-navy">
                  CONTACT INFORMATION
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                    FULL NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Priya Sharma / Academic Coordinator"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.fullName ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                    } text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.email ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                      } text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      MOBILE NUMBER (10 DIGITS) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-xs font-mono font-bold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          formErrors.phone ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                        } text-base sm:text-sm font-mono text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                        {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Delivery Address */}
            <div
              className="bg-white border-2 border-[#C2410C] rounded-[24px] p-6 sm:p-8"
              style={{ boxShadow: "6px 6px 0px #C2410C" }}
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-mono font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-display text-lg font-bold uppercase text-brand-navy">
                    SHIPPING / DELIVERY ADDRESS
                  </h2>
                </div>

                <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  DIRECT INSTITUTIONAL DISPATCH
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                    HOUSE / FLAT / BUILDING NO. &amp; APARTMENT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="building"
                    value={formData.building}
                    onChange={handleInputChange}
                    placeholder="e.g. Flat 302, Palm Heights / Door No. 12"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.building ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                    } text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                  />
                  {formErrors.building && (
                    <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                      {formErrors.building}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                    STREET ADDRESS / AREA / LOCALITY <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="e.g. 14th Cross, 4th Block, Koramangala"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.street ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                    } text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                  />
                  {formErrors.street && (
                    <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                      {formErrors.street}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      LANDMARK <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      placeholder="e.g. Near Sony Signal / Opp Metro Station"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFFDF9] text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      CITY / DISTRICT <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Bengaluru / Chennai / Mumbai"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.city ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                      } text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                    {formErrors.city && (
                      <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                        {formErrors.city}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      STATE <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FFFDF9] text-base sm:text-sm text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                      PIN CODE (6 DIGITS) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="560034"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.pincode ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-[#FFFDF9]"
                      } text-base sm:text-sm font-mono text-brand-navy min-h-[46px] focus:outline-none focus:border-brand-orange transition-colors`}
                    />
                    {formErrors.pincode && (
                      <span className="text-[11px] font-mono text-red-600 font-semibold mt-1 block">
                        {formErrors.pincode}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-brand-navy mb-1.5">
                    DELIVERY INSTRUCTIONS / NOTES <span className="text-slate-400 font-normal">(OPTIONAL)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Leave with building security if unavailable / Call before delivery"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FFFDF9] text-base sm:text-sm text-brand-navy focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Submit Button (Visible only on small screens) */}
            <div className="lg:hidden">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-mono text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>INITIALIZING PAYMENT...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>PAY ₹{totalPrice.toLocaleString("en-IN")}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: PRODUCT CARD & ORDER SUMMARY (5 cols) */}
        <div className="lg:col-span-5">
          <div
            className="bg-white border-2 border-[#12352B] rounded-[24px] p-6 sm:p-7 sticky top-28 z-20"
            style={{ boxShadow: "6px 6px 0px #12352B" }}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" /> ORDER SUMMARY
              </span>
              <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">
                100% ORIGINAL BOX
              </span>
            </div>

            {/* Product Card */}
            <div className="flex gap-4 pb-5 border-b border-gray-100">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-brand-navy/5 border border-gray-200 shrink-0">
                <img
                  src={selectedGame.image || "/cr.webp"}
                  alt={selectedGame.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase text-brand-orange tracking-wider">
                    GAME #{selectedGame.displayNumber} · {activeTier.badge}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-navy leading-tight mt-0.5">
                    {selectedGame.name}
                  </h3>
                  <p className="text-xs text-brand-orange font-mono font-bold mt-0.5">
                    {activeTier.title}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Total: {activeTier.unitsCount * quantity} Units ({quantity} {activeTier.isEducational ? "Classroom Pack of 10" : quantity === 1 ? "Unit" : "Units"})
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500">
                    {activeTier.isEducational ? "PACKS:" : "QTY:"}
                  </span>
                  <div className="flex items-center border border-gray-200 rounded-lg bg-[#FFFDF9] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1 || isSubmitting}
                      className="px-2.5 py-1 text-slate-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 py-1 font-mono text-xs font-bold text-brand-navy">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                      disabled={quantity >= 10 || isSubmitting}
                      className="px-2.5 py-1 text-slate-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Contents Highlights */}
            <div className="py-4 border-b border-gray-100 space-y-1.5 text-xs text-slate-600 font-medium">
              <span className="font-mono text-[11px] font-bold uppercase text-slate-700 block mb-1">
                {activeTier.isEducational ? "EDUCATIONAL INCLUSIONS:" : "BOX CONTENTS INCLUDE:"}
              </span>
              {activeTier.isEducational ? (
                <>
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Teacher Training Session (Live Certified)</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Set of Modular Lesson Plans &amp; Rubrics</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Quiz &amp; Assessment Diagnostic Plans</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Student Article Publication Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct Student Internships &amp; Fellowships</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Quad-Fold Heavyweight Interdependent Ward Map</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>150+ Municipal Crisis, Policy &amp; Event Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>40+ Custom Wooden Civic Infrastructure Tokens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Full Facilitator Manual &amp; Debrief Handbook</span>
                  </div>
                </>
              )}
            </div>

            {/* Price Calculations */}
            <div className="py-4 border-b border-gray-100 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Unit Price</span>
                <span className="font-bold text-brand-navy">
                  ₹{unitPrice.toLocaleString("en-IN")}
                </span>
              </div>

              {quantity > 1 && (
                <div className="flex justify-between text-slate-600">
                  <span>Quantity</span>
                  <span className="font-bold text-brand-navy">
                    × {quantity}
                  </span>
                </div>
              )}

              <div className="pt-2 border-t border-dashed border-gray-200 flex justify-between items-baseline text-sm sm:text-base font-bold text-brand-navy">
                <span className="font-display uppercase tracking-wide">TOTAL PAYABLE:</span>
                <span className="font-mono text-xl sm:text-2xl font-black text-brand-green">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Desktop / Primary Payment Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleProceedToPayment}
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>INITIALIZING PAYMENT GATEWAY...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>PROCEED TO SECURE PAYMENT</span>
                  </>
                )}
              </button>

              <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant order confirmation · Prompt response on WhatsApp &amp; Phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Our dispatch team will connect to confirm invoice &amp; delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Sticky Checkout Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block leading-tight">
              TOTAL PAYABLE
            </span>
            <span className="font-mono text-xl font-black text-brand-green leading-none">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            onClick={handleProceedToPayment}
            disabled={isSubmitting}
            className="flex-1 max-w-[240px] py-3.5 px-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer active:scale-98 transition-all"
          >
            {isSubmitting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>PROCESSING...</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>PAY NOW</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
