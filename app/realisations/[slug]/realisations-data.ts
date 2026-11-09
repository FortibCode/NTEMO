export type Realisation = {
  title: string;
  category: string;
  /** Short line shown under the title */
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  /** Light tint behind the logo (the logos have white backgrounds) */
  tint: string;
  status: "live" | "production";
  /** Google Play listing */
  playStoreUrl?: string;
};

export const realisationsData: Record<string, Realisation> = {
  kitunga: {
    title: "Kitunga",
    category: "Application mobile · Android",
    subtitle: "Marketplace de livraison à domicile à Brazzaville",
    description:
      "Kitunga permet de commander auprès de boutiques, restaurants, pharmacies et magasins partenaires, puis de se faire livrer directement chez soi à Brazzaville.",
    features: [
      "Boutiques, restaurants, pharmacies et magasins partenaires",
      "Panier et commande en quelques étapes",
      "Paiement via Mobile Money (MTN MoMo, Airtel Money)",
      "Livraison à l'adresse indiquée, partout à Brazzaville",
    ],
    image: "/LOGO-1-APPLI.png",
    tint: "from-[#fff1f1] to-[#f3f4f6]",
    status: "live",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ntemoconsulting.kitunga",
  },
  "mobembo-line": {
    title: "Mobembo-Line",
    category: "Application mobile · Android",
    subtitle: "Réservation de billets de voyage au Congo",
    description:
      "Mobembo-Line réunit les agences de voyage partenaires sur une seule plateforme : on compare les départs, on réserve et on paie son billet depuis son téléphone, sans passer par le guichet.",
    features: [
      "Horaires et prix de plusieurs agences comparés",
      "Réservation et paiement sécurisé en quelques clics",
      "Billet électronique reçu directement dans l'application",
      "Brazzaville, Pointe-Noire, Dolisie, Nkayi, Owando, Ouesso…",
    ],
    image: "/LOGO-2.jpeg",
    tint: "from-[#f1faea] to-[#fffbe6]",
    status: "live",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobemboline.mobile",
  },
};

export const realisationSlugs = Object.keys(realisationsData);
