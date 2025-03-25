import type { Metadata } from "next";
import {Fanwood_Text} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const fanwood = Fanwood_Text({
  weight: ['400'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Kartik",
  description: "my dead simple portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={fanwood.className}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
      <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
      ></script>
    </html>
  );
}
