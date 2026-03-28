import { Bone } from "@/data/anatomyData";
import { BookOpen, MapPin, Target } from "lucide-react";

interface BoneCardProps {
  bone: Bone;
}

export default function BoneCard({ bone }: BoneCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-emerald-50 overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row">
      {bone.imageUrl && (
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-emerald-100">
          <img 
            src={bone.imageUrl} 
            alt={bone.name} 
            crossOrigin="anonymous"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
        </div>
      )}
      <div className={`flex-1 flex flex-col ${bone.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
        <div className="bg-emerald-50 px-6 py-4 flex items-center justify-between border-b border-emerald-100 group-hover:bg-emerald-100 transition-colors">
          <h3 className="text-xl font-bold text-emerald-900">{bone.name}</h3>
          <BookOpen className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="p-6 space-y-4 flex-1">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Región</span>
              <p className="text-gray-700 text-sm leading-relaxed">{bone.region}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Descripción</span>
              <p className="text-gray-700 text-sm leading-relaxed">{bone.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
