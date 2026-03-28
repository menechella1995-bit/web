import { Muscle } from "@/data/anatomyData";
import { User, Activity, MapPin, Target } from "lucide-react";

interface MuscleCardProps {
  muscle: Muscle;
}

export default function MuscleCard({ muscle }: MuscleCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-emerald-50 overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row">
      {muscle.imageUrl && (
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-emerald-100">
          <img 
            src={muscle.imageUrl} 
            alt={muscle.name} 
            crossOrigin="anonymous"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
        </div>
      )}
      <div className={`flex-1 flex flex-col ${muscle.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
        <div className="bg-emerald-50 px-6 py-4 flex items-center justify-between border-b border-emerald-100 group-hover:bg-emerald-100 transition-colors">
          <div>
            <h3 className="text-xl font-bold text-emerald-900">{muscle.name}</h3>
            {muscle.latinName && <p className="text-[10px] text-emerald-600 font-medium italic">{muscle.latinName}</p>}
          </div>
          <User className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="p-6 space-y-4 flex-1">
          <div className="flex items-start gap-3">
            <Activity className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Acción</span>
              <p className="text-gray-700 text-sm leading-relaxed">{muscle.action}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Ubicación</span>
              <p className="text-gray-700 text-sm leading-relaxed">{muscle.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Inserción</span>
              <p className="text-gray-700 text-sm leading-relaxed">{muscle.insertion}</p>
            </div>
          </div>

          <div className="mt-6 bg-emerald-900 text-white p-4 rounded-xl shadow-inner group-hover:bg-emerald-800 transition-colors">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">Técnica Sugerida</h4>
            <p className="text-sm font-medium leading-relaxed italic">
              "{muscle.massageTechnique}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
