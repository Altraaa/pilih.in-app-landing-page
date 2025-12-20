"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

// Mock Data
const clients = [
  "TechDaily", "IndoMusic", "GamerZ", "Award.id", "KampusMerdeka", "StartUpIndo", "CreativeFest", "GovTech"
]

const pastEvents = [
  "https://images.unsplash.com/photo-1475721027767-f7594fb8cbcd?q=80&w=2070", // Award
  "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974", // Concert
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", // Conference
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070", // Festival
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Clients Grid */}
        <div className="mb-24 text-center">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-8">Dipercaya Oleh</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {clients.map((client, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl md:text-2xl font-heading font-bold text-foreground hover:scale-110 transition-transform cursor-default"
                >
                  {client}
                </motion.div>
             ))}
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Kisah Sukses <br/>
              <span className="text-primary">Event Terbaik</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dari ajang penghargaan bergengsi hingga kompetisi komunitas grassroots, 
              Pilih.in telah menjadi saksi ribuan momen kemenangan yang adil dan transparan.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">99.9%</span>
                <span className="text-sm text-muted-foreground">Uptime</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">0</span>
                <span className="text-sm text-muted-foreground">Fraud</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {pastEvents.map((img, i) => (
                  <CarouselItem key={i}>
                     <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                       <Image 
                         src={img} 
                         alt={`Portfolio ${i}`}
                         fill
                         className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                     </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm" />
            </Carousel>
            
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  )
}
