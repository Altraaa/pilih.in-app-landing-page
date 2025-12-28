"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, Search, ListOrdered, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Podium } from "@/components/voting/Podium"
import { CandidateCard } from "@/components/voting/CandidateCard"
import { MOCK_EVENTS, MOCK_CATEGORIES, MOCK_CANDIDATES } from "@/lib/mock-data"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"

export default function CandidatePage() {
  const params = useParams()
  const router = useRouter()
  const eventId = params.eventId as string
  const categoryId = params.categoryId as string
  const [activeTab, setActiveTab] = useState("description")
  const [searchQuery, setSearchQuery] = useState("")

  const event = MOCK_EVENTS.find(e => e.id === eventId)
  const category = MOCK_CATEGORIES.find(c => c.id === categoryId)
  
  // Filter candidates for this category
  const candidates = MOCK_CANDIDATES.filter(c => c.categoryId === categoryId)
  
  // Sort for leaderboard
  const rankedCandidates = [...candidates].sort((a, b) => b.rank - a.rank) // Note: rank is 1,2,3... so sort by rank ascending actually? No, mock data rank 1 is highest votes. 
  // Wait, mock data has 'rank' property. Let's just sort by rank ascending (1 is top).
  const leaderboardCandidates = [...candidates].sort((a, b) => a.rank - b.rank)
  const top3 = leaderboardCandidates.slice(0, 3)
  const others = leaderboardCandidates.slice(3)

  // Filter for 'All Candidates' tab
  const filteredCandidates = candidates.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (!event || !category) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Data tidak ditemukan</h1>
          <Button onClick={() => router.back()}>Kembali</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="bg-muted/30 border-b pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-4 pl-0 hover:pl-2 transition-all hover:bg-transparent text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Kategori
          </Button>
          
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {category.name}
          </h1>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
             <div className="bg-background border rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                <Users className="w-4 h-4 text-primary" />
                {candidates.length} Kandidat
             </div>
             <div className="bg-background border rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                <ListOrdered className="w-4 h-4 text-primary" />
                {category.totalVotes} Total Suara
             </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 md:px-6 py-8 flex-grow">
        <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex h-auto p-1 bg-muted/50 mb-8">
            <TabsTrigger value="description" className="py-2.5">Deskripsi</TabsTrigger>
            <TabsTrigger value="leaderboard" className="py-2.5 gap-2">
              Leaderboard 
              <span className="hidden md:inline-flex bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full">Top 3</span>
            </TabsTrigger>
            <TabsTrigger value="candidates" className="py-2.5">Semua Kandidat</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-6 animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-xl font-bold mb-3">Tentang Kategori Ini</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description} Kategori ini merupakan salah satu yang paling bergengsi dalam event {event.title}. 
                    Voting dibuka mulai tanggal {event.date}. Pastikan Anda memberikan dukungan kepada kandidat 
                    yang menurut Anda paling layak.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3">Mekanisme Voting</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Satu akun dapat melakukan vote berkali-kali menggunakan Poin.</li>
                    <li>Setiap 1 Vote bernilai 10 Poin.</li>
                    <li>Leaderboard diupdate secara realtime.</li>
                    <li>Hasil akhir bersifat mutlak dan tidak dapat diganggu gugat.</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24">
                  <h3 className="font-bold text-lg mb-4">Detail Event</h3>
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      <Image src={event.image} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.organizer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm">
               <div className="text-center mb-10">
                 <h2 className="text-2xl font-bold text-primary mb-2">Klasemen Sementara</h2>
                 <p className="text-muted-foreground">Update Realtime • {category.totalVotes} Total Suara Masuk</p>
               </div>
               
               <Podium winners={top3 as any} /> 
               {/* Type casting 'as any' handled generically for now as mock data alignment */}
            </div>

            {others.length > 0 && (
              <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 bg-muted/30 border-b font-medium grid grid-cols-12 gap-4 text-sm text-muted-foreground">
                   <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                   <div className="col-span-6 md:col-span-8">Nama Kandidat</div>
                   <div className="col-span-4 md:col-span-3 text-right">Perolehan Suara</div>
                </div>
                <div>
                  {others.map((candidate) => (
                    <div key={candidate.id} className="p-4 border-b last:border-0 grid grid-cols-12 gap-4 items-center hover:bg-muted/20 transition-colors">
                      <div className="col-span-2 md:col-span-1 text-center font-bold text-muted-foreground">#{candidate.rank}</div>
                      <div className="col-span-6 md:col-span-8 font-medium truncate">{candidate.name}</div>
                      <div className="col-span-4 md:col-span-3 text-right text-sm">
                        <span className="font-bold text-primary block">{candidate.votes}</span>
                        <span className="text-xs text-muted-foreground">{candidate.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6 animate-in fade-in-50 duration-500">
             <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Cari kandidat..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
             </div>
             
             {filteredCandidates.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {filteredCandidates.map((candidate) => (
                   <CandidateCard 
                     key={candidate.id} 
                     candidate={candidate} 
                     onVote={(id) => {
                       // Handle vote logic -> Redirect to login if not auth, or open confirm modal
                       router.push(`/auth/login?redirect=/events/${eventId}/categories/${categoryId}&action=vote&candidate=${id}`)
                     }}
                   />
                 ))}
               </div>
             ) : (
                <div className="text-center py-12 bg-muted/20 rounded-xl">
                  <p className="text-muted-foreground">Kandidat tidak ditemukan.</p>
                </div>
             )}
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}
