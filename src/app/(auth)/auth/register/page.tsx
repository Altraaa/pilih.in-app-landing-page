"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/otp-input"

export default function RegisterPage() {
  const [step, setStep] = useState(1) // 1: Email, 2: OTP
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
    setStep(2)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate verification
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
    // Redirect logic would go here
    window.location.href = "/" // temporary redirect
  }

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm shadow-xl border-primary/10 relative z-10 overflow-hidden">
      <CardHeader className="text-center space-y-2">
        <Link href="/" className="mb-4 inline-block">
           <span className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
             pilih.in
           </span>
        </Link>
        <CardTitle className="text-2xl font-heading font-bold">Daftar Akun Baru</CardTitle>
        <CardDescription>
          {step === 1 ? "Masukkan email untuk memulai" : `Masukkan kode OTP yang dikirim ke ${email}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-[250px] relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSendOtp} 
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email</label>
                <Input 
                  type="email" 
                  placeholder="contoh@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Atau daftar dengan
                  </span>
                </div>
              </div>

              <Button variant="outline" type="button" className="w-full mb-4">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Google
              </Button>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-primary-foreground mt-4" type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Kirim OTP"}
                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleVerifyOtp} 
              className="space-y-6 flex flex-col items-center"
            >
              <div className="flex justify-center w-full py-4">
                 <InputOTP maxLength={6}>
                   <InputOTPGroup>
                     <InputOTPSlot index={0} />
                     <InputOTPSlot index={1} />
                     <InputOTPSlot index={2} />
                   </InputOTPGroup>
                   <InputOTPSeparator />
                   <InputOTPGroup>
                     <InputOTPSlot index={3} />
                     <InputOTPSlot index={4} />
                     <InputOTPSlot index={5} />
                   </InputOTPGroup>
                 </InputOTP>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Tidak menerima kode? <button type="button" onClick={() => {}} className="text-primary hover:underline">Kirim Ulang</button>
              </p>
              
              <div className="w-full space-y-2">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-primary-foreground" type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Verifikasi
                </Button>
                <Button variant="ghost" className="w-full" type="button" onClick={() => setStep(1)}>
                  Kembali ke Email
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">
        <p className="text-sm text-muted-foreground">
          Sudah punya akun?{" "}
          <Link href="/auth/login" className="text-primary font-bold hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
