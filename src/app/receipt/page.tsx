'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle2, 
  Loader2,
  Receipt,
  Smartphone,
  MessageCircle,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReceiptPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const whatsappNumber = "2246439602";

  const handleWhatsAppSend = () => {
    if (!file) return;
    
    // Abrir WhatsApp para que el usuario adjunte el comprobante
    const message = encodeURIComponent("💰 ¡Hola Nico! Ya realicé el pago de mi edición.\n\nAdjunto a este mensaje te envío el comprobante de la transferencia realizada al alias *nicolas.menechella*.\n\n¡Espero el video editado! Saludos.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setStatus('success');
  };

  if (status === 'success') {
    const whatsappMsg = encodeURIComponent("💰 ¡Hola Nico! Ya realicé el pago de mi edición.\n\nAdjunto a este mensaje te envío el comprobante de la transferencia realizada al alias *nicolas.menechella*.\n\n¡Espero el video editado! Saludos.");
    const emailSubject = encodeURIComponent("💰 COMPROBANTE DE PAGO ENVIADO - NICOXEDITS");
    const emailBody = encodeURIComponent("Hola Nico,\n\nTe envío este correo para avisarte que ya subí el comprobante de pago a la web. \n\nAdjunto a este mensaje te envío la captura de la transferencia.\n\n¡Muchas gracias!");

    return (
      <div className="min-h-screen flex items-center justify-center p-6 mesh-gradient">
        <div className="max-w-xl w-full bg-zinc-900 border border-white/10 p-12 rounded-[2.5rem] text-center space-y-8 shadow-2xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">¡Comprobante Listo!</h2>
            <p className="text-zinc-400 font-medium">Ahora elige por dónde quieres avisar a Nico:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              className="flex items-center justify-center gap-3 py-5 bg-green-500 text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl text-xs"
            >
              <MessageCircle size={20} fill="currentColor" />
              Avisar por WhatsApp
            </a>
            <a 
              href={`mailto:menechella1995@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="flex items-center justify-center gap-3 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl text-xs"
            >
              <Mail size={20} />
              Avisar por Email
            </a>
          </div>

          <div className="pt-6 border-t border-white/5">
            <Link 
              href="/" 
              className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-black"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto flex flex-col justify-center">
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Volver
      </Link>
        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
            <Receipt size={12} />
            <span>Pago Confirmado</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white">Enviar Comprobante</h1>
          <p className="text-zinc-500 font-medium max-w-lg mx-auto text-lg text-center leading-tight">Selecciona la captura de tu transferencia para enviarla por WhatsApp.</p>
        </div>

        <div className="space-y-8">
          <div 
            className={`relative border-2 border-dashed rounded-[2.5rem] p-16 text-center transition-all cursor-pointer group flex flex-col items-center justify-center ${file ? 'border-green-500/50 bg-green-500/5' : 'border-white/5 hover:border-white/20 bg-zinc-900/50 hover:bg-zinc-900'}`}
            onClick={() => document.getElementById('receipt-upload')?.click()}
          >
            <input 
              id="receipt-upload" 
              type="file" 
              className="hidden" 
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${file ? 'bg-green-500 text-black' : 'bg-white/5 text-zinc-500'}`}>
              <Receipt size={48} />
            </div>
            <p className="text-2xl font-black uppercase italic tracking-tight text-white">{file ? file.name : 'Seleccionar Comprobante'}</p>
            <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-bold">Captura de pantalla o PDF</p>
          </div>

          <button 
            onClick={handleWhatsAppSend}
            disabled={!file}
            className="w-full py-6 bg-green-500 text-white font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 shadow-2xl"
          >
            <MessageCircle size={24} fill="currentColor" />
            <span>Enviar por WhatsApp</span>
          </button>
          
          <p className="text-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
            Al hacer clic, se abrirá WhatsApp para que puedas <br /> adjuntar el archivo directamente en el chat.
          </p>
        </div>
    </div>
  );
}
