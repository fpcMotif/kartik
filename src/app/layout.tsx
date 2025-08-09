import type { Metadata } from "next";
import {Inter_Tight} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Circuit Board Background Pattern */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Light mode pattern */}
            <div
              className="absolute inset-0 dark:hidden"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                  repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                  radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
                  radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
              }}
            />
            {/* Dark mode pattern */}
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(156, 163, 175, 0.04) 19px, rgba(156, 163, 175, 0.04) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.04) 39px, rgba(156, 163, 175, 0.04) 40px),
                  repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(156, 163, 175, 0.04) 19px, rgba(156, 163, 175, 0.04) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.04) 39px, rgba(156, 163, 175, 0.04) 40px),
                  radial-gradient(circle at 20px 20px, rgba(209, 213, 219, 0.03) 2px, transparent 2px),
                  radial-gradient(circle at 40px 40px, rgba(209, 213, 219, 0.03) 2px, transparent 2px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
              }}
            />
          </div>
          <div className="relative z-10">
            {children}
          </div>
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
