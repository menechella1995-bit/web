import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NicoXedits | Edición de Video Profesional & Premium",
  description: "Transformamos tus videos en experiencias cinematográficas. Especialistas en Reels, TikTok, YouTube y contenido corporativo de alto impacto.",
  keywords: ["edición de video", "editor de video", "reels", "tiktok", "youtube", "postproducción", "nicoxedits"],
  openGraph: {
    title: "NicoXedits | Edición de Video Premium",
    description: "Servicios profesionales de edición de video para creadores y empresas.",
    type: "website",
    locale: "es_AR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased mesh-gradient min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
