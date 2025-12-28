"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export interface CandidateCardProps {
  id: string
  name: string
  number: string
  image: string
  description: string
  votes: string
}

export function CandidateCard({ candidate, onVote }: { candidate: CandidateCardProps, onVote?: (id: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 group h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image 
            src={candidate.image} 
            alt={candidate.name} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-md border border-border">
            {candidate.number}
          </div>
        </div>
        
        <CardHeader className="pt-4 pb-2 text-center">
          <h3 className="font-heading font-bold text-lg">{candidate.name}</h3>
        </CardHeader>
        
        <CardContent className="pb-4 text-center flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {candidate.description}
          </p>
        </CardContent>
        
        <CardFooter className="pt-2 pb-5 px-6">
          <Button 
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all" 
            variant="outline"
            onClick={() => onVote?.(candidate.id)}
          >
            Vote Kandidat <Check className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
