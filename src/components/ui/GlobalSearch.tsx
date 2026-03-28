"use client";

import { useState, useMemo } from "react";
import { Search, X, User, BookOpen, Activity, Info, ArrowRight, Lightbulb } from "lucide-react";
import { muscles, bones, movements, massageTechniques, generalAnatomyKnowledge } from "@/data/anatomyData";
import MuscleCard from "@/components/anatomy/MuscleCard";
import BoneCard from "@/components/anatomy/BoneCard";
import MovementCard from "@/components/anatomy/MovementCard";
import MassageTechniqueCard from "@/components/massage/MassageTechniqueCard";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return { muscles: [], bones: [], movements: [], techniques: [], knowledge: [] };

    const lowerQuery = query.toLowerCase();

    return {
      muscles: muscles.filter(m => 
        m.name.toLowerCase().includes(lowerQuery) || 
        (m.latinName && m.latinName.toLowerCase().includes(lowerQuery)) ||
        m.action.toLowerCase().includes(lowerQuery)
      ),
      bones: bones.filter(b => 
        b.name.toLowerCase().includes(lowerQuery) || 
        b.region.toLowerCase().includes(lowerQuery)
      ),
      movements: movements.filter(mov => 
        mov.name.toLowerCase().includes(lowerQuery) || 
        mov.description.toLowerCase().includes(lowerQuery)
      ),
      techniques: massageTechniques.filter(t => 
        t.name.toLowerCase().includes(lowerQuery) || 
        t.description.toLowerCase().includes(lowerQuery)
      ),
      knowledge: generalAnatomyKnowledge.filter(k =>
        k.title.toLowerCase().includes(lowerQuery) ||
        k.content.toLowerCase().includes(lowerQuery) ||
        k.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
    };
  }, [query]);

  const hasResults = results.muscles.length > 0 || results.bones.length > 0 || results.movements.length > 0 || results.techniques.length > 0 || results.knowledge.length > 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto z-40">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 group-focus-within:text-emerald-400 transition-colors" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Busca músculos, huesos, técnicas o movimientos..."
          className="w-full bg-white border-2 border-emerald-100 rounded-2xl py-4 pl-12 pr-4 text-emerald-900 placeholder:text-emerald-300 focus:outline-none focus:border-emerald-500 shadow-lg shadow-emerald-900/5 transition-all"
        />
        {query && (
          <button 
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-emerald-50 rounded-full text-emerald-400 hover:text-emerald-600 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full mt-4 w-full bg-emerald-50/95 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-2xl max-h-[70vh] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-emerald-200">
          {!hasResults ? (
            <div className="text-center py-12">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-emerald-900 font-bold text-lg">No encontramos resultados</p>
              <p className="text-emerald-600/60 text-sm">Prueba con otras palabras como "trapecio" o "roce"</p>
            </div>
          ) : (
            <div className="space-y-10">
              {results.muscles.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-emerald-900 font-black uppercase tracking-tighter text-sm mb-4">
                    <User className="w-4 h-4" /> Músculos ({results.muscles.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {results.muscles.map(m => <MuscleCard key={m.id} muscle={m} />)}
                  </div>
                </div>
              )}

              {results.bones.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-emerald-900 font-black uppercase tracking-tighter text-sm mb-4">
                    <BookOpen className="w-4 h-4" /> Huesos ({results.bones.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {results.bones.map(b => <BoneCard key={b.id} bone={b} />)}
                  </div>
                </div>
              )}

              {results.movements.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-emerald-900 font-black uppercase tracking-tighter text-sm mb-4">
                    <Activity className="w-4 h-4" /> Movimientos ({results.movements.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {results.movements.map(mov => <MovementCard key={mov.id} movement={mov} />)}
                  </div>
                </div>
              )}

              {results.knowledge.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-emerald-900 font-black uppercase tracking-tighter text-sm mb-4">
                    <Lightbulb className="w-4 h-4" /> Conceptos y Fisiología ({results.knowledge.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {results.knowledge.map(k => (
                      <div key={k.id} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">{k.title}</h4>
                          <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-bold uppercase tracking-wider">Concepto</span>
                        </div>
                        <p className="text-sm text-emerald-800/80 leading-relaxed mb-3">{k.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {k.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-emerald-50/50 text-emerald-500 px-2 py-0.5 rounded-md border border-emerald-100/50">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.techniques.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-emerald-900 font-black uppercase tracking-tighter text-sm mb-4">
                    <Info className="w-4 h-4" /> Técnicas ({results.techniques.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {results.techniques.map(t => <MassageTechniqueCard key={t.id} technique={t} />)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
