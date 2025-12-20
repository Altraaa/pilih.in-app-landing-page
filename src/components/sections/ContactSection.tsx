"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  subject: z.string().min(5, {
    message: "Subjek harus minimal 5 karakter.",
  }),
  message: z.string().min(10, {
    message: "Pesan harus minimal 10 karakter.",
  }),
})

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Pesan terkirim!", {
      description: "Kami akan segera menghubungi Anda.",
    })
    console.log(values)
    form.reset()
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Hubungi <span className="text-primary">Kami</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Punya pertanyaan tentang fitur atau ingin demo produk? 
                Tim kami siap membantu kebutuhan voting event Anda.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@pilih.in</p>
                  <p className="text-muted-foreground">support@pilih.in</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Telepon</h3>
                  <p className="text-muted-foreground">+62 812 3456 7890</p>
                  <p className="text-muted-foreground">Senin - Jumat, 09:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Kantor</h3>
                  <p className="text-muted-foreground">
                    Jl. Teknologi No. 123<br/>
                    Jakarta Selatan, 12345<br/>
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-background p-8 rounded-3xl shadow-xl border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-secondary/20 border-border/50 focus:bg-background h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-secondary/20 border-border/50 focus:bg-background h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subjek</FormLabel>
                      <FormControl>
                        <Input placeholder="Tanya Demo" {...field} className="bg-secondary/20 border-border/50 focus:bg-background h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ceritakan kebutuhan event Anda..." 
                          className="min-h-[120px] bg-secondary/20 border-border/50 focus:bg-background resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-bold shadow-lg">
                  Kirim Pesan
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  )
}
