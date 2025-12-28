"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get("redirect") || "/"
  
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login delay
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
    router.push(redirectPath)
  }

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm shadow-xl border-primary/10 relative z-10">
      <CardHeader className="text-center space-y-2">
        <Link href="/" className="mb-4 inline-block">
           <span className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
             pilih.in
           </span>
        </Link>
        <CardTitle className="text-2xl font-heading font-bold">Selamat Datang</CardTitle>
        <CardDescription>
          Masuk ke akun Pilihin untuk mulai voting
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <Input type="email" placeholder="contoh@email.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none">
                Password
              </label>
              <Link href="#" className="text-xs text-primary hover:underline">
                Lupa Password?
              </Link>
            </div>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required 
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-9 w-9 text-muted-foreground hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-primary-foreground transition-all" type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Login
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Atau lanjutkan dengan
            </span>
          </div>
        </div>

        <Button variant="outline" type="button" className="w-full" disabled={isLoading}>
          <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">
        <p className="text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <Link href="/auth/register" className="text-primary font-bold hover:underline">
            Daftar Sekarang
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>}>
      <LoginForm />
    </Suspense>
  )
}
