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
  /** Google Play listing. TODO: replace the search URLs with the real store links. */
  playStoreUrl?: string;
};

export const realisationsData: Record<string, Realisation> = {
  kitunga: {
    title: "Kitunga",
    category: "Application mobile · Android",
    subtitle: "Faites vos achats en ligne, simplement",
    description:
      "Kitunga est une application d'achat en ligne qui permet de parcourir des produits, de remplir son panier et de passer commande directement depuis son téléphone.",
    features: [
      "Catalogue de produits facile à parcourir",
      "Panier et commande en quelques étapes",
      "Interface pensée pour le mobile",
    ],
    image: "/LOGO-1-APPLI.png",
    tint: "from-[#fff1f1] to-[#f3f4f6]",
    status: "live",
    playStoreUrl: "https://play.google.com/store/search?q=Kitunga&c=apps",
  },
  "mobembo-line": {
    title: "Mobembo-Line",
    category: "Application mobile · Android",
    subtitle: "Vente & achat de tickets de bus",
    description:
      "Mobembo-Line permet d'acheter et de vendre des tickets de bus au Congo directement depuis son téléphone, sans passer par le guichet.",
    features: [
      "Recherche de trajets et de départs",
      "Achat de tickets depuis le téléphone",
      "Ticket toujours disponible dans l'application",
    ],
    image: "/LOGO-2.jpeg",
    tint: "from-[#f1faea] to-[#fffbe6]",
    status: "live",
    playStoreUrl: "https://play.google.com/store/search?q=Mobembo-Line&c=apps",
  },
};

export const realisationSlugs = Object.keys(realisationsData);
