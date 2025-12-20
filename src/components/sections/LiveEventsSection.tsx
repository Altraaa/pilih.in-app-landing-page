"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Pemilihan Ketua BEM UI 2024",
    category: "Organisasi",
    date: "10 - 12 Des 2024",
    voters: "12.5k",
    description: "Pemilihan umum raya untuk menentukan ketua dan wakil ketua BEM UI periode 2024/2025.",
    image: "https://images.unsplash.com/photo-1540910419868-4749459ca6c8?q=80&w=2130"
  },
  {
    id: 2,
    title: "Indonesian Music Awards",
    category: "Entertainment",
    date: "Live Now",
    voters: "45.2k",
    description: "Ajang penghargaan musik paling bergengsi di Indonesia. Dukung musisi favoritmu sekarang!",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070"
  },
  {
    id: 3,
    title: "Esports Regional Championship",
    category: "Competition",
    date: "Ends in 2h",
    voters: "8.1k",
    description: "Turnamen Mobile Legends antar region. Vote tim jagoanmu untuk menjadi juara favorit.",
    image: "https://images.unsplash.com/photo-1540575467063-17e6fc8c62d8?q=80&w=2070"
  }
]

export function LiveEventsSection() {
  return (
    <section id="events" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">
            Sedang Berlangsung
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Vote Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Favoritmu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-card h-full flex flex-col hover:border-primary/30">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 gap-1.5 animate-pulse shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white block" />
                      LIVE
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                      {event.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground gap-1 font-medium">
                      <Users className="w-3 h-3" />
                      {event.voters}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pb-4 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-4 bg-muted/30 mt-auto border-t border-border/50">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white shadow-md font-semibold tracking-wide">
                    Vote Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5">
            Lihat Semua Event
          </Button>
        </div>
      </div>
    </section>
  )
}
