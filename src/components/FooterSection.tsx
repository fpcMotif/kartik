'use client'

import Footer from "@/components/Footer"
import DiagonalBorders from "@/components/DiagonalBorders"

export default function FooterSection() {
  return (
    <section className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30">
      <div className="w-full relative">
        <DiagonalBorders />
        
        <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12 relative z-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
