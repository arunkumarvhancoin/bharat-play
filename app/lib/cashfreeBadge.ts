export function generatePaymentBadgeSvg(
  status: "PAID" | "UNPAID",
  details: {
    amount: number | string;
    refId?: string;
    eventTitle?: string;
    date?: string;
  }
): string {
  const isPaid = status === "PAID";
  const bg = isPaid ? "#064e3b" : "#7f1d1d";
  const cardBg = isPaid ? "#022c22" : "#450a0a";
  const border = isPaid ? "#10b981" : "#ef4444";
  const title = isPaid ? "ONLINE PAYMENT CONFIRMED" : "PAYMENT INCOMPLETE / NOT PAID";
  const icon = isPaid ? "✓" : "✕";
  const iconColor = isPaid ? "#34d399" : "#f87171";
  const statusLabel = isPaid ? "ONLINE PAYMENT CONFIRMED" : "UNPAID / CANCELLED";
  const note = isPaid
    ? "Verified instantly via secure payment gateway"
    : "Checkout was initiated but payment was not completed";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${cardBg}"/>
      <stop offset="100%" stop-color="${bg}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="360" rx="16" fill="url(#grad)" stroke="${border}" stroke-width="2"/>
  <circle cx="300" cy="65" r="28" fill="${border}" fill-opacity="0.25"/>
  <text x="300" y="75" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="30" font-weight="bold" fill="${iconColor}" text-anchor="middle">${icon}</text>
  <text x="300" y="125" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">${title}</text>
  <text x="300" y="150" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">${note}</text>
  <line x1="50" y1="175" x2="550" y2="175" stroke="#334155" stroke-width="1"/>
  <text x="70" y="210" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" fill="#94a3b8">Status</text>
  <text x="530" y="210" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="bold" fill="${iconColor}" text-anchor="end">${statusLabel}</text>
  <text x="70" y="245" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" fill="#94a3b8">Amount</text>
  <text x="530" y="245" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="end">₹${details.amount}</text>
  <text x="70" y="280" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" fill="#94a3b8">Reference ID</text>
  <text x="530" y="280" font-family="Courier, monospace" font-size="12" fill="#e2e8f0" text-anchor="end">${details.refId || "N/A"}</text>
  <text x="70" y="315" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" fill="#94a3b8">Event</text>
  <text x="530" y="315" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="end">${details.eventTitle || "Bharat Play Workshop"}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
