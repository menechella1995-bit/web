import { MassageTechnique } from "@/data/anatomyData";
import { Info, Check } from "lucide-react";

interface MassageTechniqueCardProps {
  technique: MassageTechnique;
}

export default function MassageTechniqueCard({ technique }: MassageTechniqueCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-emerald-50 overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row">
      {technique.imageUrl && (
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-emerald-900">
          <img 
            src={technique.imageUrl} 
            alt={technique.name} 
            crossOrigin="anonymous"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
        </div>
      )}
      <div className={`flex-1 flex flex-col ${technique.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
        <div className="bg-emerald-900 px-6 py-4 flex items-center justify-between group-hover:bg-emerald-800 transition-colors">
          <h3 className="text-xl font-bold text-white">{technique.name}</h3>
          <Info className="w-6 h-6 text-emerald-300" />
        </div>

        <div className="p-6 space-y-6 flex-1">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">Descripción</span>
            <p className="text-gray-700 text-sm leading-relaxed">{technique.description}</p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-3">Beneficios Principales</span>
            <ul className="space-y-2">
              {technique.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
