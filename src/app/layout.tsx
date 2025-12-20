import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilih.in - Wujudkan Suara, Tentukan Pemenang",
  description: "Platform voting modern, aman, dan transparan untuk segala kebutuhan event Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
