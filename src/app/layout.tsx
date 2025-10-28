import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusicWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/ScrollAnimations";

const inter = Inter_Tight({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartik017.vercel.app"),
  title: "Kartik Labhshetwar",
  description:
    "I build products that solve real problems. Available for new opportunities.",
  verification: {
    google: "tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ",
  },
  openGraph: {
    url: "https://kartik017.vercel.app/",
    siteName: "Kartik Labhshetwar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Kartik Labhshetwar - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${instrumentSerif.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">{children}</div>
          <ScrollToTop />
          <BackgroundMusic />
        </ThemeProvider>
        <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
        ></script>
      </body>
    </html>
  );
}
