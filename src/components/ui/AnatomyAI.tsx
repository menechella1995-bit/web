"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2, Sparkles } from "lucide-react";
import { muscles, bones, movements, massageTechniques, generalAnatomyKnowledge } from "@/data/anatomyData";

export default function AnatomyAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "¡Hola! Soy tu asistente experto en Anatomía y Masaje. Pregúntame sobre cualquier músculo, hueso, técnica o conceptos generales del sistema muscular." }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    // Simulación de IA usando los datos locales expandidos
    setTimeout(() => {
      const lowerQuery = userMessage.toLowerCase();
      let response = "";

      const foundMuscle = muscles.find(m => lowerQuery.includes(m.name.toLowerCase()) || lowerQuery.includes(m.id.replaceAll("-", " ")));
      const foundBone = bones.find(b => lowerQuery.includes(b.name.toLowerCase()) || lowerQuery.includes(b.id.replaceAll("-", " ")));
      const foundTechnique = massageTechniques.find(t => lowerQuery.includes(t.name.toLowerCase()) || lowerQuery.includes(t.id.replaceAll("-", " ")));
      const foundMovement = movements.find(mov => lowerQuery.includes(mov.name.toLowerCase()) || lowerQuery.includes(mov.id.replaceAll("-", " ")));
      const foundKnowledge = generalAnatomyKnowledge.find(k => 
        lowerQuery.includes(k.title.toLowerCase()) || 
        k.tags.some(tag => lowerQuery.includes(tag.toLowerCase()))
      );

      if (lowerQuery.includes("diafragma")) {
        const info = muscles.find(m => m.id === "diaphragm");
        response = info ? `El **${info.name}** es un músculo en forma de cúpula que separa el tórax del abdomen. \n\n**Función principal:** Respiración (inspiración al contraerse, espiración al relajarse).` : "El diafragma es el principal músculo respiratorio.";
      } else if (foundMuscle) {
        if (lowerQuery.includes("inervación") || lowerQuery.includes("inervacion") || lowerQuery.includes("nervio")) {
          response = `La inervación del **${foundMuscle.name}** es: **${foundMuscle.innervation || "No especificada en mis registros"}**.`;
        } else if (lowerQuery.includes("origen") || lowerQuery.includes("inserta") || lowerQuery.includes("inserción")) {
          response = `El **${foundMuscle.name}** tiene su origen en **${foundMuscle.origin}** y se inserta en **${foundMuscle.insertion}**.`;
        } else if (lowerQuery.includes("masaje") || lowerQuery.includes("técnica") || lowerQuery.includes("tecnica")) {
          response = `Para el **${foundMuscle.name}**, la técnica recomendada es: *${foundMuscle.massageTechnique}*.`;
        } else {
          response = `El **${foundMuscle.name}** (${foundMuscle.latinName || "N/A"}) se encuentra en **${foundMuscle.location}**. 
          \n\n**Acción:** ${foundMuscle.action}.
          \n**Origen:** ${foundMuscle.origin}.
          \n**Inserción:** ${foundMuscle.insertion}.
          \n**Inervación:** ${foundMuscle.innervation || "No especificada"}.
          \n\n**Técnica de masaje recomendada:** *${foundMuscle.massageTechnique}*`;
        }
      } else if (foundBone) {
        response = `El **${foundBone.name}** está en la región de **${foundBone.region}**. 
        \n\n**Descripción:** ${foundBone.description}.`;
      } else if (foundTechnique) {
        response = `La técnica de **${foundTechnique.name}** consiste en ${foundTechnique.description}. 
        \n\n**Beneficios principales:** 
        \n- ${foundTechnique.benefits.join("\n- ")}`;
      } else if (foundMovement) {
        response = `El movimiento de **${foundMovement.name}** se define como: ${foundMovement.description}.
        \n\n**Músculos involucrados:** ${foundMovement.musclesInvolved.join(", ")}.`;
      } else if (foundKnowledge) {
        response = `**${foundKnowledge.title}**: ${foundKnowledge.content}`;
      } else if (lowerQuery.includes("músculo") || lowerQuery.includes("musculo")) {
        response = `Tengo información detallada sobre muchos músculos, incluyendo: ${muscles.slice(0, 8).map(m => m.name).join(", ")} y más. ¿Sobre cuál quieres saber el origen o inervación?`;
      } else if (lowerQuery.includes("hueso")) {
        response = `Conozco varios huesos importantes: ${bones.map(b => b.name).join(", ")}.`;
      } else if (lowerQuery.includes("brazo")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "arm-muscles");
        response = info ? info.content : "Los principales músculos del brazo son el bíceps y tríceps.";
      } else if (lowerQuery.includes("antebrazo")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "forearm-muscles");
        response = info ? info.content : "El antebrazo incluye el braquial anterior y braquiorradial.";
      } else if (lowerQuery.includes("abdomen")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "abdomen-muscles");
        response = info ? info.content : "Los músculos del abdomen incluyen el recto y los oblicuos.";
      } else if (lowerQuery.includes("mano") || lowerQuery.includes("muñeca")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "hand-muscles");
        response = info ? info.content : "La mano tiene músculos intrínsecos como los interóseos.";
      } else if (lowerQuery.includes("pie")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "foot-muscles-summary");
        response = info ? info.content : "El pie es movido por los gemelos, sóleo y tibial anterior.";
      } else if (lowerQuery.includes("pierna")) {
        const info = generalAnatomyKnowledge.find(k => k.id === "leg-moving-muscles");
        response = info ? info.content : "Los grupos que mueven la pierna son el cuádriceps, isquiotibiales y aductores.";
      } else if (lowerQuery.includes("diafragma")) {
        const info = muscles.find(m => m.id === "diaphragm");
        response = info ? `El **${info.name}** es un músculo en forma de cúpula que separa el tórax del abdomen. \n\n**Función principal:** Respiración (inspiración al contraerse, espiración al relajarse).` : "El diafragma es el principal músculo respiratorio.";
      } else if (lowerQuery.includes("masaje") || lowerQuery.includes("beneficio")) {
        const def = generalAnatomyKnowledge.find(k => k.id === "massage-definition");
        const ben = generalAnatomyKnowledge.find(k => k.id === "massage-benefits");
        response = `${def?.content || ""} \n\n**Beneficios principales:** ${ben?.content || ""}`;
      } else if (lowerQuery.includes("contraindicación") || lowerQuery.includes("contraindicacion") || lowerQuery.includes("cuándo no") || lowerQuery.includes("cuando no")) {
        const contra = generalAnatomyKnowledge.find(k => k.id === "massage-contraindications");
        response = contra ? `**No se recomiendan masajes en caso de:** ${contra.content}` : "Existen contraindicaciones como fiebre e infecciones.";
      } else if (lowerQuery.includes("material") || lowerQuery.includes("aceite") || lowerQuery.includes("crema")) {
        const mat = generalAnatomyKnowledge.find(k => k.id === "massage-materials");
        response = mat ? `**Materiales comunes:** ${mat.content}` : "Se usan aceites, cremas y camillas.";
      } else if (lowerQuery.includes("tipo") && lowerQuery.includes("masaje")) {
        response = `Existen varios tipos de masajes: \n\n- **Relajante:** Suave para el estrés. \n- **Descontracturante:** Profundo para nudos. \n- **Deportivo:** Para optimizar el rendimiento. \n- **Linfático:** Elimina toxinas y líquidos. \n- **Terapéutico:** Trata dolores específicos. \n- **Estético:** Mejora la apariencia cutánea.`;
      } else if (lowerQuery.includes("fascia") || lowerQuery.includes("tejido")) {
        const fascia = generalAnatomyKnowledge.find(k => k.id === "connective-tissue");
        response = fascia ? fascia.content : "El tejido conectivo es fundamental en la anatomía.";
      } else if (lowerQuery.includes("hola") || lowerQuery.includes("buenos días")) {
        response = "¡Hola! Estoy listo para ayudarte con tus dudas sobre anatomía humana, biomecánica y masajes profesionales. ¿Qué te gustaría aprender hoy?";
      } else {
        response = "He sido actualizado con una base de datos masiva de anatomía. Puedo explicarte inervación, origen, inserción, tipos de tejido (esquelético, liso, cardiaco), fascias y técnicas de masaje. \n\nPrueba preguntando: '¿Cuál es la inervación del trapecio?' o '¿Qué tipos de tejido muscular existen?'";
      }

      setMessages(prev => [...prev, { role: "bot", content: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-900 text-white p-4 rounded-2xl shadow-2xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all group z-50 border border-emerald-500/20"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="absolute -top-12 right-0 bg-white text-emerald-900 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-emerald-100">
          ¿Dudas de anatomía?
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl shadow-emerald-900/30 flex flex-col overflow-hidden z-[60] border border-emerald-100 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-emerald-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-xl">
                <Bot className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none mb-1">Anatomía AI</h3>
                <span className="text-[10px] text-emerald-300 font-medium uppercase tracking-widest">En línea</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-emerald-50/30 scrollbar-thin scrollbar-thumb-emerald-100">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-emerald-600 text-white rounded-tr-none shadow-md shadow-emerald-900/10" 
                    : "bg-white text-emerald-950 rounded-tl-none shadow-sm border border-emerald-100"
                }`}>
                  {msg.content.split("\n").map((line, j) => (
                    <p key={j} className={j > 0 ? "mt-2" : ""}>
                      {line.split("**").map((part, k) => (
                        k % 2 === 1 ? <strong key={k} className="font-black">{part}</strong> : part
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white text-emerald-900 p-4 rounded-2xl rounded-tl-none border border-emerald-100 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                  <span className="text-xs font-medium italic opacity-60 text-emerald-700">Consultando base de datos...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-emerald-50">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-emerald-500 text-emerald-900 placeholder:text-emerald-300 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl transition-all shadow-md shadow-emerald-900/10 disabled:opacity-50 disabled:hover:bg-emerald-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
