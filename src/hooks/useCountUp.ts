"use client"

import { useEffect, useState } from "react"

export function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(ease * (end - start) + start))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}
