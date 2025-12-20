"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Portfolio", href: "#portfolio" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 z-50 mx-auto transition-all duration-300",
        isScrolled
          ? "top-0 md:top-4 w-full md:w-[95%] md:max-w-7xl md:rounded-full bg-background/80 backdrop-blur-md border-b md:border border-border/50 shadow-lg py-3 md:py-2"
          : "top-0 w-full bg-transparent border-transparent py-4 md:py-6"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:shadow-[0_0_15px_rgba(111,78,55,0.5)] transition-shadow">
            P
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Pilih<span className="text-primary">.in</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white shadow-lg shadow-primary/20">
            Login
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-xl p-0"
          >
            <SheetHeader className="text-left border-b border-border/10 px-6 py-4">
              <SheetTitle className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Menu
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu for Pilih.in website
              </SheetDescription>
            </SheetHeader>
            
            <nav className="flex flex-col gap-1 mt-4 px-4 h-[calc(100%-80px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-primary/5 active:scale-95 duration-200 flex items-center"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-auto mb-6 px-2 space-y-3">
                <Button 
                  className="w-full h-12 text-lg shadow-lg bg-gradient-to-r from-primary to-primary/90 hover:to-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-lg border-primary/20 hover:bg-primary/5 text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Register Event
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}