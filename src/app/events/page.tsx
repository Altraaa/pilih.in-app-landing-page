"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventCard, type EventCardProps } from "@/components/voting/EventCard"
import { MOCK_EVENTS } from "@/lib/mock-data"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter logic
  const filteredEvents = MOCK_EVENTS.filter(event => {
    // Tab filter
    if (activeTab !== "all" && event.status !== activeTab) return false
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  // Convert to generic EventCardProps (aligning with mock data types)
  const events: EventCardProps[] = filteredEvents.map(e => ({
    ...e,
    status: e.status as "live" | "upcoming" | "ended" // Type assertion safe here due to const assertion in mock
  }))

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-6 container mx-auto flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Daftar <span className="text-primary">Event Voting</span>
            </h1>
            <p className="text-muted-foreground">
              Temukan dan berpartisipasi dalam berbagai event voting terkini.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-card border rounded-lg p-1 shadow-sm w-full md:w-auto">
            <Search className="w-4 h-4 text-muted-foreground ml-2" />
            <Input 
              placeholder="Cari event..." 
              className="border-none shadow-none focus-visible:ring-0 bg-transparent h-auto py-1 px-2 w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-muted/50 p-1 h-auto flex-wrap justify-start">
            <TabsTrigger value="all" className="px-6 py-2">Semua</TabsTrigger>
            <TabsTrigger value="live" className="px-6 py-2 gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Berlangsung
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="px-6 py-2">Akan Datang</TabsTrigger>
            <TabsTrigger value="ended" className="px-6 py-2">Selesai</TabsTrigger>
          </TabsList>
        </Tabs>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed">
            <p className="text-muted-foreground text-lg">Tidak ada event ditemukan.</p>
            {activeTab !== "all" && (
               <button 
                 onClick={() => setActiveTab("all")}
                 className="text-primary hover:underline mt-2 text-sm"
               >
                 Lihat semua event
               </button>
            )}
          </div>
        )}
      </section>
      
      <Footer />
    </main>
  )
}
