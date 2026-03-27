'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Upload, 
  User, 
  Mail, 
  CheckCircle2, 
  Loader2,
  FileVideo,
  MessageSquare,
  Smartphone,
  Sparkles,
  Zap,
  Play,
  Film
} from 'lucide-react';

export default function SendPage() {
  // Upload States
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instructions, setInstructions] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Library/Portfolio States
  const [portfolioVideos, setPortfolioVideos] = useState<any[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  const fetchPortfolio = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      setPortfolioVideos(data);
    } catch (e) {
      console.error('Error fetching portfolio:', e);
    } finally {
      setLoadingPortfolio(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !userName || (!userEmail && !whatsapp)) {
      setErrorMessage('Por favor completa los campos obligatorios.');
      setStatus('error');
      return;
    }

    setStatus('uploading');
    const formData = new FormData();
    formData.append('video', file);
    formData.append('userName', userName);
    formData.append('userEmail', userEmail);
    formData.append('whatsapp', whatsapp);
    formData.append('instructions', instructions);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Error al subir el video');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  if (status === 'success') {
    const whatsappMsg = encodeURIComponent(`🚀 ¡Hola Nico! Acabo de enviarte un nuevo proyecto para editar a tu web.\n\n📋 *Detalles del Pedido:*\n- *Cliente:* ${userName}\n- *Contacto:* ${whatsapp}\n- *Instrucciones:* ${instructions || 'Sin instrucciones adicionales'}\n\n¡Espero tu respuesta para empezar!`);
    const emailSubject = encodeURIComponent(`🚀 NUEVO PROYECTO DE EDICIÓN - ${userName.toUpperCase()}`);
    const emailBody = encodeURIComponent(`Hola Nico,\n\nTe informo que acabo de subir un nuevo video para editar a través de tu portal web.\n\n---------------------------------\n👤 CLIENTE: ${userName}\n📱 WHATSAPP: ${whatsapp}\n📝 INSTRUCCIONES: ${instructions || 'Sin instrucciones adicionales'}\n---------------------------------\n\nQuedo a la espera de tu confirmación.\n\n¡Saludos!`);

    return (
      <div className="min-h-screen flex items-center justify-center p-6 mesh-gradient">
        <div className="max-w-xl w-full bg-zinc-900 border border-white/10 p-12 rounded-[2.5rem] text-center space-y-8 shadow-2xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">¡Video Subido con Éxito!</h2>
            <p className="text-zinc-400 font-medium">El archivo ya está en el servidor de Nico. Ahora avísale para que empiece a trabajar:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={`https://wa.me/2246439602?text=${whatsappMsg}`}
              target="_blank"
              className="flex items-center justify-center gap-3 py-5 bg-green-500 text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl text-xs"
            >
              <Smartphone size={20} />
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
    <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto space-y-24">
      {/* --- UPLOAD SECTION --- */}
      <section>
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Portal del Cliente</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">Subir Material</h1>
          <p className="text-zinc-500 font-medium max-w-lg mx-auto">Envíanos tu video y dinos cómo quieres que lo editemos.</p>
        </div>

        <form onSubmit={handleUpload} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            {/* Contact Info */}
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] space-y-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <User size={16} /> Contacto
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Nombre Completo *</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700 font-medium"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="tu@email.com" 
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">WhatsApp *</label>
                    <input 
                      type="text" 
                      placeholder="Ej: 2246439602" 
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700 font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <MessageSquare size={16} /> Instrucciones
              </h3>
              <textarea 
                placeholder="Dinos qué música quieres, qué partes cortar, estilo de edición, etc." 
                rows={4}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-700 font-medium resize-none"
              />
            </div>
          </div>

          <div className="space-y-10">
            {/* Video Upload */}
            <div 
              className={`relative h-full min-h-[300px] border-2 border-dashed rounded-[2.5rem] p-12 text-center transition-all cursor-pointer group flex flex-col items-center justify-center ${file ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-white/5 hover:border-white/20 bg-zinc-900/50 hover:bg-zinc-900'}`}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input 
                id="file-upload" 
                type="file" 
                className="hidden" 
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${file ? 'bg-yellow-500 text-black' : 'bg-white/5 text-zinc-500'}`}>
                {file ? <FileVideo size={48} /> : <Upload size={48} />}
              </div>
              <p className="text-xl font-black uppercase italic tracking-tight">{file ? file.name : 'Haz clic para seleccionar tu video'}</p>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-bold">Máximo 500MB</p>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-xl font-bold text-center">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'uploading' || !file || !userName}
              className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 shadow-2xl"
            >
              {status === 'uploading' ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Zap size={20} fill="currentColor" />
                  <span>Enviar a Edición</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* --- LIBRARY SECTION --- */}
      <section className="pt-12 border-t border-white/5 space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 border-l-4 border-indigo-500 pl-6">
            <Play className="text-indigo-500" size={32} fill="currentColor" />
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Biblioteca de Videos</h2>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Mira mis trabajos terminados</p>
            </div>
          </div>
        </div>

        {loadingPortfolio ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-zinc-800" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioVideos.length === 0 ? (
              <div className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-20 text-center text-zinc-600 italic font-medium">
                Aún no hay videos para mostrar.
              </div>
            ) : (
              portfolioVideos.map((video) => (
                <div key={video.name} className="group relative bg-black rounded-[3rem] overflow-hidden border border-white/10 aspect-video hover:border-indigo-500/50 transition-all shadow-2xl">
                  <video 
                    src={video.url} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    controls
                  />
                  <div className="absolute bottom-10 left-10 right-10 pointer-events-none group-hover:translate-y-4 opacity-100 group-hover:opacity-0 transition-all duration-700">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-white border border-white/10">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-[0.2em] text-xs text-white drop-shadow-xl">Post-Producción NicoXedits</h4>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Calidad Premium</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}
