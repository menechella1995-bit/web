"use client";

import Navbar from "@/components/ui/Navbar";
import BoneCard from "@/components/anatomy/BoneCard";
import { bones } from "@/data/anatomyData";
import { BookOpen } from "lucide-react";

export default function BonesPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 selection:bg-emerald-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl">
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-emerald-900">Sistema Óseo</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Conoce los fundamentos de la osteología: los huesos del cuerpo humano que proporcionan soporte, protección y movimiento.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bones.map((bone) => (
            <BoneCard key={bone.id} bone={bone} />
          ))}
        </div>
      </main>
    </div>
  );
}
