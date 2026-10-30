"use client";

export default function LoadingScreen({
  isFullPage = false,
}: {
  isFullPage?: boolean;
  message?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center p-6 select-none ${
        isFullPage ? "min-h-screen" : "min-h-[50vh]"
      }`}
      aria-label="Loading"
      role="status"
    >
      <div className="w-7 h-7 rounded-full border-2 border-slate-200 border-t-[#C2410C] animate-spin" />
    </div>
  );
}
