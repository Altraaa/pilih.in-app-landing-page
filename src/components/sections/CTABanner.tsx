"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-primary via-[#8B4513] to-primary/80 px-6 py-20 text-center"
        >
          {/* Decorative Patterns */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Siap Membuat Event Voting Anda?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Gabung dengan ratusan penyelenggara event lainnya. 
              Setup mudah, hasil akurat, dan dukungan penuh tim kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-zinc-100 hover:text-primary-foreground font-bold shadow-xl h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                Daftarkan Event Anda
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors h-14 px-8 text-lg rounded-full w-full sm:w-auto font-bold">
                Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
