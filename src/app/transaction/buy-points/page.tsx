"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Coins, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

// Add Accordion component since it wasn't imported before (might need to create it or assume it exists in ui/accordion)
// Based on viewed files, I haven't seen accordion.tsx. I'll rely on Radix UI instructions or create a simple one if needed.
// Wait, I saw @radix-ui/react-accordion in package.json. I should check if ui/accordion.tsx exists.
// User didn't view ui/accordion.tsx. I will create a simple Tailwind one or assume it exists. 
// Actually, to be safe, I'll just build a custom simple FAQ section without complex components for now,
// or check if I can assume shadcn components. 
// The user said "tambah dengan contoh pertanyaan yang sering ditanyakan".

export default function BuyPointsPage() {
  const router = useRouter()
  const [points, setPoints] = useState([100])
  
  const PRICE_PER_POINT = 1000
  const totalPrice = points[0] * PRICE_PER_POINT
  
  const handleBuy = () => {
    router.push(`/transaction/payment?points=${points[0]}&amount=${totalPrice}`)
  }

  const FAQ_ITEMS = [
    {
      question: "Apa kegunaan Poin Voting?",
      answer: "Poin voting digunakan untuk memberikan suara (vote) kepada kandidat favorit Anda dalam berbagai event yang tersedia di platform Pilih.in."
    },
    {
      question: "Berapa lama poin berlaku?",
      answer: "Poin yang Anda beli tidak memiliki masa kadaluarsa (lifetime validity) dan dapat digunakan kapan saja untuk event apapun."
    },
    {
      question: "Apakah poin bisa diuangkan kembali?",
      answer: "Tidak (Non-refundable). Poin yang sudah dibeli tidak dapat ditukarkan kembali dengan uang tunai."
    },
    {
      question: "Metode pembayaran apa yang tersedia?",
      answer: "Kami mendukung pembayaran melalui QRIS (GoPay, OVO, Dana, ShopeePay) dan Virtual Account bank-bank besar di Indonesia."
    }
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Increased top padding to pt-36 to avoid navbar clash */}
      <section className="flex-grow container mx-auto px-4 md:px-6 pt-36 pb-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Top Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Points</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Dukung kandidat favoritmu menuju kemenangan dengan sistem voting yang adil dan transparan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Left Column: Current Balance & Info */}
            <div className="lg:col-span-1 space-y-6">
               <Card className="border-primary/10 shadow-lg bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Saldo Anda</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Coins className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-3xl font-heading font-bold">250</span>
                      <span className="text-sm text-muted-foreground ml-1">Poin</span>
                    </div>
                  </div>
                </CardContent>
               </Card>
               
               <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-xl p-5">
                 <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                   <Check className="w-4 h-4" /> Kenapa beli poin?
                 </h3>
                 <ul className="space-y-2 text-sm text-muted-foreground">
                   <li>• 1 Vote = 10 Poin</li>
                   <li>• Vote berkali-kali tanpa batas</li>
                   <li>• Dukung hingga menang</li>
                 </ul>
               </div>
            </div>

            {/* Right Column: Interaction */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-xl h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">Pilih Nominal</CardTitle>
                  <CardDescription>Geser untuk menentukan jumlah poin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pt-6 flex-grow">
                  <div className="text-center p-8 bg-muted/20 rounded-2xl border border-dashed border-muted-foreground/30">
                    <div className="text-6xl font-heading font-bold text-primary mb-2">
                      {points[0]} <span className="text-2xl text-muted-foreground font-normal">Poin</span>
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Total: <span className="text-foreground">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(totalPrice)}</span>
                    </p>
                  </div>

                  <div className="px-2">
                    <Slider
                      defaultValue={[100]}
                      max={1000}
                      min={10}
                      step={10}
                      value={points}
                      onValueChange={setPoints}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs font-medium text-muted-foreground mt-2">
                      <span>10 Poin (Min)</span>
                      <span>1000 Poin (Max)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 border-t bg-muted/5 p-6 rounded-b-xl">
                  <div className="w-full flex justify-between items-center text-sm mb-2">
                    <span className="text-muted-foreground">Harga Satuan</span>
                    <span className="font-mono">Rp 1.000 / poin</span>
                  </div>
                  <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" onClick={handleBuy}>
                    Lanjut Pembayaran
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan layanan kami.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
             <div className="text-center mb-8">
               <h2 className="text-2xl font-heading font-bold">Sering Ditanyakan</h2>
               <p className="text-muted-foreground">Jawaban untuk pertanyaan umum seputar poin voting.</p>
             </div>
             
             <div className="space-y-4">
               {FAQ_ITEMS.map((item, index) => (
                 <div key={index} className="border rounded-xl px-6 py-4 bg-card hover:border-primary/30 transition-colors cursor-default">
                   <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                     {item.question}
                   </h3>
                   <p className="text-sm text-muted-foreground pl-3.5 leading-relaxed">
                     {item.answer}
                   </p>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
