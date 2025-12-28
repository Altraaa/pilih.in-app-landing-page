"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const timeline = [
  { year: "Sep 2025", title: "Pendirian", desc: "Pilih.in resmi berdiri dengan visi mendigitalkan demokrasi Indonesia." },
  { year: "Des 2025", title: "Event Pertama", desc: "Sukses menyelenggarakan event perdana dan memperoleh 50.000+ suara." },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop" // Professional team/meeting
                alt="Tim Pilih.in"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-heading font-bold text-2xl">Since 2025</div>
                  <p className="opacity-90">Building Trust through Technology</p>
                </div> 
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Perjalanan <span className="text-primary">Kami</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pilih.in lahir dari kebutuhan akan sistem voting yang tidak hanya mudah digunakan, 
                tetapi juga memiliki integritas tinggi. Kami menggabungkan keamanan kriptografi 
                dengan desain antarmuka yang memanjakan pengguna.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 py-2">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-card backdrop-blur-sm p-4 rounded-xl border border-border/60 hover:border-primary/50 transition-colors shadow-md hover:shadow-lg">
                    <span className="text-sm font-bold text-primary mb-1 block">{item.year}</span>
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
