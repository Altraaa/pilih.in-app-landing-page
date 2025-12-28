"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2, ArrowLeft, CreditCard, Smartphone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const points = searchParams.get("points") || "0"
  const amount = searchParams.get("amount") || "0"
  
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate payment process
    await new Promise(r => setTimeout(r, 2000))
    setIsLoading(false)
    router.push(`/transaction/status?status=success&points=${points}&amount=${amount}`)
  }

  return (
    // Increased top padding to pt-36
    <section className="flex-grow container mx-auto px-4 md:px-6 pt-36 pb-20">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Pilih Poin
        </Button>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-8">
             <div>
               <h1 className="text-3xl font-heading font-bold mb-3 tracking-tight">Checkout</h1>
               <p className="text-muted-foreground text-lg">Lengkapi data diri dan pilih metode pembayaran untuk menyelesaikan pesanan.</p>
             </div>

             <Card className="border-border/60 shadow-sm">
               <CardHeader>
                 <CardTitle>Data Pembeli</CardTitle>
               </CardHeader>
               <CardContent>
                 <form id="payment-form" onSubmit={handlePayment} className="space-y-6">
                   <div className="space-y-3">
                     <Label htmlFor="name">Nama Lengkap</Label>
                     <Input id="name" placeholder="Nama lengkap anda" className="h-11" required />
                   </div>
                   <div className="space-y-3">
                     <Label htmlFor="phone">No. WhatsApp</Label>
                     <Input id="phone" type="tel" placeholder="08xxxxxxxxxx" className="h-11" required />
                   </div>
                   <div className="space-y-3">
                     <Label htmlFor="method">Metode Pembayaran</Label>
                     <Select required>
                       <SelectTrigger className="h-11">
                         <SelectValue placeholder="Pilih Metode Pembayaran" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="qris">
                           <div className="flex items-center gap-3">
                             <div className="bg-muted p-1 rounded"><Smartphone className="w-4 h-4" /></div>
                             <span className="font-medium">QRIS</span>
                             <span className="text-xs text-muted-foreground ml-auto">GoPay, OVO, Dana</span>
                           </div>
                         </SelectItem>
                         <SelectItem value="va-bca">
                           <div className="flex items-center gap-3">
                             <div className="bg-muted p-1 rounded"><CreditCard className="w-4 h-4" /></div>
                             <span className="font-medium">Virtual Account BCA</span>
                           </div>
                         </SelectItem>
                         <SelectItem value="va-mandiri">
                           <div className="flex items-center gap-3">
                             <div className="bg-muted p-1 rounded"><CreditCard className="w-4 h-4" /></div>
                             <span className="font-medium">Virtual Account Mandiri</span>
                           </div>
                         </SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </form>
               </CardContent>
             </Card>
          </div>

          <div className="md:col-span-5 relative">
             <div className="sticky top-32">
               <Card className="border-primary/20 shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm">
                 <div className="bg-primary/5 p-6 border-b border-primary/10">
                   <h3 className="font-heading font-bold text-lg text-primary">Ringkasan Pesanan</h3>
                 </div>
                 <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Item</span>
                      <span className="font-medium">{points} Poin Voting</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Harga</span>
                      <span className="font-medium">Rp {parseInt(amount).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Biaya Layanan</span>
                      <span className="font-medium">Rp 2.500</span>
                    </div>
                    <div className="border-t border-dashed pt-4 mt-2 flex justify-between items-center">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-2xl text-primary font-heading">Rp {(parseInt(amount) + 2500).toLocaleString('id-ID')}</span>
                    </div>
                 </CardContent>
                 <CardFooter className="p-6 bg-muted/30">
                   <Button className="w-full h-12 text-lg bg-gradient-to-r from-primary to-primary/90 hover:to-primary shadow-lg shadow-primary/20" form="payment-form" type="submit" disabled={isLoading}>
                     {isLoading ? (
                       <>
                         <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                         Memproses...
                       </>
                     ) : (
                       <>
                         <CheckCircle2 className="w-5 h-5 mr-2" />
                         Bayar Sekarang
                       </>
                     )}
                   </Button>
                 </CardFooter>
               </Card>
               
               <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg border border-yellow-100 dark:border-yellow-900/20 text-xs text-muted-foreground">
                 <div className="mt-0.5">⚠️</div>
                 <p>Pastikan nominal transfer sesuai hingga 3 digit terakhir untuk mempercepat proses verifikasi.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
        <PaymentContent />
      </Suspense>
      <Footer />
    </main>
  )
}
