import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProtectedCVViewer from "@/components/cv/ProtectedCVViewer";

export const metadata: Metadata = {
  title: "Curriculum Vitae — G. M. Mozahad",
  description:
    "Interactive view-only curriculum vitae and resume for G. M. Mozahad covering Backend Systems Architecture, Forward-Deployed Engineering, and Academic Research.",
};

export default function CVPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader
        category="CURRICULUM VITAE"
        title="Curriculum Vitae & Resume"
        description="Interactive curriculum vitae and official PDF access covering Backend Systems Architecture, Forward-Deployed Engineering, and Academic Research. Download the updated professional CV (G_M_Mozahad_CV.pdf) or switch between interactive formats below."
      />

      <div className="pt-10">
        <ProtectedCVViewer />
      </div>
    </div>
  );
}
