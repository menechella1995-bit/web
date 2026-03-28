"use client";

import Navbar from "@/components/ui/Navbar";
import GlobalSearch from "@/components/ui/GlobalSearch";
import AnatomyAI from "@/components/ui/AnatomyAI";
import MuscleCard from "@/components/anatomy/MuscleCard";
import BoneCard from "@/components/anatomy/BoneCard";
import { muscles, bones } from "@/data/anatomyData";
import { BookOpen, User, Activity, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 selection:bg-emerald-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm animate-bounce-slow">
            <Activity className="w-4 h-4 text-emerald-300" />
            <span>Guía Profesional de Anatomía y Masaje</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Descubre la <span className="text-emerald-400">fuerza</span> del movimiento
            </h1>
            <p className="text-lg md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
              Aprende sobre el sistema musculoesquelético y las técnicas de masaje profesional para el bienestar físico.
            </p>
          </div>

          <GlobalSearch />

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Link
              href="/muscles"
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-5 rounded-3xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-900/40 flex items-center gap-3"
            >
              Explorar Músculos
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Anatomy AI Button (Floating) */}
      <AnatomyAI />

      {/* Quick Access Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-emerald-500/20 transition-all group">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sistema Muscular</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Estudio detallado de los músculos, su origen, inserción y acción en el cuerpo.
            </p>
            <Link href="/muscles" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-emerald-500/20 transition-all group">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sistema Óseo</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Conoce los huesos y su función estructural en el soporte del movimiento.
            </p>
            <Link href="/bones" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-emerald-500/20 transition-all group">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Activity className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Movimientos</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Biomecánica aplicada: flexión, extensión, rotación y mucho más.
            </p>
            <Link href="/movements" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-emerald-500/20 transition-all group">
            <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Info className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Masaje Terapéutico</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Técnicas aplicadas para aliviar dolores y mejorar la movilidad articular.
            </p>
            <Link href="/massage" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Anatomy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
                Anatomía Destacada
              </h2>
              <p className="text-gray-600">
                Información técnica precisa para profesionales del masaje y entusiastas del fitness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {muscles.map((muscle) => (
              <MuscleCard key={muscle.id} muscle={muscle} />
            ))}
            {bones.map((bone) => (
              <BoneCard key={bone.id} bone={bone} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 text-emerald-100 py-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-xl mb-4">Anatomía & Masaje Profesional</p>
          <p className="text-emerald-400 text-sm opacity-80">
            Tu recurso educativo para el bienestar y la salud física.
          </p>
        </div>
      </footer>
    </div>
  );
}
