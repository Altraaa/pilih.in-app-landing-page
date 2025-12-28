"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, XCircle, Clock, Loader2, Share2, Download, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

function PaymentStatusContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get("status") || "pending"
  const points = searchParams.get("points") || "0"
  const amount = searchParams.get("amount") || "0"
  
  const isSuccess = status === "success"
  const isFailed = status === "failed"

  return (
    // Responsive container: vertically focused on mobile, but better spacing on desktop
    // pt-32 ensures plenty of space from navbar but not "too much"
    <section className="flex-grow flex items-center justify-center p-4 pt-32 pb-16">
      <Card className="max-w-3xl w-full shadow-2xl border-primary/10 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side: Status Visualization */}
          <div className={`md:w-5/12 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden ${
             isSuccess ? "bg-green-50/50" : isFailed ? "bg-red-50/50" : "bg-yellow-50/50"
          }`}>
             {/* Background decoration */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
             
             {isSuccess ? (
               <div className="relative z-10 mb-6">
                 <div className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full" />
                 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm animate-in zoom-in duration-300">
                   <CheckCircle className="w-10 h-10" />
                 </div>
               </div>
             ) : isFailed ? (
               <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 shadow-sm z-10">
                 <XCircle className="w-10 h-10" />
               </div>
             ) : (
               <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-6 shadow-sm z-10">
                 <Clock className="w-10 h-10" />
               </div>
             )}

             <h1 className="text-2xl font-heading font-bold mb-2 z-10">
               {isSuccess ? "Pembayaran Sukses!" : isFailed ? "Pembayaran Gagal" : "Menunggu Pembayaran"}
             </h1>
             <p className="text-sm text-muted-foreground z-10">
               {isSuccess 
                 ? "Poin voting berhasil ditambahkan ke akun Anda." 
                 : "Mohon segera selesaikan pembayaran Anda."}
             </p>
          </div>

          {/* Right Side: Details & Actions */}
          <div className="md:w-7/12 bg-card p-8 flex flex-col">
             <div className="flex-grow space-y-6">
               <div className="flex items-center gap-2 mb-6">
                 <div className="p-2 bg-primary/10 rounded-lg">
                   <Receipt className="w-5 h-5 text-primary" />
                 </div>
                 <h2 className="font-bold text-lg">Detail Transaksi</h2>
               </div>

               <div className="space-y-4 text-sm">
                 <div className="flex justify-between items-center py-2 border-b border-dashed">
                   <span className="text-muted-foreground">ID Transaksi</span>
                   <span className="font-mono font-bold">TRX-82719</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-muted-foreground">Jumlah Poin</span>
                   <span className="font-medium">{points} Poin Voting</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-muted-foreground">Metode</span>
                   <span className="font-medium badge variant-outline">QRIS</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-muted-foreground">Waktu</span>
                   <span>20 Des 2024, 14:30</span>
                 </div>
                 
                 <div className="bg-muted/30 p-4 rounded-lg mt-4 flex justify-between items-center">
                   <span className="font-semibold text-muted-foreground">Total Dibayar</span>
                   <span className="text-xl font-heading font-bold text-primary">Rp {parseInt(amount).toLocaleString('id-ID')}</span>
                 </div>
               </div>
             </div>

             <div className="mt-8 space-y-3">
               <Button className="w-full h-11 font-bold shadow-lg shadow-primary/10" onClick={() => router.push('/events')}>
                 Mulai Voting Sekarang
               </Button>
               
               <div className="grid grid-cols-2 gap-3">
                 <Button variant="outline" size="sm" className="w-full text-xs">
                   <Download className="w-3.5 h-3.5 mr-2" /> Simpan Bukti
                 </Button>
                 <Button variant="outline" size="sm" className="w-full text-xs">
                   <Share2 className="w-3.5 h-3.5 mr-2" /> Bagikan
                 </Button>
               </div>
               
               <div className="text-center mt-2">
                 <Button variant="link" size="sm" className="text-muted-foreground h-auto p-0 hover:no-underline hover:text-primary" onClick={() => router.push('/')}>
                   Kembali ke Beranda
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default function PaymentStatusPage() {
  return (
    <main className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
        <PaymentStatusContent />
      </Suspense>
      <Footer />
    </main>
  )
}
