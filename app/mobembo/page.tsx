import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Mobembo Line | NTEMO Consulting",
  description:
    "Politique de confidentialité de l'application Mobembo Line, éditée par NTEMO Consulting : données collectées, utilisation, partage et suppression du compte.",
};

const CONTACT_EMAIL = "contact@ntemoconsulting.com";
const UPDATED = "28 novembre 2026";
const DELETE_PAGE = "https://mobembo-line.site/suppression-compte";

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

function Mail() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2488cd] underline underline-offset-2">
      {CONTACT_EMAIL}
    </a>
  );
}

export default function MobemboPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen pt-32 md:pt-36 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <article className="max-w-3xl mx-auto bg-white px-6 sm:px-10 md:px-14 py-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2488cd] mb-3">
              Application Mobembo Line
            </p>
            <h1 className="font-heading font-black italic uppercase text-[#0a1d6e] text-3xl md:text-4xl leading-tight">
              Politique de confidentialité
            </h1>
            <p className="mt-3 text-sm text-slate-500">Dernière mise à jour : {UPDATED}</p>

            <p className="mt-8 text-slate-700 leading-relaxed">
              Cette politique explique quelles données personnelles l&apos;application <strong>Mobembo Line</strong>{" "}
              collecte, pourquoi elle les collecte, avec qui elles sont partagées et comment vous pouvez supprimer votre
              compte et vos données.
            </p>

            <Section title="1. Qui sommes-nous">
              <p>
                Mobembo Line permet de réserver et de payer des billets de bus auprès d&apos;agences de transport
                partenaires en République du Congo. L&apos;application est développée et éditée par{" "}
                <strong>NTEMO Consulting</strong>, Avenue CEMAC, MPILA zone industrielle Ouenzé, Brazzaville
                (République du Congo), qui est responsable du traitement de vos données.
              </p>
            </Section>

            <Section title="2. Données que nous collectons">
              <List
                items={[
                  <>
                    <strong>Compte</strong> : nom, prénom, numéro de téléphone et mot de passe. Le mot de passe est
                    enregistré sous forme chiffrée et n&apos;est jamais lisible, y compris par nos équipes.
                  </>,
                  <>
                    <strong>Réservations</strong> : nom des passagers, catégorie (adulte ou enfant, et âge de
                    l&apos;enfant), trajet, date, siège et référence du billet.
                  </>,
                  <>
                    <strong>Paiements</strong> : opérateur (MTN Mobile Money ou Airtel Money), numéro utilisé pour
                    payer, montant et référence de la transaction. Votre code secret Mobile Money est saisi sur votre
                    téléphone, auprès de l&apos;opérateur : l&apos;application n&apos;y a jamais accès.
                  </>,
                  <>
                    <strong>Appareil photo</strong> : utilisé uniquement par les agents des agences pour scanner le QR
                    code des billets à l&apos;embarquement. Aucune photo n&apos;est enregistrée.
                  </>,
                ]}
              />
            </Section>

            <Section title="3. Pourquoi nous les utilisons">
              <List
                items={[
                  "Créer et sécuriser votre compte, notamment par un code de vérification envoyé par SMS ou par appel.",
                  "Réserver vos places, encaisser votre paiement et émettre vos billets électroniques.",
                  "Permettre à l'agence de vérifier votre billet à l'embarquement.",
                  "Tenir la comptabilité des ventes et respecter nos obligations légales.",
                  "Répondre à vos demandes d'assistance.",
                ]}
              />
            </Section>

            <Section title="4. Avec qui nous partageons vos données">
              <p>Vos données ne sont partagées qu&apos;avec les acteurs nécessaires au fonctionnement du service :</p>
              <List
                items={[
                  <>
                    <strong>L&apos;agence de transport</strong> que vous choisissez, qui reçoit les informations de vos
                    billets pour vous faire voyager.
                  </>,
                  <>
                    <strong>MTN et Airtel</strong>, pour traiter vos paiements Mobile Money.
                  </>,
                  <>
                    <strong>Twilio</strong>, pour envoyer le code de vérification par SMS ou par appel.
                  </>,
                  <>
                    <strong>Google Cloud et Firebase</strong>, pour l&apos;hébergement sécurisé du service.
                  </>,
                ]}
              />
              <p>
                <strong>Nous ne vendons jamais vos données</strong> et nous n&apos;affichons pas de publicité ciblée.
              </p>
            </Section>

            <Section title="5. Durée de conservation">
              <p>
                Les données de votre compte sont conservées tant que votre compte existe. Lorsque vous le supprimez, il
                est effacé immédiatement. Les billets déjà achetés sont conservés sans lien avec votre compte, pour
                permettre l&apos;embarquement et respecter nos obligations comptables.
              </p>
            </Section>

            <Section title="6. Sécurité">
              <p>
                Les échanges entre l&apos;application et nos serveurs sont chiffrés (HTTPS), les mots de passe sont
                stockés sous forme chiffrée, et chaque agence n&apos;a accès qu&apos;aux données de ses propres
                billets, uniquement pour son personnel.
              </p>
            </Section>

            <Section title="7. Vos droits et la suppression de votre compte">
              <p>
                Vous pouvez à tout moment accéder à vos données, les corriger ou supprimer votre compte et les données
                associées.
              </p>

              <h3 className="font-heading font-bold text-[#0a1d6e] pt-2">
                Supprimer votre compte depuis l&apos;application
              </h3>
              <p>
                Vous pouvez supprimer votre compte vous-même, directement dans Mobembo Line, en allant dans{" "}
                <strong>Mon compte › Supprimer mon compte</strong>. Après confirmation, votre compte et ses données
                sont effacés immédiatement et définitivement, et vous êtes déconnecté. Cette action ne peut pas être
                annulée.
              </p>

              <h3 className="font-heading font-bold text-[#0a1d6e] pt-2">Supprimer votre compte depuis le web</h3>
              <p>
                Vous pouvez aussi demander la suppression de votre compte sans ouvrir l&apos;application, sur la page{" "}
                <a href={DELETE_PAGE} className="text-[#2488cd] underline underline-offset-2 break-all">
                  {DELETE_PAGE}
                </a>
                .
              </p>

              <h3 className="font-heading font-bold text-[#0a1d6e] pt-2">Autres demandes</h3>
              <p>
                Pour toute autre demande concernant vos données (accès, correction), écrivez-nous à <Mail /> avec
                l&apos;objet « Données personnelles Mobembo Line », en indiquant le numéro de téléphone lié à votre
                compte. Nous vous répondons dans un délai de 30 jours.
              </p>
            </Section>

            <Section title="8. Enfants">
              <p>
                Un compte Mobembo Line est réservé aux adultes. Un titulaire de compte peut réserver un billet pour un
                enfant voyageant avec lui : seuls son nom et son âge sont alors enregistrés, pour l&apos;émission du
                billet.
              </p>
            </Section>

            <Section title="9. Modifications">
              <p>
                Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de cette
                page ; en cas de changement important, nous vous en informerons dans l&apos;application.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Pour toute question sur cette politique ou sur vos données : <Mail />.
              </p>
            </Section>

            <p className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500">
              <Link href="/realisations/mobembo-line" className="text-[#2488cd] underline underline-offset-2">
                En savoir plus sur Mobembo Line
              </Link>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
