"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { UserCircle, Wallet, Vote, CheckCircle2, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: 1,
    title: "Login ke Akun",
    desc: "Masuk dengan email atau akun Google Anda.",
    icon: UserCircle
  },
  {
    id: 2,
    title: "Beli Poin",
    desc: "Top up poin sesuai jumlah suara yang ingin diberikan.",
    icon: Wallet
  },
  {
    id: 3,
    title: "Pilih Kandidat",
    desc: "Cari event dan kandidat favorit Anda.",
    icon: Vote
  },
  {
    id: 4,
    title: "Konfirmasi Vote",
    desc: "Pastikan pilihan benar, suara Anda terekam.",
    icon: CheckCircle2
  }
]

export function HowToVote() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="how-it-works" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Cara <span className="text-primary">Vote?</span>
          </h2>
          <p className="text-muted-foreground">
            Ikuti 4 langkah mudah untuk memberikan dukungan Anda.
          </p>
        </div>

        {/* Stepper Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-1 bg-border/50 -z-10">
             <motion.div 
               className="h-full bg-primary origin-left"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.5, delay: 0.5 }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col items-center text-center group cursor-pointer",
                  activeStep === step.id ? "opacity-100" : "opacity-70 hover:opacity-100 transition-opacity"
                )}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Icon Circle */}
                <div className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-lg border-4",
                  activeStep === step.id 
                    ? "bg-primary border-primary text-white scale-110 shadow-primary/25" 
                    : "bg-background border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                )}>
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Number Badge (Mobile only) */}
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                  Step {step.id}
                </div>

                <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {step.desc}
                </p>
                
                {/* Chevron for mobile flow */}
                {index < steps.length - 1 && (
                  <ChevronRight className="md:hidden absolute -bottom-6 text-muted-foreground/30 w-6 h-6 rotate-90" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
