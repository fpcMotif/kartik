'use client'

import Reach from "@/components/Reach"

export default function ContactSection() {
  return (
    <section className="w-full relative bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="w-full relative">
        <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Dashed Border Container */}
            <div className="border border-dashed border-neutral-300 dark:border-neutral-600 w-full relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-10 md:mb-12 tracking-tight relative z-10">Contact</h2>
              <div className="flex justify-center relative z-10">
                <Reach />
              </div>
              
              {/* Background Effects */}
              <div className="absolute h-full w-full bg-gradient-to-t from-neutral-50/75 dark:from-neutral-900/50 via-transparent to-neutral-50/75 dark:to-neutral-900/50 top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute h-full w-full bg-gradient-to-r from-neutral-50/75 dark:from-neutral-900/50 via-transparent to-neutral-50/75 dark:to-neutral-900/50 top-0 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
