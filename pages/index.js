// pages/index.js

import React from 'react';
import Head from 'next/head';

// Importar únicamente los componentes requeridos
import HeroSection from '@components/landing/HeroSection/HeroSection';
import WorkApproachSection from '@components/landing/WorkApproachSection/WorkApproachSection';
import CredibilitySection from '@components/landing/CredibilitySection/CredibilitySection';
import SubscriptionPlansSection from '@components/landing/SubscriptionPlansSection/SubscriptionPlansSection';
import FAQSection from '@components/landing/FAQ/FAQSection';
import Footer from '@components/landing/Footer/Footer';
import Menu from '@components/common/Menu/Menu';

/* =====================
   Configuración (SSOT)
   ===================== */

// Metadatos para SEO y accesibilidad
const PAGE_TITLE = 'Synara | Marketing Médico para Impulsar tu Práctica';
const PAGE_DESCRIPTION =
  'Diseñamos estrategias de marketing pensadas para médicos, clínicas y profesionales de la salud. Aumenta tu visibilidad, atrae más pacientes y fortalece tu reputación en línea.';
const PAGE_URL = 'https://synara.tech';
const PAGE_IMAGE = 'https://synara.tech/static/images/synara-preview.jpg';

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Synara - Marketing Médico Especializado",
  "url": PAGE_URL,
  "description": PAGE_DESCRIPTION,
  "publisher": {
    "@type": "Organization",
    "name": "Synara",
    "url": PAGE_URL,
    "logo": "https://synara.tech/logo.png"
  },
  "image": PAGE_IMAGE,
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "url": PAGE_URL,
    "name": "Synara"
  }
};

// IDs de secciones para anclaje desde el menú
const SECTION_IDS = {
  hero: 'seccion-hero',
  workApproach: 'seccion-enfoque',
  credibility: 'seccion-credibilidad',
  subscription: 'seccion-planes',
  faq: 'seccion-faq',
  contact: 'contacto', // Nuevo ID para contacto (footer)
};

// Contenido Hero
const HERO_CONTENT = {
  title: 'Convertimos tu Práctica Médica en una Marca de Confianza',
  subtitle:
    'Diseñamos estrategias de marketing pensadas para médicos, clínicas y profesionales de la salud. Te ayudamos a crecer, atraer más pacientes y construir relaciones duraderas.',
  secondaryText:
    'Impulsamos tu reputación en línea para que conectes con tus pacientes de forma auténtica y efectiva.',
};

// Contenido Enfoque de Trabajo
const WORK_APPROACH_CONTENT = {
  mainTitle: 'Cómo Elevamos Tu Presencia Digital Médica',
  mainSubtitle:
    'Diseñamos estrategias de marketing médico que reflejan la calidad de tu práctica y generan confianza auténtica en tus pacientes, atrayendo nuevos y fidelizando a los actuales.',
  features: [
    {
      title: 'Confianza Duradera',
      text: 'Forjamos una presencia en línea que inspira credibilidad, cultivando la lealtad de tus pacientes a largo plazo.',
    },
    {
      title: 'Expansión Continua',
      text: 'Implementamos estrategias basadas en datos que impulsan tu visibilidad, generando un flujo constante de nuevos pacientes.',
    },
  ],
};

// Contenido Credibilidad
const CREDIBILITY_CONTENT = {
  title: 'Consolida Tu Presencia y Credibilidad Médica en Línea',
  subtitle:
    'Potencia la confianza de tus pacientes y destaca la calidad de tus servicios a través de estrategias personalizadas.',
  cards: [
    {
      icon: 'FaHeart',
      title: 'Confianza Auténtica',
      text: 'Refuerza la relación médico-paciente con información fiable y comunicación clara.',
    },
    {
      icon: 'FaStar',
      title: 'Reputación Online',
      text: 'Destaca tus logros, credenciales y testimonios para elevar tu perfil digital.',
    },
    {
      icon: 'FaEye',
      title: 'Visibilidad Estratégica',
      text: 'Aumenta el alcance de tu práctica llegando a nuevas audiencias con posicionamiento digital.',
    },
    {
      icon: 'FaUserCheck',
      title: 'Atención Personalizada',
      text: 'Adapta tu enfoque a las necesidades únicas de cada paciente, fortaleciendo su fidelidad.',
    },
    {
      icon: 'FaStethoscope',
      title: 'Cuidado Integral',
      text: 'Ofrece acompañamiento holístico con salud preventiva, seguimiento y comunicación continua.',
    },
  ],
};

// Contenido Planes
const PLANS_CONTENT = {
  mainTitle: 'Selecciona el Plan Perfecto para Impulsar tu Marca Médica',
  mainSubtitle:
    'Mejora tu visibilidad en línea, gana la confianza de pacientes potenciales y destaca tu expertise con planes diseñados para profesionales de la salud.',
  plans: [
    {
      title: 'Plan Base',
      price: '$299 USD / mes',
      features: [
        'Gestión de redes sociales básicas',
        'Perfil optimizado en Google My Business',
        'Publicaciones semanales en redes sociales',
        'Reportes mensuales de alcance',
        'Asesoría inicial en marketing médico',
      ],
      popular: false,
      buttonText: 'Comenzar ahora',
    },
    {
      title: 'Plan Profesional',
      price: '$749 USD / mes',
      features: [
        'Estrategias segmentadas por especialidad',
        'Todo lo incluido en el Plan Base',
        'Campañas publicitarias orientadas a pacientes locales',
        'Diseño de landing page médica personalizada',
        'Análisis SEO y mejora de posicionamiento',
        'Soporte prioritario',
      ],
      popular: true,
      buttonText: 'Iniciar',
    },
    {
      title: 'Plan Premium',
      price: 'A convenir',
      features: [
        'Soluciones avanzadas y a medida',
        'Estrategias integrales de branding médico',
        'Gestión completa de reputación online',
        'Integración con CRM y sistemas internos',
        'Consultoría continua y formación de tu equipo',
      ],
      popular: false,
      buttonText: 'Contáctanos',
    },
  ],
};

// Contenido FAQ
const FAQ_CONTENT = {
  mainTitle: 'Preguntas Frecuentes',
  mainSubtitle:
    'Resuelve tus dudas sobre cómo nuestros servicios de marketing digital pueden ayudar a tu práctica médica a atraer más pacientes y mejorar tu reputación en línea.',
  faqs: [
    {
      question: '¿En qué consiste el servicio de marketing médico digital?',
      answer:
        'Nuestro servicio incluye el diseño de estrategias personalizadas para incrementar tu presencia online. Esto abarca optimización de tu sitio web, manejo profesional de redes sociales, campañas publicitarias enfocadas, gestión de reseñas, posicionamiento en motores de búsqueda y más.',
    },
    {
      question: '¿Cómo me ayuda a destacar frente a otros profesionales de la salud?',
      answer:
        'Construimos una identidad digital sólida, destacando tus especialidades, trayectoria y opiniones positivas. Con contenidos relevantes y estrategias de visibilidad específicas, te diferencias y refuerzas la confianza en tus servicios.',
    },
    {
      question: '¿Qué resultados puedo esperar?',
      answer:
        'Al mejorar tu presencia en línea, aumentarás el volumen de solicitudes de cita, atraerás pacientes de mayor calidad, consolidarás tu reputación y verás un crecimiento sostenible en tu práctica.',
    },
    {
      question: '¿Qué tipo de soporte ofrecen?',
      answer:
        'Ofrecemos acompañamiento integral: desde la planificación inicial hasta el análisis continuo. Recibirás informes mensuales, asesoramiento experto y soporte técnico para mantener tus canales optimizados.',
    },
    {
      question: '¿Puedo adaptar los planes a mi especialidad?',
      answer:
        'Sí, cada estrategia se ajusta a tu especialidad, ubicación y objetivos. Nuestro enfoque personalizado garantiza soluciones adecuadas para tu práctica.',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={PAGE_IMAGE} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PAGE_IMAGE} />

        {/* Datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />

        <link rel="canonical" href={PAGE_URL} />
      </Head>

      <Menu
        sections={[
          { label: 'Inicio', href: `#${SECTION_IDS.hero}` },
          { label: 'Enfoque', href: `#${SECTION_IDS.workApproach}` },
          { label: 'Credibilidad', href: `#${SECTION_IDS.credibility}` },
          { label: 'Planes', href: `#${SECTION_IDS.subscription}` },
          { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
          { label: 'Contacto', href: `#${SECTION_IDS.contact}` }, // Nuevo enlace de contacto
        ]}
      />

      {/* Contenido principal */}
      <main aria-label="Página principal de Synara">
        <section id={SECTION_IDS.hero} aria-label="Sección principal con información destacada">
          <HeroSection
            title={HERO_CONTENT.title}
            subtitle={HERO_CONTENT.subtitle}
            secondaryText={HERO_CONTENT.secondaryText}
          />
        </section>

        <section id={SECTION_IDS.workApproach} aria-label="Sección de Enfoque de Trabajo">
          <WorkApproachSection
            mainTitle={WORK_APPROACH_CONTENT.mainTitle}
            mainSubtitle={WORK_APPROACH_CONTENT.mainSubtitle}
            features={WORK_APPROACH_CONTENT.features}
          />
        </section>

        <section id={SECTION_IDS.credibility} aria-label="Sección de Credibilidad y Resultados Comprobados">
          <CredibilitySection
            title={CREDIBILITY_CONTENT.title}
            subtitle={CREDIBILITY_CONTENT.subtitle}
            cards={CREDIBILITY_CONTENT.cards}
          />
        </section>

        <section id={SECTION_IDS.subscription} aria-label="Sección de Planes de Suscripción">
          <SubscriptionPlansSection
            mainTitle={PLANS_CONTENT.mainTitle}
            mainSubtitle={PLANS_CONTENT.mainSubtitle}
            plans={PLANS_CONTENT.plans}
          />
        </section>

        <section id={SECTION_IDS.faq} aria-label="Sección de Preguntas Frecuentes">
          <FAQSection
            mainTitle={FAQ_CONTENT.mainTitle}
            mainSubtitle={FAQ_CONTENT.mainSubtitle}
            faqs={FAQ_CONTENT.faqs}
          />
        </section>
      </main>

      {/* Pie de página (Contacto) */}
      <footer id={SECTION_IDS.contact} aria-label="Sección de Contacto y Pie de Página">
        <Footer />
      </footer>
    </>
  );
}
