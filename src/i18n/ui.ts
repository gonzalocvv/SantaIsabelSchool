// Diccionarios de contenido ES / EN.
// Todo el texto está fundado en el material extraído del Instagram oficial
// (@santaisabelschool.pdlt) y el relevamiento (ver ../../../assets/textos y
// 05-extraccion-fuentes.md). EN está tipado contra la forma de ES: si falta
// una clave, TypeScript marca error (garantiza paridad bilingüe).

export const languages = { es: 'Español', en: 'English' } as const;
export const defaultLang = 'es';
export type Lang = keyof typeof languages;

const es = {
  meta: {
    title: 'Santa Isabel School · Colegio bilingüe en Paso de los Toros',
    description:
      'Colegio bilingüe con certificación Cambridge en Paso de los Toros, Uruguay. Educación inicial, primaria, secundaria y bachillerato, con formación en valores.',
    ogAlt: 'Santa Isabel School — Paso de los Toros, Uruguay',
  },
  nav: {
    about: 'El colegio',
    proposal: 'Propuesta',
    levels: 'Niveles',
    programs: 'Programas',
    gallery: 'Galería',
    contact: 'Contacto',
    cta: 'Solicitá información',
    skip: 'Saltar al contenido',
    menu: 'Menú',
    primary: 'Principal',
  },
  hero: {
    eyebrow: 'Paso de los Toros, Tacuarembó',
    title: 'Educación bilingüe con valores, de Inicial a Bachillerato',
    subtitle:
      'En Santa Isabel School combinamos aprendizaje, idioma y valores: una educación bilingüe con certificación Cambridge, de Inicial a Bachillerato, en Paso de los Toros.',
    ctaPrimary: 'Solicitá información',
    ctaSecondary: 'Conocé la propuesta',
    badges: [
      'Certificación Cambridge',
      'Inicial · Primaria · Secundaria · Bachillerato',
      'Media o doble jornada bilingüe',
    ],
  },
  trust: {
    items: [
      'Certificación Cambridge',
      'Bilingüe: media o doble jornada',
      'De Inicial a Bachillerato',
      'Formación en valores',
    ],
  },
  about: {
    eyebrow: 'Sobre el colegio',
    title: 'Una educación bilingüe con identidad propia',
    history: [
      'En Santa Isabel School entendemos la educación como un camino para formar personas plenas, autónomas y comprometidas con su entorno. Por eso combinamos un fuerte foco en el bilingüismo con una mirada humana y cercana a cada estudiante.',
      'Somos una comunidad educativa en Paso de los Toros que acompaña a las familias a lo largo de toda la trayectoria, desde la educación inicial hasta el bachillerato.',
    ],
    shield: {
      title: 'El significado de nuestro escudo',
      items: [
        {
          key: 'puente',
          label: 'El puente',
          text: 'La unión, el paso y la conexión entre etapas, generaciones y culturas.',
        },
        {
          key: 'sol',
          label: 'El sol naciente',
          text: 'El crecimiento, el futuro y la esperanza de cada estudiante.',
        },
        {
          key: 'escudo',
          label: 'El escudo',
          text: 'La tradición, la pertenencia y los valores que nos sostienen desde nuestros orígenes.',
        },
      ],
    },
    missionLabel: 'Nuestra misión',
    mission: 'Educar para la vida, conectando conocimiento, valores y futuro.',
  },
  pillars: {
    eyebrow: 'Propuesta educativa',
    title: 'Cuatro pilares que nos definen',
    intro:
      'Creemos en una educación que forma personas plenas, autónomas y comprometidas con su entorno. Nuestro proyecto se sostiene en cuatro pilares que acompañan el aprendizaje y la vida.',
    items: [
      {
        n: '01',
        title: 'Reconocimiento de las individualidades',
        text: 'Cada estudiante es único, con su propio ritmo y sus desafíos. Promovemos un ambiente de confianza y respeto, con una escucha sensible que atiende las necesidades de cada alumno para que reciba las mejores oportunidades de aprender y desarrollarse.',
      },
      {
        n: '02',
        title: 'El bilingüismo',
        text: 'El inglés es un rasgo distintivo de la institución y parte esencial de nuestro proyecto desde el inicio. Lo enseñamos de forma natural y contextual, integrado a todas las áreas, y preparamos a los estudiantes para rendir los exámenes internacionales de Cambridge con un equipo pedagógico especializado.',
      },
      {
        n: '03',
        title: 'Las metodologías activas',
        text: 'Situamos al estudiante en el centro del proceso, con participación activa y aprendizaje significativo. A través de la acción vinculamos lo cognitivo, lo instrumental y lo socioemocional, con un aprendizaje contextualizado, relevante y motivante.',
      },
      {
        n: '04',
        title: 'Educación integral',
        text: 'La educación va más allá de lo académico: abarca el desarrollo intelectual, emocional, físico y social. Buscamos formar seres humanos plenos, capaces de comprender y transformar el mundo que los rodea.',
      },
    ],
  },
  levels: {
    eyebrow: 'Niveles',
    title: 'Una trayectoria completa en un mismo lugar',
    intro:
      'De la educación inicial al bachillerato. Cada familia elige la modalidad que mejor se adapta a su ritmo y necesidades.',
    modalitiesLabel: 'Modalidades',
    modalities: ['Media jornada', 'Doble jornada bilingüe'],
    items: [
      {
        name: 'Educación Inicial',
        tag: 'SantaKids',
        desc: 'Ambientes preparados que invitan a explorar, elegir y aprender con autonomía, inspirados en la pedagogía del espacio.',
      },
      {
        name: 'Primaria',
        tag: '',
        desc: 'Aprendizaje significativo con el inglés integrado a las áreas y el acompañamiento cercano de cada trayectoria.',
      },
      {
        name: 'Secundaria',
        tag: '',
        desc: 'Programas como el Club de Lectura fortalecen la comprensión, el pensamiento crítico y la autonomía.',
      },
      {
        name: 'Bachillerato',
        tag: '',
        desc: 'El tramo final de la trayectoria, con la misma identidad bilingüe y de valores.',
      },
    ],
  },
  programs: {
    eyebrow: 'Vida institucional',
    title: 'Programas que hacen la diferencia',
    items: [
      {
        title: 'Club de Lectura',
        text: 'En secundaria, encuentros semanales de 45 minutos por grado donde los estudiantes fortalecen la comprensión, el pensamiento crítico y el gusto por la lectura.',
        points: [
          'Lectura individual e intercambio de lo leído',
          'Producción a partir de la lectura',
          'A cargo de los profesores de Español',
        ],
      },
      {
        title: 'Ambientación de aulas',
        text: 'En el nivel inicial diseñamos cada aula de forma intencional: el ambiente es el "tercer maestro". Espacios ordenados y a la altura del niño que favorecen la autonomía, la concentración y la regulación emocional.',
        points: [
          'Materiales accesibles y a la altura del niño',
          'Predecibilidad visual y sentido de pertenencia',
          'Inspirado en María Montessori y Loris Malaguzzi',
        ],
      },
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: 'Momentos reales de Santa Isabel School',
    intro: 'Aprender no es quedarse quieto: es explorar, probar, descubrir y crecer.',
  },
  contact: {
    eyebrow: 'Admisiones',
    title: 'Admisiones y contacto',
    intro:
      '¿Querés conocer la propuesta o inscribir a tu hijo/a? Escribinos y te contactamos a la brevedad.',
    form: {
      name: 'Nombre y apellido',
      email: 'Email',
      phone: 'Teléfono',
      level: '¿Para qué nivel?',
      levelOptions: ['Educación Inicial', 'Primaria', 'Secundaria', 'Bachillerato', 'Otra consulta'],
      message: 'Mensaje',
      messagePlaceholder: 'Contanos en qué te podemos ayudar…',
      submit: 'Enviar consulta',
      sending: 'Enviando…',
      success: '¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.',
      error: 'Ocurrió un error al enviar. Probá de nuevo o escribinos por WhatsApp.',
    },
    whatsappCta: 'Escribinos por WhatsApp',
    callCta: 'Llamar',
    labels: {
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Email',
      hours: 'Horarios',
    },
    pendingNote: 'Datos de contacto a confirmar con el colegio.',
  },
  footer: {
    tagline: 'Educar para la vida, conectando conocimiento, valores y futuro.',
    navTitle: 'Navegación',
    followTitle: 'Seguinos',
    rights: 'Todos los derechos reservados.',
  },
  langSwitch: {
    label: 'Idioma',
    es: 'ES',
    en: 'EN',
    toEs: 'Ver en español',
    toEn: 'View in English',
  },
};

export type Translation = typeof es;

// EN tipado contra la forma de ES (paridad garantizada por el compilador).
const en: Translation = {
  meta: {
    title: 'Santa Isabel School · Bilingual school in Paso de los Toros',
    description:
      'Bilingual school with Cambridge certification in Paso de los Toros, Uruguay. Early years, primary, secondary and high school, with values-based education.',
    ogAlt: 'Santa Isabel School — Paso de los Toros, Uruguay',
  },
  nav: {
    about: 'The school',
    proposal: 'Approach',
    levels: 'Levels',
    programs: 'Programs',
    gallery: 'Gallery',
    contact: 'Contact',
    cta: 'Request information',
    skip: 'Skip to content',
    menu: 'Menu',
    primary: 'Main',
  },
  hero: {
    eyebrow: 'Paso de los Toros, Tacuarembó',
    title: 'Bilingual education with values, from Early Years to High School',
    subtitle:
      'At Santa Isabel School we combine learning, language and values: bilingual education with Cambridge certification, from Early Years to High School.',
    ctaPrimary: 'Request information',
    ctaSecondary: 'Explore our approach',
    badges: [
      'Cambridge certification',
      'Early Years · Primary · Secondary · High School',
      'Half-day or full-day bilingual',
    ],
  },
  trust: {
    items: [
      'Cambridge certification',
      'Bilingual: half-day or full-day',
      'Early Years to High School',
      'Values-based education',
    ],
  },
  about: {
    eyebrow: 'About the school',
    title: 'Bilingual education with its own identity',
    history: [
      'At Santa Isabel School we see education as a path to shape whole, autonomous people who are committed to their environment. That is why we combine a strong focus on bilingualism with a caring, close approach to every student.',
      'We are a school community in Paso de los Toros that supports families throughout the whole journey, from early years to high school.',
    ],
    shield: {
      title: 'The meaning of our crest',
      items: [
        {
          key: 'puente',
          label: 'The bridge',
          text: 'Union, passage and connection between stages, generations and cultures.',
        },
        {
          key: 'sol',
          label: 'The rising sun',
          text: 'Growth, the future and the hope of every student.',
        },
        {
          key: 'escudo',
          label: 'The shield',
          text: 'Tradition, belonging and the values that have sustained us from our origins.',
        },
      ],
    },
    missionLabel: 'Our mission',
    mission: 'To educate for life, connecting knowledge, values and the future.',
  },
  pillars: {
    eyebrow: 'Educational approach',
    title: 'Four pillars that define us',
    intro:
      'We believe in an education that shapes whole, autonomous people who are committed to their environment. Our project rests on four pillars that support both learning and life.',
    items: [
      {
        n: '01',
        title: 'Recognising each individual',
        text: 'Every student is unique, with their own pace and challenges. We foster an environment of trust and respect, with attentive listening that meets each student’s needs so they get the best opportunities to learn and grow.',
      },
      {
        n: '02',
        title: 'Bilingualism',
        text: 'English is a distinctive feature of the school and an essential part of our project from the start. We teach it naturally and in context, integrated across all areas, and we prepare students to sit the Cambridge international exams with a specialised teaching team.',
      },
      {
        n: '03',
        title: 'Active methodologies',
        text: 'We place the student at the centre of the process, with active participation and meaningful learning. Through action we connect the cognitive, the practical and the social-emotional, with learning that is contextual, relevant and motivating.',
      },
      {
        n: '04',
        title: 'Holistic education',
        text: 'Education goes beyond the academic: it spans intellectual, emotional, physical and social development. We aim to shape whole human beings, able to understand and transform the world around them.',
      },
    ],
  },
  levels: {
    eyebrow: 'Levels',
    title: 'A complete journey in one place',
    intro:
      'From early years to high school. Each family chooses the format that best suits their pace and needs.',
    modalitiesLabel: 'Formats',
    modalities: ['Half-day', 'Full-day bilingual'],
    items: [
      {
        name: 'Early Years',
        tag: 'SantaKids',
        desc: 'Prepared environments that invite children to explore, choose and learn with autonomy, inspired by the pedagogy of space.',
      },
      {
        name: 'Primary',
        tag: '',
        desc: 'Meaningful learning with English integrated across subjects and close support for every journey.',
      },
      {
        name: 'Secondary',
        tag: '',
        desc: 'Programs such as the Reading Club strengthen comprehension, critical thinking and autonomy.',
      },
      {
        name: 'High School',
        tag: '',
        desc: 'The final stage of the journey, with the same bilingual, values-driven identity.',
      },
    ],
  },
  programs: {
    eyebrow: 'School life',
    title: 'Programs that make a difference',
    items: [
      {
        title: 'Reading Club',
        text: 'In secondary, weekly 45-minute sessions per grade where students strengthen comprehension, critical thinking and a love of reading.',
        points: [
          'Individual reading and sharing of what was read',
          'Written and oral work based on reading',
          'Led by the Spanish-language teachers',
        ],
      },
      {
        title: 'Classroom environments',
        text: 'In early years we design each classroom intentionally: the environment is the "third teacher". Tidy spaces at the child’s height that foster autonomy, focus and emotional regulation.',
        points: [
          'Accessible materials at the child’s height',
          'Visual predictability and a sense of belonging',
          'Inspired by María Montessori and Loris Malaguzzi',
        ],
      },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Real moments at Santa Isabel School',
    intro: 'Learning is not standing still: it is exploring, trying, discovering and growing.',
  },
  contact: {
    eyebrow: 'Admissions',
    title: 'Admissions & contact',
    intro:
      'Want to learn about our approach or enrol your child? Send us a message and we’ll get back to you shortly.',
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      level: 'Which level?',
      levelOptions: ['Early Years', 'Primary', 'Secondary', 'High School', 'Other enquiry'],
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help…',
      submit: 'Send enquiry',
      sending: 'Sending…',
      success: 'Thank you! We received your enquiry and will get back to you shortly.',
      error: 'Something went wrong. Please try again or message us on WhatsApp.',
    },
    whatsappCta: 'Message us on WhatsApp',
    callCta: 'Call',
    labels: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
    },
    pendingNote: 'Contact details to be confirmed with the school.',
  },
  footer: {
    tagline: 'To educate for life, connecting knowledge, values and the future.',
    navTitle: 'Navigation',
    followTitle: 'Follow us',
    rights: 'All rights reserved.',
  },
  langSwitch: {
    label: 'Language',
    es: 'ES',
    en: 'EN',
    toEs: 'Ver en español',
    toEn: 'View in English',
  },
};

export const ui = { es, en } as const;
