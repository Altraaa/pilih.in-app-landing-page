"use client"

import { motion } from "framer-motion"
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCountUp } from "@/hooks/useCountUp"

function StatCard({ icon: Icon, value, label, delay }: { icon: any, value: number, label: string, delay: number }) {
  const count = useCountUp(value, 2500)
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-1 font-heading">
        {count.toLocaleString()}+
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Platform Voting Terbaik di Indonesia
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Wujudkan Suara, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Tentukan Pemenang
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Platform voting digital yang aman, transparan, dan real-time. 
              Solusi terbaik untuk pemilihan ketua organisasi, event award, hingga kompetisi bakat.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-12 px-8 text-base rounded-full">
                Vote Sekarang
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 h-12 px-8 text-base rounded-full">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-zinc-400">U{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-foreground">150+</span> Klien Percaya Kami
              </div>
            </div>
          </motion.div>
          
          {/* Stats / Visual */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6 mt-12 md:mt-0">
                <StatCard icon={Trophy} value={50000} label="Total Suara" delay={0.2} />
                <StatCard icon={Calendar} value={200} label="Event Sukses" delay={0.4} />
              </div>
              <div className="space-y-6 md:mt-12">
                <StatCard icon={Users} value={150} label="Total Client" delay={0.6} />
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8 }}
                   className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl shadow-xl text-white flex flex-col justify-center min-h-[160px]"
                >
                   <div className="font-heading text-2xl font-bold mb-2">Buat Event?</div>
                   <p className="opacity-90 mb-4 text-sm">Mulai voting Anda dalam hitungan menit.</p>
                   <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                     Daftar Sekarang
                   </Button>
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
