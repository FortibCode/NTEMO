import ServiceContent from "./ServiceContent";

export function generateStaticParams() {
  return [
    { slug: "publicite-reseaux-sociaux" },
    { slug: "animation-page-pro" },
    { slug: "referencement-naturel-seo" },
    { slug: "google-adwords" },
    { slug: "creation-site-web" },
    { slug: "creation-application-mobile" },
    { slug: "site-responsive-mobile" },
  ];
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServiceContent params={params} />;
}
