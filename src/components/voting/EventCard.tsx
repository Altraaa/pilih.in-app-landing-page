"use client"

import { motion } from "framer-motion"
import { Users, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface EventCardProps {
  id: string
  title: string
  category: string
  date: string
  voters: string
  description: string
  image: string
  status: "live" | "upcoming" | "ended"
}

export function EventCard({ event }: { event: EventCardProps }) {
  const isLive = event.status === "live"
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Link href={`/events/${event.id}`}>
        <Card className="overflow-hidden border-border/50 shadow-md hover:shadow-xl transition-all duration-300 group bg-card h-full flex flex-col hover:border-primary/30 active:scale-[0.98]">
          <div className="relative h-48 overflow-hidden">
            <Image 
              src={event.image} 
              alt={event.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {isLive && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 gap-1.5 animate-pulse shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white block" />
                  LIVE
                </Badge>
              </div>
            )}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          </div>
          
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                {event.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground gap-1 font-medium">
                <Users className="w-3 h-3" />
                {event.voters}
              </div>
            </div>
            <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {event.title}
            </h3>
          </CardHeader>
          
          <CardContent className="pb-4 flex-grow">
            <div className="flex items-center text-sm text-muted-foreground gap-2 mb-3">
              <Calendar className="w-4 h-4 text-primary" />
              {event.date}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {event.description}
            </p>
          </CardContent>
          
          <CardFooter className="pt-4 bg-muted/30 mt-auto border-t border-border/50">
            <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white shadow-sm font-semibold tracking-wide group-hover:shadow-md transition-all">
              {isLive ? "Vote Now" : "View Details"}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
