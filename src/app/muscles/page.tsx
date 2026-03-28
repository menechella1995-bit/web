"use client";

import Navbar from "@/components/ui/Navbar";
import MuscleCard from "@/components/anatomy/MuscleCard";
import { muscles } from "@/data/anatomyData";
import { User } from "lucide-react";

export default function MusclesPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 selection:bg-emerald-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-emerald-900">Sistema Muscular</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Explora los principales músculos del cuerpo humano, su funcionamiento biomecánico y las mejores técnicas para tratarlos mediante masajes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {muscles.map((muscle) => (
            <MuscleCard key={muscle.id} muscle={muscle} />
          ))}
        </div>
      </main>
    </div>
  );
}
