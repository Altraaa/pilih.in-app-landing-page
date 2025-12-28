"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Search, Calendar, Users, Building, ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { CategoryCard } from "@/components/voting/CategoryCard"
import { MOCK_EVENTS, MOCK_CATEGORIES } from "@/lib/mock-data"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const eventId = params.eventId as string
  const [searchQuery, setSearchQuery] = useState("")

  const event = MOCK_EVENTS.find(e => e.id === eventId)
  const categories = MOCK_CATEGORIES.filter(c => c.eventId === eventId)

  // Filter logic
  const filteredCategories = categories.filter(category => {
    if (searchQuery) {
      return category.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return true
  })

  if (!event) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event tidak ditemukan</h1>
            <Button onClick={() => router.push('/events')}>Kembali ke Daftar Event</Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden mt-16">
        <Image 
          src={event.image} 
          alt={event.title} 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-10 pt-20">
          <div className="container mx-auto px-4 md:px-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80 text-foreground"
              onClick={() => router.push('/events')}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Kembali ke Events
            </Button>

            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/20">
              {event.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 max-w-4xl">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6 line-clamp-2">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                {event.organizer}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Total Suara: {event.totalVotes}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 md:px-6 container mx-auto flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-heading font-bold">Kategori Voting</h2>
            <p className="text-muted-foreground text-sm">Pilih kategori untuk melihat kandidat.</p>
          </div>
          
          <div className="flex gap-3">
             <div className="w-[180px]">
               <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="popular">Paling Populer</SelectItem>
                </SelectContent>
               </Select>
             </div>
             <div className="relative flex-1 md:w-64">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <Input 
                 placeholder="Cari kategori..." 
                 className="pl-9"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 bg-muted/20 rounded-xl">
              <p className="text-muted-foreground">Kategori tidak ditemukan.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
