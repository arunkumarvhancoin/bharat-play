"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPathname = useRef(pathname);

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
    setProgress(15);

    if (timerRef.current) clearInterval(timerRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) return prev + 18;
        if (prev < 70) return prev + 8;
        if (prev < 88) return prev + 3;
        return prev;
      });
    }, 120);

    // Safety timeout: dismiss after 6 seconds if something stalls
    safetyTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
      if (timerRef.current) clearInterval(timerRef.current);
    }, 6000);
  }, []);

  const completeNavigation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

    setProgress(100);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }

    const dismissTimer = setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
    }, 200);

    return () => clearTimeout(dismissTimer);
  }, []);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      lastPathname.current = pathname;
      completeNavigation();
    }
  }, [pathname, completeNavigation]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.includes("wa.me") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const destination = new URL(href, window.location.href);

        if (destination.origin !== window.location.origin) return;

        if (
          destination.pathname === window.location.pathname &&
          destination.search === window.location.search
        ) {
          if (destination.hash) return;
          return;
        }

        startNavigation();
      } catch {
        if (href.startsWith("#")) return;
        startNavigation();
      }
    };

    const handleCustomNavStart = () => {
      startNavigation();
    };

    const handlePopState = () => {
      startNavigation();
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    window.addEventListener("start-navigation", handleCustomNavStart);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      window.removeEventListener("start-navigation", handleCustomNavStart);
      window.removeEventListener("popstate", handlePopState);
      if (timerRef.current) clearInterval(timerRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [startNavigation]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[999999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: isNavigating ? 1 : 0 }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#C2410C] via-[#ea580c] to-[#15803D] transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(194, 65, 12, 0.7), 0 0 5px rgba(234, 88, 12, 0.5)",
        }}
      />
    </div>
  );
}
