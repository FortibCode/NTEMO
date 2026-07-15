"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Structured data for each service
const SERVICES_DATA: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}> = {
  "publicite-reseaux-sociaux": {
    title: "Publicité Réseaux Sociaux",
    subtitle: "Boostez votre visibilité et convertissez votre audience cible",
    description: "Dans un paysage numérique ultra-connecté, la publicité sur les réseaux sociaux est le levier le plus puissant pour toucher directement vos clients potentiels. Nous concevons, paramétrons et optimisons vos campagnes publicitaires sur Facebook, Instagram, TikTok et LinkedIn afin de maximiser votre retour sur investissement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    features: [
      "Création de publicités visuelles et rédaction d'accroches percutantes (copywriting).",
      "Ciblage ultra-précis par centres d'intérêt, comportements et données démographiques.",
      "Mise en place de campagnes de reciblage (retargeting) pour reconquérir vos visiteurs.",
      "A/B Testing régulier des visuels et des audiences pour optimiser les performances.",
      "Rapports mensuels transparents et détaillés sur vos conversions et coûts par lead."
    ],
    benefits: [
      "Acquisition rapide de prospects qualifiés.",
      "Notoriété de marque accrue sur vos canaux stratégiques.",
      "Contrôle optimal de votre budget publicitaire.",
      "Augmentation directe de vos ventes en ligne."
    ]
  },
  "animation-page-pro": {
    title: "Animation Page Pro",
    subtitle: "Fédérez et engagez votre communauté au quotidien",
    description: "Vos réseaux sociaux sont la vitrine vivante de votre marque. Une page inactive ou mal gérée peut nuire à votre crédibilité. Notre service d'animation professionnelle prend en charge la planification, la création de contenus interactifs et la modération pour faire de vos pages un lieu d'échange dynamique et engageant.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    features: [
      "Élaboration d'une ligne éditoriale sur mesure et calendrier de publication mensuel.",
      "Création graphique de visuels professionnels (images, carrousels, stories).",
      "Rédaction de publications engageantes adaptées au ton de votre marque.",
      "Gestion de la modération (réponses aux commentaires et messages privés).",
      "Veille active sur les tendances de votre secteur pour rester innovant."
    ],
    benefits: [
      "Gain de temps précieux pour vos équipes.",
      "Fidélisation client renforcée par l'interaction.",
      "Image de marque professionnelle et harmonieuse.",
      "Amélioration de votre portée organique globale."
    ]
  },
  "referencement-naturel-seo": {
    title: "Référencement Naturel (SEO)",
    subtitle: "Dominez les résultats de recherche Google de façon durable",
    description: "Apparaître en première page de Google est le moyen le plus efficace d'obtenir des visites qualifiées continues sans payer à chaque clic. Nous analysons l'architecture de votre site, optimisons vos contenus et renforçons votre autorité en ligne pour attirer un trafic organique prêt à acheter.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    features: [
      "Audit technique SEO complet de votre site internet (vitesse, responsive, structure).",
      "Recherche approfondie de mots-clés stratégiques à fort volume de recherche.",
      "Optimisation sémantique on-page (balises, images, hiérarchie de titres).",
      "Création de contenus optimisés (articles de blog thématiques).",
      "Stratégie de netlinking (obtention de backlinks de qualité pour booster l'autorité)."
    ],
    benefits: [
      "Trafic qualifié régulier et pérenne sur le long terme.",
      "Crédibilité et confiance renforcées auprès des internautes.",
      "Meilleure rentabilité par rapport aux canaux publicitaires payants.",
      "Expérience utilisateur globale optimisée (Core Web Vitals)."
    ]
  },
  "google-adwords": {
    title: "Google AdWords",
    subtitle: "Captez vos clients au moment exact où ils recherchent vos services",
    description: "Contrairement aux réseaux sociaux, Google Search affiche vos annonces devant des personnes qui recherchent activement ce que vous vendez. Nous configurons et gérons vos campagnes Google Ads pour cibler les mots-clés les plus pertinents et générer des conversions immédiates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Ciblage rigoureux de mots-clés d'intention d'achat.",
      "Rédaction d'annonces textuelles hautement persuasives.",
      "Optimisation des pages de destination (Landing Pages) pour maximiser le taux de conversion.",
      "Gestion des enchères en temps réel pour réduire votre coût par clic (CPC).",
      "Suivi analytique précis des appels et formulaires remplis issus des annonces."
    ],
    benefits: [
      "Visibilité instantanée en tête des résultats de recherche.",
      "Génération immédiate de leads et d'appels téléphoniques.",
      "Excellent contrôle et ajustement instantané des budgets.",
      "Ciblage géographique extrêmement précis."
    ]
  },
  "creation-site-web": {
    title: "Création Site Web",
    subtitle: "Conception de sites performants, esthétiques et optimisés",
    description: "Votre site web est le cœur de votre stratégie digitale. Nous créons des sites vitrines et e-commerce modernes, ergonomiques et entièrement pensés pour la conversion. Du design personnalisé à l'intégration technique, nous construisons une interface fluide qui reflète parfaitement vos valeurs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    features: [
      "Webdesign UX/UI sur mesure et chartes graphiques modernes.",
      "Développement rapide, propre et sécurisé (Next.js, React, WordPress).",
      "Optimisation native pour le référencement naturel (structure SEO friendly).",
      "Intégration d'outils d'analyses (Google Analytics, Pixels de conversion).",
      "Formation pour une gestion de contenu autonome en fin de projet."
    ],
    benefits: [
      "Identité de marque forte et impactante en ligne.",
      "Expérience utilisateur fluide sur tous les supports.",
      "Sécurité et rapidité de chargement optimales.",
      "Structure évolutive selon la croissance de votre activité."
    ]
  },
  "creation-application-mobile": {
    title: "Création Application Mobile",
    subtitle: "Offrez une expérience utilisateur immersive directement sur smartphone",
    description: "Le mobile est aujourd'hui le canal d'interaction privilégié. Nous développons des applications mobiles iOS et Android performantes, intuitives et fluides. Nous vous accompagnons de la phase de conception ergonomique jusqu'à la publication sur l'App Store et Google Play Store.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    features: [
      "Architecture ergonomique de l'application (wireframes et maquettes interactives).",
      "Développement cross-platform (React Native/Flutter) pour optimiser les coûts.",
      "Intégration d'API tierces, de systèmes de paiement sécurisés et de notifications push.",
      "Tests intensifs sur de multiples appareils pour garantir la stabilité.",
      "Soumission, validation et suivi de publication sur les stores officiels."
    ],
    benefits: [
      "Canal de fidélisation et de communication directe avec vos clients.",
      "Expérience utilisateur plus rapide et native.",
      "Accès aux fonctionnalités matérielles (GPS, caméra, notifications).",
      "Valorisation technologique majeure de votre entreprise."
    ]
  },
  "site-responsive-mobile": {
    title: "Site Responsive/Mobile",
    subtitle: "Adaptez parfaitement votre présence en ligne à tous les écrans",
    description: "Plus de 60% du trafic web s'effectue désormais sur mobile. Un site non optimisé est synonyme de perte immédiate de clients. Nous retravaillons votre site web actuel pour en assurer une adaptabilité parfaite, une lisibilité irréprochable et un temps de chargement ultra-rapide sur smartphones et tablettes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    features: [
      "Audit d'adaptabilité et résolution des bugs d'affichage mobile.",
      "Optimisation des polices, images et boutons pour la navigation tactile.",
      "Accélération du temps de chargement sur les réseaux mobiles (3G/4G/5G).",
      "Simplification des tunnels de commande et formulaires pour le mobile.",
      "Tests de compatibilité multi-navigateurs mobiles (Safari, Chrome, Firefox)."
    ],
    benefits: [
      "Réduction drastique du taux de rebond mobile.",
      "Amélioration des conversions et des prises de contact.",
      "Meilleur classement sur Google grâce au Mobile-First Index.",
      "Confort d'utilisation et navigation intuitive garantis."
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-4">
          <h1 className="text-3xl font-black mb-4">Service non trouvé</h1>
          <p className="text-slate-400 mb-8">Désolé, ce service n'existe pas ou a été déplacé.</p>
          <Link href="/" className="flex items-center gap-2 bg-[#34c4eb] text-slate-900 px-6 py-3 rounded-full font-bold">
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        
        {/* Banner Hero */}
        <section className="relative py-20 overflow-hidden bg-[#0a192f] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#34c4eb]/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-[#34c4eb] hover:text-[#7fdbf5] mb-6 font-bold transition-colors">
              <ArrowLeft size={16} />
              Retour aux services
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed"
            >
              {service.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Column: Text & Features */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] font-heading mb-6">
                Pourquoi choisir notre expertise ?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
                {service.description}
              </p>

              <h3 className="text-xl font-black text-[#0a192f] font-heading mb-6">
                Nos actions clés pour votre succès :
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#34c4eb]/10 text-[#2488cd] flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-600 font-medium leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image & Benefits */}
            <div className="w-full lg:w-5/12 flex flex-col gap-10">
              <div className="relative h-[250px] md:h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Benefits box */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#34c4eb]" />
                <h3 className="text-lg font-black text-[#0a192f] font-heading mb-6">
                  Bénéfices constatés :
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#34c4eb]" />
                      <span className="text-slate-700 font-bold text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28">
          <div className="bg-[#0a192f] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#34c4eb]/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 leading-tight">
                Prêt à faire décoller vos conversions ?
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed">
                Contactez notre agence dès maintenant. Nos experts répondent à toutes vos questions et élaborent une proposition sur mesure.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 flex-shrink-0">
              <a 
                href="https://wa.me/242064313808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+242064313808" 
                className="flex items-center gap-3 bg-[#34c4eb] hover:bg-[#2488cd] text-slate-900 px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-[#34c4eb]/20"
              >
                <Phone size={20} />
                <span>Appel direct</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
