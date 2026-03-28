export interface Muscle {
  id: string;
  name: string;
  latinName?: string;
  location: string;
  action: string;
  origin: string;
  insertion: string;
  innervation?: string;
  massageTechnique: string;
  imageUrl?: string;
}

export interface Bone {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl?: string;
}

export interface Movement {
  id: string;
  name: string;
  description: string;
  musclesInvolved: string[];
  imageUrl?: string;
}

export interface MassageTechnique {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  imageUrl?: string;
}

export interface GeneralKnowledge {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export const generalAnatomyKnowledge: GeneralKnowledge[] = [
  {
    id: "muscle-system-def",
    title: "Sistema Muscular",
    content: "Conjunto de más de 600 músculos. Su función es producir movimientos, estabilizar la posición del cuerpo, regular el volumen de órganos, movilizar sustancias y producir calor.",
    tags: ["definición", "funciones"]
  },
  {
    id: "muscle-tissues",
    title: "Tipos de Tejido Muscular",
    content: "1. Esquelético (voluntario/estriado). 2. Liso (involuntario/visceral, en vasos y órganos). 3. Cardiaco (automatismo, solo en el corazón).",
    tags: ["tejidos", "fisiología"]
  },
  {
    id: "connective-tissue",
    title: "Tejido Conectivo y Fascias",
    content: "La fascia rodea y protege los músculos. Epimisio (envuelve el músculo), Perimisio (rodea fascículos) y Endomisio (separa fibras). Los tendones y aponeurosis fijan el músculo al hueso.",
    tags: ["fascia", "tejido conectivo", "tendones"]
  },
  {
    id: "muscle-physiology",
    title: "Fisiología Muscular",
    content: "Las células musculares convierten energía química en fuerza contráctil. Contienen sarcolema (membrana), sarcoplasma (citoplasma), mitocondrias, glucógeno y miofilamentos de actina y miosina que forman las miofibrillas.",
    tags: ["fisiología", "célula", "actina", "miosina", "sarcolema"]
  },
  {
    id: "muscle-functions-ext",
    title: "Funciones del Músculo",
    content: "1. Movimiento (locomoción). 2. Producción de calor (por catabolismo, esencial para la homeostasis térmica). 3. Postura (contracción parcial continua para mantener posiciones).",
    tags: ["funciones", "movimiento", "calor", "postura"]
  },
  {
    id: "muscle-nomenclature",
    title: "Nomenclatura Muscular",
    content: "Los músculos se nombran según: Situación (localización), Función (flexor, extensor), Forma (largo, ancho), Dirección de fibras (fusiforme, penniforme), Número de cabezas (bíceps) y Puntos de fijación.",
    tags: ["nomenclatura", "nombres", "clasificación"]
  },
  {
    id: "muscle-life-cycle",
    title: "Ciclo Vital Muscular",
    content: "En la niñez, las células aumentan en tamaño y número. En la vejez, los músculos degeneran y son reemplazados progresivamente por tejido conjuntivo.",
    tags: ["ciclo vital", "envejecimiento", "desarrollo"]
  },
  {
    id: "abdomen-muscles",
    title: "Músculos del Abdomen",
    content: "Los principales son: Recto abdominal, Oblicuo externo, Oblicuo interno y Transverso del abdomen. Su función es comprimir el abdomen y flexionar el tronco.",
    tags: ["abdomen", "tronco", "resumen"]
  },
  {
    id: "arm-muscles",
    title: "Músculos que mueven el Brazo",
    content: "Principales: Deltoides, Pectoral mayor, Dorsal ancho, Bíceps braquial y Tríceps braquial.",
    tags: ["brazo", "hombro", "resumen"]
  },
  {
    id: "forearm-muscles",
    title: "Músculos que mueven el Antebrazo",
    content: "Bíceps braquial (flexiona), Tríceps braquial (extiende), Braquial anterior y Braquiorradial.",
    tags: ["antebrazo", "codo", "resumen"]
  },
  {
    id: "hand-muscles",
    title: "Músculos de la Muñeca, Mano y Dedos",
    content: "Se dividen en: Flexores de muñeca/dedos, Extensores de muñeca/dedos y Músculos intrínsecos (interóseos y lumbricales).",
    tags: ["mano", "muñeca", "dedos", "resumen"]
  },
  {
    id: "pubis-muscles",
    title: "Músculos del Pubis e Ingle",
    content: "Incluye el Pectíneo, Aductor largo, Aductor corto, Aductor mayor y Grácil.",
    tags: ["pubis", "ingle", "aducción", "resumen"]
  },
  {
    id: "leg-moving-muscles",
    title: "Grupos Musculares que mueven la Pierna",
    content: "Se dividen en: Cuádriceps (anterior), Isquiotibiales (posterior) y Aductores (interno).",
    tags: ["pierna", "muslo", "cuádriceps", "isquiotibiales", "resumen"]
  },
  {
    id: "foot-muscles-summary",
    title: "Músculos que mueven el Pie",
    content: "Gemelos (gastrocnemio), Sóleo, Tibial anterior, Peroneos (laterales) y Flexores/Extensores de los dedos.",
    tags: ["pie", "tobillo", "gemelos", "tibial", "resumen"]
  },
  {
    id: "massage-definition",
    title: "¿Qué es el masaje?",
    content: "Es una técnica manual que consiste en aplicar movimientos sobre el cuerpo (piel, músculos y tejidos) con fines terapéuticos, relajantes o estéticos.",
    tags: ["masaje", "definición", "bienestar"]
  },
  {
    id: "massage-benefits",
    title: "Beneficios del Masaje",
    content: "Relaja cuerpo y mente, reduce estrés/ansiedad, mejora la circulación, alivia dolores musculares, elimina toxinas y mejora la movilidad y el descanso.",
    tags: ["beneficios", "salud", "circulación"]
  },
  {
    id: "massage-contraindications",
    title: "Contraindicaciones del Masaje",
    content: "No realizar en caso de: Fiebre, infecciones, heridas abiertas, trombosis, problemas cardíacos graves o embarazo (sin autorización médica).",
    tags: ["seguridad", "contraindicaciones", "precaución"]
  },
  {
    id: "massage-materials",
    title: "Materiales para Masaje",
    content: "Aceites (almendra, coco), cremas, camilla, toallas y elementos de ambientación (velas/aromas).",
    tags: ["materiales", "preparación", "aceites"]
  },
  {
    id: "massage-professional-tips",
    title: "Consejos para Masajistas",
    content: "Mantener buena postura, usar presión adecuada, preguntar si duele, trabajar de forma progresiva y mantener higiene rigurosa.",
    tags: ["consejos", "profesionalismo", "higiene"]
  }
];

export const muscles: Muscle[] = [
  {
    id: "trapezius",
    name: "Trapecio",
    latinName: "Musculus trapezius",
    location: "Espalda superior y cuello",
    action: "Rotación, elevación y retracción de la escápula; extiende la cabeza",
    origin: "Base del cráneo, ligamento nucal, procesos espinosos de C7-T12",
    insertion: "Clavícula, acromion y espina de la escápula",
    innervation: "Nervio espinal; C2, C3, C4",
    massageTechnique: "Amasamiento y presiones circulares para liberar tensión cervical.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "quadriceps",
    name: "Cuádriceps",
    latinName: "Musculus quadriceps femoris",
    location: "Parte anterior del muslo",
    action: "Extensión de la rodilla, flexión de la cadera",
    origin: "Fémur y hueso ilíaco",
    insertion: "Rótula y tuberosidad de la tibia",
    massageTechnique: "Fricciones profundas y estiramientos pasivos.",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "deltoid",
    name: "Deltoides",
    latinName: "Musculus deltoideus",
    location: "Hombro",
    action: "Abducción, flexión y extensión del brazo",
    origin: "Clavícula, acromion y espina de la escápula",
    insertion: "Tuberosidad deltoidea del húmero",
    innervation: "Nervio axilar",
    massageTechnique: "Amasamiento circular en las tres porciones (anterior, media y posterior).",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "epicraneos",
    name: "Epicráneos (Occipitofrontal)",
    location: "Cráneo superior",
    action: "Eleva las cejas, frunce la frente horizontalmente",
    origin: "Hueso occipital",
    insertion: "Tejidos de las cejas",
    innervation: "VII par craneal (Facial)",
    massageTechnique: "Pases suaves longitudinales sobre la frente."
  },
  {
    id: "superciliar",
    name: "Superciliar",
    location: "Cejas",
    action: "Frunce la ceja verticalmente",
    origin: "Hueso frontal (borde superciliar)",
    insertion: "Piel de la ceja",
    innervation: "VII par craneal",
    massageTechnique: "Presiones suaves con la punta de los dedos sobre el arco superciliar."
  },
  {
    id: "orbicularis-oculi",
    name: "Orbicular de los párpados",
    location: "Alrededor de los ojos",
    action: "Cierra el ojo",
    origin: "Rodea al párpado",
    insertion: "Piel del párpado",
    innervation: "VII par craneal",
    massageTechnique: "Presiones puntuales muy suaves en el borde óseo orbital."
  },
  {
    id: "zygomaticus-major",
    name: "Cigomático mayor",
    location: "Mejillas",
    action: "Risa (eleva el ángulo de la boca)",
    origin: "Hueso cigomático",
    insertion: "Ángulo de la boca",
    innervation: "VII par craneal",
    massageTechnique: "Deslizamientos ascendentes desde la comisura labial hacia el pómulo."
  },
  {
    id: "orbicularis-oris",
    name: "Orbicular de los labios",
    location: "Boca",
    action: "Junta los labios",
    origin: "Rodea la boca",
    insertion: "Piel de los labios",
    innervation: "VII par craneal",
    massageTechnique: "Pases circulares muy suaves alrededor de los labios."
  },
  {
    id: "buccinator",
    name: "Buccinador",
    location: "Mejillas profundas",
    action: "Permite la sonrisa, soplar",
    origin: "Maxilares",
    insertion: "Piel de los lados de la boca",
    innervation: "VII par craneal",
    massageTechnique: "Amasamiento suave de la mejilla entre el pulgar e índice."
  },
  {
    id: "masseter",
    name: "Masetero",
    location: "Mandíbula",
    action: "Cierra el maxilar (masticación)",
    origin: "Arco cigomático",
    insertion: "Maxilar inferior (superficie externa)",
    innervation: "V par craneal (Trigémino)",
    massageTechnique: "Presión circular profunda en el ángulo de la mandíbula."
  },
  {
    id: "temporal",
    name: "Temporal",
    location: "Sienes",
    action: "Cierra el maxilar",
    origin: "Hueso temporal",
    insertion: "Maxilar inferior",
    innervation: "V par craneal",
    massageTechnique: "Fricción circular suave en la zona de las sienes."
  },
  {
    id: "pterygoids",
    name: "Pterigoideos (Interno y Externo)",
    location: "Mandíbula interna",
    action: "Rechinar los dientes",
    origin: "Cara inferior del cráneo",
    insertion: "Maxilar inferior (cara interna)",
    innervation: "V par craneal",
    massageTechnique: "Tratamiento intraoral (especializado) o presión externa submandibular."
  },
  {
    id: "sternocleidomastoid",
    name: "Esternocleidomastoideo",
    latinName: "Musculus sternocleidomastoideus",
    location: "Cuello lateral",
    action: "Flexiona la cabeza; rota la cabeza hacia el lado opuesto",
    origin: "Esternón y clavícula",
    insertion: "Hueso temporal (apófisis mastoides)",
    innervation: "Nervio espinal",
    massageTechnique: "Pinza rodada muy suave y estiramiento miofascial."
  },
  {
    id: "complexus-major",
    name: "Complexo mayor",
    location: "Cuello posterior",
    action: "Extiende la cabeza; la inclina lateralmente",
    origin: "Vértebras C7-T6",
    insertion: "Hueso occipital",
    innervation: "Nervios cervicales C1-C5",
    massageTechnique: "Presiones profundas longitudinales en la zona nucal."
  },
  {
    id: "splenius-capitis",
    name: "Esplenio de la cabeza",
    location: "Cuello posterior/superior",
    action: "Extiende la cabeza; inclina y gira la cabeza",
    origin: "Ligamento cervical posterior, vértebras T1-T3",
    insertion: "Hueso temporal y occipital",
    innervation: "Nervios cervicales C2-C4",
    massageTechnique: "Amasamiento en la base del cráneo."
  },
  {
    id: "intercostales",
    name: "Intercostales (Externos e Internos)",
    location: "Caja torácica",
    action: "Elevan (externos) y descienden (internos) las costillas en la respiración",
    origin: "Borde de las costillas",
    insertion: "Costillas adyacentes",
    innervation: "Nervios intercostales",
    massageTechnique: "Fricciones intercostales siguiendo el recorrido de la costilla."
  },
  {
    id: "diaphragm",
    name: "Diafragma",
    location: "Base del tórax",
    action: "Expande el tórax (inspiración)",
    origin: "Circunferencia inferior del tórax",
    insertion: "Tendón central del diafragma",
    innervation: "Nervios frénicos",
    massageTechnique: "Presión suave bajo el reborde costal durante la exhalación."
  },
  {
    id: "external-oblique",
    name: "Oblicuo mayor (Externo)",
    location: "Abdomen lateral",
    action: "Comprime el abdomen; flexión lateral del tronco",
    origin: "Ocho últimas costillas",
    insertion: "Cresta ilíaca y línea alba",
    innervation: "Nervios intercostales",
    massageTechnique: "Amasamiento palmar en los flancos."
  },
  {
    id: "rectus-abdominis",
    name: "Recto anterior del abdomen",
    location: "Abdomen frontal",
    action: "Flexiona el tronco; comprime cavidad abdominal",
    origin: "Coxales (pubis y sínfisis del pubis)",
    insertion: "Costillas y esternón",
    innervation: "Últimos seis nervios intercostales",
    massageTechnique: "Vaciado abdominal en sentido de las agujas del reloj."
  },
  {
    id: "internal-oblique",
    name: "Oblicuo menor (Interno)",
    location: "Abdomen lateral (profundo al externo)",
    action: "Comprime el abdomen; flexión lateral y rotación del tronco",
    origin: "Cresta ilíaca y ligamento inguinal",
    insertion: "Tres últimas costillas y línea alba",
    innervation: "Nervios intercostales e iliohipogástrico",
    massageTechnique: "Amasamiento suave en la zona lateral abdominal."
  },
  {
    id: "transversus-abdominis",
    name: "Transverso del abdomen",
    location: "Abdomen (capa más profunda)",
    action: "Comprime el abdomen (faja natural)",
    origin: "Cresta ilíaca, cartílagos costales inferiores",
    insertion: "Línea alba y pubis",
    innervation: "Nervios intercostales e iliohipogástrico",
    massageTechnique: "Presiones estáticas suaves para estimular el tono profundo."
  },
  {
    id: "levator-ani",
    name: "Elevador del ano",
    location: "Suelo pélvico",
    action: "Sostiene los órganos pélvicos",
    origin: "Pubis y espina ciática",
    insertion: "Cóccix",
    innervation: "Nervio pudendo interno",
    massageTechnique: "Técnicas de fisioterapia de suelo pélvico (especializado)."
  },
  {
    id: "pectoralis-major",
    name: "Pectoral Mayor",
    latinName: "Musculus pectoralis major",
    location: "Pecho",
    action: "Flexiona el brazo; aducción anterior del brazo",
    origin: "Clavícula, esternón, cartílagos costales",
    insertion: "Surco intertubercular del húmero (troquíter)",
    innervation: "Nervios torácicos anteriores menor y mayor",
    massageTechnique: "Fricciones transversales y apertura de caja torácica."
  },
  {
    id: "latissimus-dorsi",
    name: "Dorsal Ancho",
    latinName: "Musculus latissimus dorsi",
    location: "Espalda media e inferior",
    action: "Extiende el brazo; aducción posterior del brazo",
    origin: "Vértebras dorsales inferiores, lumbares y sacras; cresta ilíaca",
    insertion: "Surco intertubercular del húmero (corredera bicipital)",
    innervation: "Nervio del dorsal ancho",
    massageTechnique: "Presiones deslizantes largas y amasamiento en los bordes laterales."
  },
  {
    id: "biceps-brachii",
    name: "Bíceps Braquial",
    latinName: "Musculus biceps brachii",
    location: "Brazo anterior",
    action: "Flexión del antebrazo en supinación; supinación de mano",
    origin: "Escápula (tubérculo supragenoideo y coracoides)",
    insertion: "Tuberosidad del radio",
    innervation: "Nervio musculocutáneo",
    massageTechnique: "Amasamiento longitudinal y fricción en el tendón bicipital."
  },
  {
    id: "triceps-brachii",
    name: "Tríceps Braquial",
    location: "Brazo posterior",
    action: "Extensión del antebrazo",
    origin: "Escápula y cara posterior del húmero",
    insertion: "Cúbito (olecranon)",
    innervation: "Nervio radial",
    massageTechnique: "Amasamiento profundo en la cara posterior del brazo."
  },
  {
    id: "brachialis",
    name: "Braquial anterior",
    location: "Brazo (profundo al bíceps)",
    action: "Flexión del antebrazo",
    origin: "Húmero (mitad distal anterior)",
    insertion: "Cúbito (apófisis coronoides)",
    innervation: "Nervio musculocutáneo",
    massageTechnique: "Presiones profundas laterales al bíceps."
  },
  {
    id: "brachioradialis",
    name: "Braquiorradial",
    location: "Antebrazo (lateral superior)",
    action: "Flexión del antebrazo",
    origin: "Húmero (cresta supracondílea)",
    insertion: "Radio (apófisis estiloides)",
    innervation: "Nervio radial",
    massageTechnique: "Amasamiento longitudinal del borde radial del antebrazo."
  },
  {
    id: "gastrocnemius",
    name: "Gastrocnemio (Gemelos)",
    latinName: "Musculus gastrocnemius",
    location: "Parte posterior de la pierna",
    action: "Flexión plantar del pie y flexión de la rodilla",
    origin: "Cóndilos del fémur",
    insertion: "Calcáneo (vía tendón de Aquiles)",
    innervation: "Nervio tibial",
    massageTechnique: "Vaciado venoso y amasamiento palmodigital.",
    imageUrl: "https://images.unsplash.com/photo-1591117207239-788cd82e427d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "psoas-iliacus",
    name: "Psoas e Ilíaco",
    location: "Cadera y pelvis",
    action: "Flexión del muslo y flexión del tronco",
    origin: "Fosa ilíaca; Vértebras (T12 a L5)",
    insertion: "Fémur (trocánter menor)",
    innervation: "Nervio crural y nervios lumbares L2-L4",
    massageTechnique: "Presiones profundas lentas en la fosa ilíaca (especializado).",
    imageUrl: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "rectus-femoris",
    name: "Recto Anterior (Ilíaco)",
    location: "Cara anterior del muslo",
    action: "Flexión del muslo y extensión de la pierna",
    origin: "Hueso ilíaco (espina anteroinferior)",
    insertion: "Tibia (tendón rotuliano)",
    innervation: "Nervio crural",
    massageTechnique: "Fricciones longitudinales y estiramientos pasivos.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "gluteus-maximus",
    name: "Glúteo Mayor",
    location: "Glúteo (cara posterior)",
    action: "Extensión y rotación externa del muslo",
    origin: "Ilíaco, sacro, cóccix y ligamento sacrociático",
    insertion: "Fémur (cresta del glúteo mayor)",
    innervation: "Nervio glúteo inferior",
    massageTechnique: "Amasamiento profundo y presiones con el antebrazo.",
    imageUrl: "https://images.unsplash.com/photo-1599058917233-35833486c9d9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "gluteus-medius",
    name: "Glúteo Mediano",
    location: "Glúteo (cara externa)",
    action: "Abducción y rotación externa del muslo; estabiliza la pelvis",
    origin: "Ilíaco (cara externa)",
    insertion: "Fémur (trocánter mayor)",
    innervation: "Nervio glúteo superior",
    massageTechnique: "Presión circular profunda sobre el lateral de la cadera."
  },
  {
    id: "gluteus-minimus",
    name: "Glúteo Menor",
    location: "Glúteo (profundo)",
    action: "Abducción y rotación interna del muslo; estabiliza la pelvis",
    origin: "Ilíaco (cara externa)",
    insertion: "Fémur (trocánter mayor)",
    innervation: "Nervio glúteo superior",
    massageTechnique: "Técnica de puntos gatillo en la zona lateral profunda."
  },
  {
    id: "tensor-fasciae-latae",
    name: "Tensor de la Fascia Lata",
    location: "Cadera lateral",
    action: "Abducción del muslo; tensa el ligamento iliotibial",
    origin: "Ilíaco (parte anterior de la cresta)",
    insertion: "Tibia (ligamento iliotibial)",
    innervation: "Nervio glúteo superior",
    massageTechnique: "Fricciones longitudinales en la cintilla iliotibial."
  },
  {
    id: "pectineus",
    name: "Pectíneo",
    location: "Ingle (pubis)",
    action: "Aducción y flexión del muslo",
    origin: "Pubis (línea pectínea)",
    insertion: "Fémur (línea pectínea)",
    innervation: "Nervio femoral",
    massageTechnique: "Presiones suaves cerca de la sínfisis púbica."
  },
  {
    id: "adductor-longus",
    name: "Aductor largo",
    location: "Muslo interno",
    action: "Aducción del muslo",
    origin: "Pubis",
    insertion: "Fémur (línea áspera)",
    innervation: "Nervio obturador",
    massageTechnique: "Amasamiento y presiones en la cara interna del muslo."
  },
  {
    id: "adductors",
    name: "Grupo Aductor (Menor, Mediano, Mayor)",
    location: "Muslo interno",
    action: "Aducción del muslo",
    origin: "Pubis",
    insertion: "Fémur (línea áspera)",
    innervation: "Nervio obturador",
    massageTechnique: "Amasamiento y presiones en la cara interna del muslo."
  },
  {
    id: "gracilis",
    name: "Recto Interno (Grácilis)",
    location: "Muslo interno (superficial)",
    action: "Aducción del muslo; flexión y aducción de la pierna",
    origin: "Pubis (bajo la sínfisis)",
    insertion: "Tibia (cara interna)",
    innervation: "Nervio obturador",
    massageTechnique: "Deslizamientos largos y suaves en la cara interna."
  },
  {
    id: "vasto-externo",
    name: "Vasto Externo",
    location: "Cara externa del muslo",
    action: "Extensión de la pierna",
    origin: "Fémur (línea áspera)",
    insertion: "Tibia (tendón rotuliano)",
    innervation: "Nervio crural",
    massageTechnique: "Amasamiento palmar en el lateral del muslo."
  },
  {
    id: "vasto-interno",
    name: "Vasto Interno",
    location: "Cara interna del muslo (inferior)",
    action: "Extensión de la pierna",
    origin: "Fémur",
    insertion: "Tibia (tendón rotuliano)",
    innervation: "Nervio crural",
    massageTechnique: "Fricción circular cerca de la rodilla."
  },
  {
    id: "crural",
    name: "Crural (Vasto Intermedio)",
    location: "Cara anterior del muslo (profundo)",
    action: "Extensión de la pierna",
    origin: "Fémur (cara anterior)",
    insertion: "Tibia (tendón rotuliano)",
    innervation: "Nervio crural",
    massageTechnique: "Presiones profundas bajo el recto anterior."
  },
  {
    id: "sartorius",
    name: "Sartorio",
    location: "Cara anterior del muslo (diagonal)",
    action: "Aducción y flexión de la pierna; permite cruzar la pierna",
    origin: "Coxal (espinas ilíacas anterior y superior)",
    insertion: "Tibia (cara interna, extremo superior)",
    innervation: "Nervio crural",
    massageTechnique: "Pases longitudinales siguiendo la línea diagonal del muslo."
  },
  {
    id: "biceps-femoris",
    name: "Bíceps Crural",
    location: "Parte posterior del muslo (lateral)",
    action: "Flexión de la pierna; extensión del muslo",
    origin: "Isquion (tuberosidad) y Fémur (línea áspera)",
    insertion: "Peroné (cabeza) y Tibia (cóndilo externo)",
    innervation: "Nervio ciático mayor",
    massageTechnique: "Amasamiento profundo en la cara posterior externa."
  },
  {
    id: "semitendinosus",
    name: "Semitendinoso",
    location: "Parte posterior del muslo (medial)",
    action: "Flexión de la pierna; extensión del muslo",
    origin: "Isquion (tuberosidad)",
    insertion: "Tibia (cara interna proximal)",
    innervation: "Nervio ciático mayor",
    massageTechnique: "Fricciones longitudinales en la cara posterior interna."
  },
  {
    id: "semimembranosus",
    name: "Semimembranoso",
    location: "Parte posterior del muslo (medial profundo)",
    action: "Flexión de la pierna; extensión del muslo",
    origin: "Isquion (tuberosidad)",
    insertion: "Tibia (cóndilo interno)",
    innervation: "Nervio ciático mayor",
    massageTechnique: "Presiones deslizantes profundas bajo el semitendinoso."
  },
  {
    id: "tibialis-anterior",
    name: "Tibial Anterior",
    location: "Cara anterior de la pierna",
    action: "Flexión dorsal del pie; invierte el pie",
    origin: "Tibia (cóndilo externo)",
    insertion: "Tarso y base del primer metatarsiano",
    innervation: "Nervio ciático poplíteo externo",
    massageTechnique: "Fricción longitudinal con el pulgar junto a la tibia."
  },
  {
    id: "soleus",
    name: "Sóleo",
    location: "Parte posterior de la pierna (bajo gemelos)",
    action: "Flexión plantar del pie (extensión)",
    origin: "Tibia y Peroné",
    insertion: "Calcáneo (vía tendón de Aquiles)",
    innervation: "Nervio ciático poplíteo interno",
    massageTechnique: "Amasamiento profundo bajo el gastrocnemio."
  },
  {
    id: "peroneus-longus",
    name: "Peroneo Lateral Largo",
    location: "Cara externa de la pierna",
    action: "Flexión plantar y eversión del pie",
    origin: "Tibia (cóndilo externo) y Peroné",
    insertion: "Primer metatarsiano y primera cuña",
    innervation: "Nervio ciático poplíteo externo",
    massageTechnique: "Fricción transversal en la cara externa de la pierna."
  },
  {
    id: "peroneus-brevis",
    name: "Peroneo Lateral Corto",
    location: "Cara externa de la pierna (distal)",
    action: "Flexión del pie y eversión",
    origin: "Peroné (dos tercios inferiores)",
    insertion: "Quinto metatarsiano",
    innervation: "Nervio musculocutáneo",
    massageTechnique: "Presiones puntuales en el lateral externo del pie."
  },
  {
    id: "peroneus-tertius",
    name: "Peroneo Anterior",
    location: "Cara anterior de la pierna (distal)",
    action: "Flexión del pie y eversión",
    origin: "Peroné (tercio distal)",
    insertion: "Cuarto y quinto metatarsianos",
    innervation: "Nervio tibial anterior",
    massageTechnique: "Pases suaves en la parte anterior del tobillo."
  },
  {
    id: "extensor-digitorum-longus",
    name: "Extensor Común de los Dedos",
    location: "Cara anterior de la pierna",
    action: "Flexión dorsal del pie; extensión de los dedos",
    origin: "Tibia (cóndilo externo) y Peroné",
    insertion: "Falanges de los cuatro últimos dedos",
    innervation: "Nervio tibial anterior",
    massageTechnique: "Fricción longitudinal sobre el dorso del pie."
  }
];

export const bones: Bone[] = [
  {
    id: "femur",
    name: "Fémur",
    region: "Pierna (Muslo)",
    description: "Hueso más largo, pesado y fuerte del cuerpo humano.",
    imageUrl: "https://images.unsplash.com/photo-159742324403d-ef3625934443?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "scapula",
    name: "Escápula (Omóplato)",
    region: "Hombro",
    description: "Hueso plano y triangular que forma la parte posterior de la cintura escapular.",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "humerus",
    name: "Húmero",
    region: "Brazo",
    description: "Hueso largo que se articula con la escápula en el hombro y con el radio y cúbito en el codo.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "pelvis",
    name: "Pelvis (Coxal)",
    region: "Tronco inferior",
    description: "Estructura ósea en forma de cuenca que conecta la columna con las piernas.",
    imageUrl: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tibia",
    name: "Tibia",
    region: "Pierna inferior",
    description: "Hueso principal y más interno de la pierna inferior, soporta el peso corporal."
  },
  {
    id: "clavicle",
    name: "Clavícula",
    region: "Hombro/Tórax",
    description: "Hueso largo en forma de S que conecta el esternón con la escápula."
  },
  {
    id: "sacrum",
    name: "Sacro",
    region: "Base de la columna",
    description: "Hueso triangular grande al final de la columna vertebral, formado por vértebras fusionadas."
  },
  {
    id: "radius",
    name: "Radio",
    region: "Antebrazo",
    description: "Hueso lateral del antebrazo, situado en el lado del pulgar."
  },
  {
    id: "ulna",
    name: "Cúbito (Ulna)",
    region: "Antebrazo",
    description: "Hueso medial del antebrazo, situado en el lado del dedo meñique."
  },
  {
    id: "occipital",
    name: "Hueso Occipital",
    region: "Cráneo posterior",
    description: "Hueso que forma la parte posterior e inferior del cráneo."
  },
  {
    id: "frontal",
    name: "Hueso Frontal",
    region: "Cráneo anterior",
    description: "Hueso que forma la frente y el techo de las órbitas oculares."
  },
  {
    id: "maxillary",
    name: "Maxilar",
    region: "Cara",
    description: "Hueso que forma la mandíbula superior y parte del paladar."
  },
  {
    id: "calcaneus",
    name: "Calcáneo",
    region: "Pie (Talón)",
    description: "Hueso del talón, el más grande de los huesos del tarso. Punto de inserción del tendón de Aquiles."
  },
  {
    id: "patella",
    name: "Rótula (Patela)",
    region: "Rodilla",
    description: "Hueso sesamoideo situado en la parte anterior de la articulación de la rodilla."
  },
  {
    id: "ischium",
    name: "Isquion",
    region: "Pelvis",
    description: "Parte inferior y posterior del hueso coxal. Soporta el peso del cuerpo al estar sentado."
  },
  {
    id: "fibula",
    name: "Peroné (Fíbula)",
    region: "Pierna inferior",
    description: "Hueso lateral de la pierna, más delgado que la tibia. Proporciona estabilidad lateral al tobillo."
  }
];

export const movements: Movement[] = [
  {
    id: "flexion-elbow",
    name: "Flexión de Codo",
    description: "Disminución del ángulo entre el antebrazo y el brazo.",
    musclesInvolved: ["Bíceps braquial", "Braquial anterior", "Braquiorradial"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "extension-knee",
    name: "Extensión de Rodilla",
    description: "Aumento del ángulo entre la pierna y el muslo.",
    musclesInvolved: ["Cuádriceps femoral"],
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "abduction-shoulder",
    name: "Abducción de Hombro",
    description: "Movimiento del brazo alejándose de la línea media del cuerpo.",
    musclesInvolved: ["Deltoides medio", "Supraespinoso"]
  },
  {
    id: "rotation-neck",
    name: "Rotación Cervical",
    description: "Giro de la cabeza hacia un lado sobre el eje de la columna.",
    musclesInvolved: ["Esternocleidomastoideo", "Esplenios", "Trapecio"]
  },
  {
    id: "plantar-flexion",
    name: "Flexión Plantar",
    description: "Movimiento del pie hacia abajo, como al ponerse de puntillas.",
    musclesInvolved: ["Gastrocnemio", "Sóleo"]
  }
];

export const massageTechniques: MassageTechnique[] = [
  {
    id: "effleurage",
    name: "Effleurage (Roce)",
    description: "Movimientos largos y suaves que se deslizan sobre la piel para calentar los tejidos.",
    benefits: ["Relajación muscular", "Mejora de la circulación sanguínea", "Calentamiento de tejidos"],
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "petrissage",
    name: "Pétrissage (Amasamiento)",
    description: "Compresión rítmica y amasado de los tejidos musculares para liberar tensión profunda.",
    benefits: ["Liberación de toxinas", "Mejora de la elasticidad", "Reducción de adherencias"],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ae6b918119b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "friction",
    name: "Fricción",
    description: "Presión profunda aplicada de forma circular o transversal sobre fibras musculares o tendones.",
    benefits: ["Deshacer nódulos musculares", "Estimulación de la curación de tendones", "Aumento del flujo local"],
    imageUrl: "https://images.unsplash.com/photo-1600334129128-f4b5a564db47?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "tapotement",
    name: "Tapotement (Percusión)",
    description: "Golpes rítmicos y rápidos con las manos ahuecadas, bordes cubitales o dedos.",
    benefits: ["Estimulación nerviosa", "Aumento del tono muscular", "Liberación de mucosidad en tórax"],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "vibration",
    name: "Vibración",
    description: "Movimientos oscilatorios finos y rápidos aplicados con las puntas de los dedos o la palma.",
    benefits: ["Sedación del sistema nervioso", "Relajación de fibras musculares finas", "Alivio del dolor"],
    imageUrl: "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "trigger-point",
    name: "Puntos Gatillo (Trigger Points)",
    description: "Presión mantenida sobre un punto hiperirritable en una banda tensa de músculo.",
    benefits: ["Eliminación del dolor referido", "Restauración del rango de movimiento", "Liberación de tensión crónica"],
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "massage-relaxing",
    name: "Masaje Relajante",
    description: "Movimientos suaves y lentos para reducir el estrés y la tensión acumulada.",
    benefits: ["Reducción de ansiedad", "Relajación profunda", "Mejora del sueño"],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ae6b918119b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "massage-deep-tissue",
    name: "Masaje Descontracturante",
    description: "Técnica profunda para eliminar contracturas y nudos musculares persistentes.",
    benefits: ["Eliminación de nudos", "Alivio de dolor crónico", "Recuperación de movilidad"],
    imageUrl: "https://images.unsplash.com/photo-1519824141121-b97674389913?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "massage-sports",
    name: "Masaje Deportivo",
    description: "Aplicado antes o después del ejercicio para prevenir lesiones y optimizar el rendimiento.",
    benefits: ["Prevención de lesiones", "Mejora del rendimiento", "Recuperación rápida"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "massage-lymphatic",
    name: "Masaje Linfático",
    description: "Movimientos muy suaves que ayudan a la eliminación de líquidos y toxinas del sistema linfático.",
    benefits: ["Reducción de edemas", "Eliminación de toxinas", "Mejora del sistema inmune"],
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "massage-aesthetic",
    name: "Masaje Estético",
    description: "Tratamientos enfocados en la mejora de la apariencia de la piel, como tonificación o reducción de celulitis.",
    benefits: ["Tonificación cutánea", "Mejora de textura", "Reducción de celulitis"],
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
  }
];
