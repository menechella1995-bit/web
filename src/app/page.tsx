'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  MessageCircle,
  Search,
  ChevronDown,
  Receipt,
  Upload,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LandingPage() {
  const whatsappNumber = "2246439602";
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [showReceiptUI, setShowReceiptUI] = useState(false);

  const services = [
    { title: "REELS / TIKTOK", price: "$6.000", desc: "Edición dinámica con subtítulos, efectos y música viral." },
    { title: "YOUTUBE VIDEO", price: "$15.000", desc: "Storytelling, cortes precisos y corrección de color profesional." },
    { title: "CONTENIDO MASTER", price: "CONSULTAR", desc: "Producciones completas, comerciales y videos corporativos." },
  ];

  const handleWhatsAppReceipt = () => {
    if (!receiptFile) return;
    const message = encodeURIComponent("🚀 ¡Hola Nico! Acabo de subir mi comprobante de pago a la web. Te lo adjunto por aquí también.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen text-white violet-gradient-bg">
      
      {/* --- MINIMAL NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 bg-transparent">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-white rounded-full"></div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase">NICOXEDITS</span>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="/dashboard" 
            className="px-6 py-2 border border-white/30 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            Portafolios
          </Link>
          <button 
            onClick={() => window.location.href = '/dashboard?admin=true'}
            className="p-2 opacity-20 hover:opacity-100 transition-opacity text-white"
            title="Admin"
          >
            <ShieldCheck size={16} />
          </button>
        </div>
      </nav>
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.1em] uppercase welcome-text leading-tight text-glow">
            BIENVENIDO A <br className="hidden md:block" /> <span className="font-bold">NICOXEDITS!</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Transformando tus ideas en experiencias cinematográficas de alto impacto con edición de video profesional.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-12">
            <Link 
              href="/send" 
              className="btn-minimal"
            >
              SUBIR VIDEO
            </Link>
            <Link 
              href="/dashboard" 
              className="btn-minimal !bg-white/10 !text-white hover:!bg-white/20 border border-white/10"
            >
              PORTAFOLIO
            </Link>
            <button 
              onClick={() => setShowReceiptUI(!showReceiptUI)} 
              className={`btn-minimal transition-all ${showReceiptUI ? '!bg-white !text-black scale-105' : '!bg-white/10 !text-white hover:!bg-white/20'}`}
            >
              ENVIAR COMPROBANTE DE PAGO
            </button>
            <a 
              href="mailto:menechella1995@gmail.com" 
              className="btn-minimal !bg-transparent border border-white/30 hover:!bg-white/10"
            >
              CONTÁCTANOS
            </a>
          </div>

          {/* --- MINIMAL RECEIPT UPLOAD (Appears when clicking TRANSFERIR) --- */}
          <AnimatePresence>
            {showReceiptUI && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="pt-12 w-full max-w-md mx-auto"
              >
                <div 
                  className={`relative group border-2 border-dashed rounded-[2rem] p-8 transition-all cursor-pointer ${receiptFile ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
                  onClick={() => document.getElementById('receipt-upload-main')?.click()}
                >
                  <input 
                    id="receipt-upload-main" 
                    type="file" 
                    className="hidden" 
                    accept="image/*,.pdf"
                    onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                  />
                  
                  <div className="flex flex-col items-center gap-4">
                    {receiptFile ? (
                      <div className="w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center animate-bounce">
                        <CheckCircle2 size={24} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-white/5 text-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Receipt size={24} />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">
                        {receiptFile ? receiptFile.name : 'Subir Comprobante'}
                      </p>
                      <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Click para seleccionar archivo</p>
                    </div>
                  </div>
                </div>

                {receiptFile && (
                  <motion.button 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleWhatsAppReceipt}
                    className="w-full mt-4 py-4 bg-green-500 text-white font-black uppercase tracking-widest rounded-2xl text-[10px] shadow-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    Enviar a Nico por WhatsApp
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/10 transition-all text-center group shadow-2xl backdrop-blur-sm"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-black tracking-widest text-white/40 uppercase group-hover:text-white transition-colors">
                {service.price}
              </div>
              <h3 className="text-2xl font-black italic tracking-tight uppercase italic">{service.title}</h3>
              <p className="text-xs text-white/40 font-medium leading-relaxed uppercase tracking-wider">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FLOATING ELEMENTS --- */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        className="fixed bottom-10 right-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

    </div>
  );
}
