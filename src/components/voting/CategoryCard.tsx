"use client"

import { motion } from "framer-motion"
import { ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface CategoryCardProps {
  id: string
  eventId: string
  name: string
  description: string
  totalVotes: string
  candidateCount: number
}

export function CategoryCard({ category }: { category: CategoryCardProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/events/${category.eventId}/categories/${category.id}`}>
        <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-md group h-full flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                 <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">{category.candidateCount} Kandidat</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {category.description}
            </p>
          </CardHeader>
          <CardFooter className="border-t pt-4 bg-muted/20 flex justify-between items-center">
            <span className="text-xs font-medium text-muted-foreground">
              Total Suara: <span className="text-primary">{category.totalVotes}</span>
            </span>
            <Button variant="ghost" size="sm" className="gap-1 text-primary p-0 h-auto hover:bg-transparent hover:text-primary/80">
              Lihat Kandidat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
