"use client";

import Navbar from "@/components/ui/Navbar";
import MassageTechniqueCard from "@/components/massage/MassageTechniqueCard";
import { massageTechniques } from "@/data/anatomyData";
import { Info } from "lucide-react";

export default function MassagePage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 selection:bg-emerald-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl">
              <Info className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-emerald-900">Técnicas de Masaje Profesional</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Aprende sobre las técnicas clásicas y contemporáneas de masaje, sus aplicaciones clínicas y los beneficios fisiológicos para el paciente.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {massageTechniques.map((technique) => (
            <MassageTechniqueCard key={technique.id} technique={technique} />
          ))}
        </div>
      </main>
    </div>
  );
}
