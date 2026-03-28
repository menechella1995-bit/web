import { Movement } from "@/data/anatomyData";
import { Activity, Target } from "lucide-react";

interface MovementCardProps {
  movement: Movement;
}

export default function MovementCard({ movement }: MovementCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-emerald-50 overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row">
      {movement.imageUrl && (
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-emerald-100">
          <img 
            src={movement.imageUrl} 
            alt={movement.name} 
            crossOrigin="anonymous"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
        </div>
      )}
      <div className={`flex-1 flex flex-col ${movement.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
        <div className="bg-emerald-50 px-6 py-4 flex items-center justify-between border-b border-emerald-100 group-hover:bg-emerald-100 transition-colors">
          <h3 className="text-xl font-bold text-emerald-900">{movement.name}</h3>
          <Activity className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="p-6 space-y-4 flex-1">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Descripción</span>
            <p className="text-gray-700 text-sm leading-relaxed mt-1">{movement.description}</p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">Músculos Involucrados</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {movement.musclesInvolved.map((muscle) => (
                <span key={muscle} className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium border border-emerald-200">
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
