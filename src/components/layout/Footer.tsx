import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                P
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Pilih<span className="text-primary">.in</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Platform voting terpercaya untuk setiap momen penting Anda. Aman, transparan, dan real-time.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#events" className="text-zinc-400 hover:text-primary transition-colors">Live Events</Link></li>
              <li><Link href="#portfolio" className="text-zinc-400 hover:text-primary transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>hello@pilih.in</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Jl. Teknologi No. 123, Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pilih.in. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span>Made by @sputra712._</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
