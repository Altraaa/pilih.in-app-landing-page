"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export interface WinnerProps {
  id: string
  name: string
  votes: string
  percentage: number
  image: string
  rank: 1 | 2 | 3
}

export function Podium({ winners }: { winners: WinnerProps[] }) {
  // Sort by rank just in case, though usually passed sorted
  const sortedWinners = [...winners].sort((a, b) => a.rank - b.rank)
  const first = sortedWinners.find(w => w.rank === 1)
  const second = sortedWinners.find(w => w.rank === 2)
  const third = sortedWinners.find(w => w.rank === 3)

  const PodiumItem = ({ winner, delay, height }: { winner: WinnerProps | undefined, delay: number, height: string }) => {
    if (!winner) return <div className="w-1/3" />
    
    return (
      <div className="flex flex-col items-center justify-end w-1/3 gap-3 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.5 }}
          className="relative flex flex-col items-center gap-2"
        >
          <div className={`relative rounded-full overflow-hidden border-4 ${winner.rank === 1 ? 'border-yellow-400 w-24 h-24 md:w-32 md:h-32 shadow-[0_0_20px_rgba(250,204,21,0.5)]' : winner.rank === 2 ? 'border-gray-300 w-20 h-20 md:w-24 md:h-24' : 'border-amber-700 w-16 h-16 md:w-20 md:h-20'}`}>
            <Image 
              src={winner.image} 
              alt={winner.name} 
              fill
              className="object-cover" 
            />
            <div className={`absolute bottom-0 w-full text-center text-[10px] md:text-xs font-bold text-white py-0.5 ${winner.rank === 1 ? 'bg-yellow-500' : winner.rank === 2 ? 'bg-gray-400' : 'bg-amber-700'}`}>
              #{winner.rank}
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-sm md:text-base line-clamp-1">{winner.name}</p>
            <p className="text-xs text-muted-foreground">{winner.votes} Suara ({winner.percentage}%)</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height }}
          transition={{ delay: delay + 0.2, duration: 0.6, type: "spring" }}
          className={`w-full rounded-t-lg bg-gradient-to-t ${winner.rank === 1 ? 'from-yellow-400/20 to-yellow-100/10 border-t-4 border-yellow-400' : winner.rank === 2 ? 'from-gray-300/20 to-gray-100/10 border-t-4 border-gray-300' : 'from-amber-700/20 to-amber-100/10 border-t-4 border-amber-700'}`}
        />
      </div>
    )
  }

  return (
    <div className="flex items-end justify-center h-80 md:h-96 w-full max-w-3xl mx-auto px-4 pb-0 relative">
      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-muted/20 to-transparent -z-10" />
      
      <PodiumItem winner={second} delay={0.2} height="40%" />
      <PodiumItem winner={first} delay={0.4} height="55%" />
      <PodiumItem winner={third} delay={0.6} height="25%" />
    </div>
  )
}
