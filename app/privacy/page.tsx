import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Kitunga | NTEMO Consulting",
  description:
    "Politique de confidentialité de l'application Kitunga, éditée par NTEMO Consulting : données collectées, utilisation, partage et suppression.",
};

const CONTACT_EMAIL = "contact@ntemoconsulting.com";
const UPDATED = "22 novembre 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading font-bold uppercase text-[#0a1d6e] text-lg md:text-xl mb-3">{title}</h2>
      <div className="space-y-3 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1.5 marker:text-[#2488cd]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen pt-32 md:pt-36 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <article className="max-w-3xl mx-auto bg-white px-6 sm:px-10 md:px-14 py-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2488cd] mb-3">
              Application Kitunga
            </p>
            <h1 className="font-heading font-black italic uppercase text-[#0a1d6e] text-3xl md:text-4xl leading-tight">
              Politique de confidentialité
            </h1>
            <p className="mt-3 text-sm text-slate-500">Dernière mise à jour : {UPDATED}</p>

            <p className="mt-8 text-slate-700 leading-relaxed">
              Cette politique explique quelles données personnelles l&apos;application <strong>Kitunga</strong> collecte,
              pourquoi elle les collecte, avec qui elles sont partagées et comment vous pouvez les faire supprimer.
            </p>

            <Section title="1. Qui sommes-nous">
              <p>
                Kitunga est une marketplace de livraison à domicile à Brazzaville, développée et éditée par{" "}
                <strong>NTEMO Consulting</strong>, Avenue CEMAC, MPILA zone industrielle Ouenzé, Brazzaville
                (République du Congo). NTEMO Consulting est responsable du traitement de vos données.
              </p>
            </Section>

            <Section title="2. Données que nous collectons">
              <List
                items={[
                  <>
                    <strong>Identité et compte</strong> : nom, adresse e-mail, numéro de téléphone, identifiants de
                    connexion et photo de profil si vous en ajoutez une.
                  </>,
                  <>
                    <strong>Livraison</strong> : adresse de livraison et, si vous l&apos;autorisez, la localisation de
                    votre appareil.
                  </>,
                  <>
                    <strong>Commandes</strong> : articles commandés, boutiques choisies, montants et historique des
                    commandes.
                  </>,
                  <>
                    <strong>Paiement</strong> : numéro Mobile Money utilisé et statut du paiement. Nous ne recevons ni ne
                    conservons votre code secret Mobile Money.
                  </>,
                ]}
              />
            </Section>

            <Section title="3. Pourquoi nous les utilisons">
              <List
                items={[
                  "Créer et gérer votre compte, et enregistrer vos paniers.",
                  "Traiter vos commandes et les transmettre aux boutiques, restaurants et pharmacies concernés.",
                  "Organiser la livraison à l'adresse indiquée.",
                  "Traiter vos paiements Mobile Money (MTN MoMo, Airtel Money).",
                  "Vous contacter au sujet d'une commande et répondre à vos demandes d'assistance.",
                  "Assurer la sécurité de l'application et prévenir la fraude.",
                ]}
              />
            </Section>

            <Section title="4. Localisation">
              <p>
                La localisation de votre appareil est utilisée uniquement pour renseigner votre adresse de livraison et
                faciliter le travail du livreur, et seulement si vous l&apos;autorisez. Vous pouvez retirer cette
                autorisation à tout moment dans les réglages de votre téléphone ; vous pourrez alors saisir votre
                adresse manuellement.
              </p>
            </Section>

            <Section title="5. Avec qui nous partageons vos données">
              <p>Vos données ne sont partagées qu&apos;avec les acteurs nécessaires au fonctionnement du service :</p>
              <List
                items={[
                  "Les boutiques, restaurants et pharmacies partenaires auprès desquels vous commandez, pour préparer votre commande.",
                  "Les livreurs, pour vous livrer (nom, téléphone et adresse de livraison).",
                  "Les opérateurs et prestataires de paiement Mobile Money, pour traiter vos paiements.",
                  "Google Firebase, qui héberge les données de l'application et gère l'authentification.",
                  "Google Maps, pour l'affichage de la carte et la localisation de l'adresse de livraison.",
                ]}
              />
              <p>
                <strong>Nous ne vendons jamais vos données</strong> et nous ne les utilisons pas pour de la publicité
                ciblée.
              </p>
            </Section>

            <Section title="6. Durée de conservation">
              <p>
                Vos données sont conservées tant que votre compte est actif. Lorsque vous supprimez votre compte depuis
                l&apos;application, votre profil, vos coordonnées, votre photo et vos paniers sont effacés
                immédiatement et définitivement (voir la section 8). Seules les informations que la loi nous oblige à
                conserver, comme les justificatifs de transactions, sont gardées pendant la durée légale requise.
              </p>
            </Section>

            <Section title="7. Sécurité">
              <p>
                Vos données sont stockées sur des serveurs sécurisés et transmises de manière chiffrée. L&apos;accès
                est limité aux personnes et prestataires qui en ont besoin pour assurer le service.
              </p>
            </Section>

            <Section title="8. Vos droits et la suppression de votre compte">
              <p>
                Vous pouvez à tout moment accéder à vos données, les corriger ou supprimer votre compte et les données
                associées.
              </p>

              <h3 className="font-heading font-bold text-[#0a1d6e] pt-2">
                Supprimer votre compte depuis l&apos;application
              </h3>
              <p>
                Vous pouvez supprimer votre compte vous-même, directement dans Kitunga, en allant dans{" "}
                <strong>Profil › Paramètres › Supprimer mon compte</strong>. La suppression se déroule ainsi :
              </p>
              <ol className="list-decimal pl-6 space-y-2 marker:text-[#2488cd] marker:font-semibold">
                <li>
                  <strong>Confirmation.</strong> Une fenêtre « Supprimer mon compte » s&apos;affiche avec
                  l&apos;avertissement suivant : « Cette action est définitive. Votre profil, vos coordonnées, votre
                  photo et vos paniers seront effacés, et vous ne pourrez plus vous connecter avec ce compte. »
                </li>
                <li>
                  <strong>Vérification de votre identité.</strong> Pour éviter toute suppression par erreur ou par un
                  tiers, vous devez saisir votre mot de passe, qui est vérifié de manière sécurisée.
                </li>
                <li>
                  <strong>Effacement de vos données.</strong> Dès votre confirmation, votre profil, vos coordonnées,
                  votre photo de profil et vos paniers sont définitivement effacés de nos serveurs, puis votre compte
                  de connexion est supprimé.
                </li>
                <li>
                  <strong>Fin de session.</strong> Vous êtes immédiatement déconnecté et redirigé vers l&apos;écran
                  d&apos;accueil, où le message « Votre compte a été supprimé. » confirme l&apos;opération.
                </li>
              </ol>
              <p>
                La suppression est immédiate et ne peut pas être annulée : vous ne pourrez plus vous connecter avec ce
                compte. Pour utiliser à nouveau Kitunga, il faudra créer un nouveau compte.
              </p>

              <h3 className="font-heading font-bold text-[#0a1d6e] pt-2">Autres demandes</h3>
              <p>
                Si vous ne pouvez plus accéder à l&apos;application, ou pour toute autre demande concernant vos données
                (accès, correction), écrivez-nous à{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2488cd] underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>{" "}
                avec l&apos;objet « Données personnelles Kitunga », en indiquant l&apos;adresse e-mail ou le numéro de
                téléphone lié à votre compte. Nous vous répondons dans un délai de 30 jours.
              </p>
            </Section>

            <Section title="9. Enfants">
              <p>
                Kitunga n&apos;est pas destinée aux enfants de moins de 13 ans, et nous ne collectons pas sciemment
                leurs données.
              </p>
            </Section>

            <Section title="10. Modifications">
              <p>
                Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de cette
                page ; en cas de changement important, nous vous en informerons dans l&apos;application.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Pour toute question sur cette politique ou sur vos données :{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2488cd] underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            <p className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500">
              <Link href="/realisations/kitunga" className="text-[#2488cd] underline underline-offset-2">
                En savoir plus sur Kitunga
              </Link>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
