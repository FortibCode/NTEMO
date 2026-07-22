import RealisationContent from "./RealisationContent";

export function generateStaticParams() {
  return [
    { slug: "projet-1" },
    { slug: "projet-2" },
    { slug: "projet-3" },
    { slug: "projet-4" },
    { slug: "projet-5" },
  ];
}

export default function RealisationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <RealisationContent params={params} />;
}
