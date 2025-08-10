import type { Metadata } from "next";
import {Inter_Tight, Instrument_Serif} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/LoadingProvider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  title: 'Kartik Labhshetwar',
  description: 'I build products that solve real problems. Available for new opportunities.',
  openGraph: {
    url: 'https://kartik017.vercel.app/',
    siteName: 'Kartik Labhshetwar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Kartik Labhshetwar - Portfolio'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <div className="relative z-10">
              {children}
            </div>
            <ScrollToTop />
          </LoadingProvider>
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
