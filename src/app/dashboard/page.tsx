'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Trash2, 
  Download, 
  Plus, 
  Loader2, 
  ShieldCheck, 
  Play,
  Film,
  User,
  Mail,
  CheckCircle2,
  MessageSquare,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const isAdminParam = searchParams.get('admin') === 'true';

  const [videos, setVideos] = useState<any[]>([]);
  const [portfolioVideos, setPortfolioVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingPortfolio, setUploadingPortfolio] = useState(false);
  const [pass, setPass] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const isAdmin = isAdminParam && isUnlocked;

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [vRes, pRes] = await Promise.all([
        fetch('/api/videos'),
        fetch('/api/portfolio')
      ]);
      const vData = await vRes.json();
      const pData = await pRes.json();
      setVideos(vData);
      setPortfolioVideos(pData);
    } catch (e) {
      console.error('Error fetching videos:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  if (isAdminParam && !isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-zinc-900 border border-white/10 p-12 rounded-[2.5rem] text-center space-y-8 shadow-2xl">
          <ShieldCheck className="mx-auto text-yellow-500" size={48} />
          <h2 className="text-2xl font-black uppercase tracking-tight">Acceso Admin</h2>
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              if (e.target.value === 'nicox2026') setIsUnlocked(true);
            }}
            className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-yellow-500/50 transition-all text-center font-bold tracking-widest"
          />
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Introduce la clave para gestionar pedidos</p>
          <Link href="/" className="inline-block text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest pt-4">Volver</Link>
        </div>
      </div>
    );
  }

  const deleteVideo = async (filename: string, isPortfolio = false) => {
    if (!confirm('¿Seguro que quieres eliminar este video?')) return;
    const endpoint = isPortfolio ? '/api/portfolio' : '/api/videos';
    await fetch(endpoint, {
      method: 'DELETE',
      body: JSON.stringify({ filename }),
    });
    fetchAll();
  };

  const handlePortfolioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingPortfolio(true);
    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) fetchAll();
    } catch (e) {
      console.error('Error uploading portfolio:', e);
    } finally {
      setUploadingPortfolio(false);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Inicio
        </Link>
        
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
            {isAdmin ? 'Panel de Control' : 'Mis Trabajos'}
          </h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] mt-2">
            {isAdmin ? 'ADMINISTRACIÓN DEL ESTUDIO' : 'VER VIDEOS FINALIZADOS'}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-zinc-600" size={48} />
        </div>
      ) : (
        <div className="space-y-24 max-w-7xl mx-auto">
          {/* Admin Section: Production Queue */}
          {isAdmin && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-4 border-l-4 border-yellow-500 pl-6">
                <ShieldCheck className="text-yellow-500" size={32} />
                <h2 className="text-3xl font-black uppercase tracking-tight">Cola de Producción</h2>
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest">{videos.length} PENDIENTES</span>
              </div>

              {videos.length === 0 ? (
                <div className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-20 text-center text-zinc-600 italic font-medium">
                  No hay videos pendientes en la cola.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video) => (
                    <div key={video.name} className="group bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 hover:border-yellow-500/30 transition-all space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-500">
                            <Film size={28} />
                          </div>
                          <div>
                            <h3 className="font-black text-xl uppercase italic truncate max-w-[200px]">{video.name.split('-').slice(1).join('-')}</h3>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{new Date(parseInt(video.name.split('-')[0])).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href={video.url} 
                            download 
                            className="w-12 h-12 bg-white/5 hover:bg-white text-black rounded-xl flex items-center justify-center transition-all"
                            title="Descargar Video"
                          >
                            <Download size={20} />
                          </a>
                          <button 
                            onClick={() => deleteVideo(video.name)} 
                            className="w-12 h-12 bg-red-500/10 hover:bg-red-500 text-white rounded-xl flex items-center justify-center transition-all"
                            title="Eliminar"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Cliente</p>
                          <div className="flex items-center gap-2 text-sm font-bold">
                            <User size={14} className="text-yellow-500" />
                            {video.userName}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Contacto</p>
                          <div className="flex flex-col gap-1">
                            {video.userEmail && (
                              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                                <Mail size={12} />
                                {video.userEmail}
                              </div>
                            )}
                            {video.whatsapp && (
                              <a 
                                href={`https://wa.me/${video.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                className="flex items-center gap-2 text-xs font-medium text-green-500 hover:underline"
                              >
                                <Smartphone size={12} />
                                {video.whatsapp}
                                <ExternalLink size={10} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="bg-black/50 rounded-2xl p-5 border border-white/5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                          <MessageSquare size={12} /> Instrucciones
                        </p>
                        <p className="text-sm text-zinc-300 leading-relaxed font-medium italic">
                          "{video.instructions || 'Sin instrucciones específicas.'}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Portfolio Section: Showcase */}
          <section className="space-y-12">
            <div className="flex items-center justify-between border-l-4 border-indigo-500 pl-6">
              <div className="flex items-center gap-4">
                <Play className="text-indigo-500" size={32} fill="currentColor" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Mis Videos</h2>
              </div>
              
              {isAdmin && (
                <label className="cursor-pointer group">
                  <input type="file" className="hidden" accept="video/*" onChange={handlePortfolioUpload} disabled={uploadingPortfolio} />
                  <div className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 shadow-xl">
                    {uploadingPortfolio ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
                    <span>Agregar Video</span>
                  </div>
                </label>
              )}
            </div>

            {portfolioVideos.length === 0 ? (
              <div className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-20 text-center text-zinc-600 italic font-medium">
                Aún no hay videos para mostrar.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {portfolioVideos.map((video) => (
                  <div key={video.name} className="group relative bg-black rounded-[3rem] overflow-hidden border border-white/10 aspect-video hover:border-indigo-500/50 transition-all shadow-2xl">
                    <video 
                      src={video.url} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      controls
                    />
                    
                    {isAdmin && (
                      <button 
                        onClick={() => deleteVideo(video.name, true)}
                        className="absolute top-6 right-6 w-12 h-12 bg-red-500/80 hover:bg-red-500 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all z-10"
                      >
                        <Trash2 size={22} />
                      </button>
                    )}

                    <div className="absolute bottom-10 left-10 right-10 pointer-events-none group-hover:translate-y-4 opacity-100 group-hover:opacity-0 transition-all duration-700">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-white border border-white/10">
                          <CheckCircle2 size={24} />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-[0.2em] text-xs text-white drop-shadow-xl">Post-Producción NicoXedits</h4>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Acabado Premium 4K</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {/* Footer */}
      <div className="mt-32 text-center opacity-10 text-[10px] font-black uppercase tracking-[2em]">
        NicoXedits Studio © 2026
      </div>
    </div>
  );
}
