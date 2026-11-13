/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import FloatingSocials from "./components/FloatingSocials";
import NavigationProgress from "./components/NavigationProgress";
import PageContentTransition from "./components/PageContentTransition";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dmmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bharat Play | Serious Games & Experiential Learning",
  description: "Bharat Play uses purposeful play, serious games and experiential design to help people understand complex systems and imagine better futures.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}>
      <head>
        {/* Google Tag (gtag.js) / Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TV4C8DJS" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1130874279901329');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1130874279901329&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Cashfree Payment Gateway SDK v3 */}
        <script src="https://sdk.cashfree.com/js/v3/cashfree.js" defer />
      </head>
      <body className="flex flex-col font-sans bg-white text-brand-navy selection:bg-brand-green selection:text-white w-full">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TV4C8DJS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NavigationProgress />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">
            <PageContentTransition>{children}</PageContentTransition>
          </main>
          <Footer />
          <FloatingSocials />
        </SmoothScroll>
      </body>
    </html>
  );
}
