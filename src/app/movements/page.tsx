"use client";

import Navbar from "@/components/ui/Navbar";
import MovementCard from "@/components/anatomy/MovementCard";
import { movements } from "@/data/anatomyData";
import { Activity } from "lucide-react";

export default function MovementsPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 selection:bg-emerald-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl">
              <Activity className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-emerald-900">Movimientos del Cuerpo</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Aprende sobre la biomecánica de las articulaciones y los grupos musculares que colaboran para generar movimiento funcional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movements.map((movement) => (
            <MovementCard key={movement.id} movement={movement} />
          ))}
        </div>
      </main>
    </div>
  );
}
