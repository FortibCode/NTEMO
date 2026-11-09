import RealisationContent from "./RealisationContent";
import { realisationSlugs } from "./realisations-data";

export function generateStaticParams() {
  return realisationSlugs.map((slug) => ({ slug }));
}

export default function RealisationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <RealisationContent params={params} />;
}
