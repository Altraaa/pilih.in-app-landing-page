"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Diamond, Smartphone, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Aman & Terenkripsi",
    desc: "Sistem enkripsi end-to-end menjamin setiap suara valid dan tidak dapat dimanipulasi.",
    icon: ShieldCheck,
    className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-secondary/20",
  },
  {
    title: "Hasil Real-time",
    desc: "Pantau perolehan suara secara langsung tanpa jeda waktu.",
    icon: Zap,
    className: "md:col-span-1 lg:col-span-1 border-primary/20",
  },
  {
    title: "Sistem Poin Fair",
    desc: "Mekanisme voting berbasis poin mencegah bot dan spam.",
    icon: Diamond,
    className: "md:col-span-1 lg:col-span-1 border-primary/20",
  },
  {
    title: "Mobile Friendly",
    desc: "Akses mudah dari smartphone tanpa perlu install aplikasi tambahan.",
    icon: Smartphone,
    className: "md:col-span-2 lg:col-span-2 bg-gradient-to-tr from-card to-primary/5",
  },
  {
    title: "Multi-event Support",
    desc: "Kelola berbagai jenis pemilihan dalam satu dashboard terintegrasi.",
    icon: Users,
    className: "md:col-span-3 lg:col-span-3 bg-secondary/10 border-primary/10",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Kenapa Memilih <span className="text-primary">Pilih.in</span>?
          </h2>
          <p className="text-muted-foreground">
            Kami menghadirkan standar baru dalam dunia voting digital. 
            Lebih dari sekadar platform, kami adalah partner demokrasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-8 border hover:shadow-2xl transition-all duration-300",
                "bg-card/50 backdrop-blur-sm border-border/40 hover:border-primary/50 hover:bg-card",
                feature.className
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <feature.icon className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground/90 group-hover:text-foreground transition-colors font-medium">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
