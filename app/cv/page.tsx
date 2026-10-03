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
        description="Interactive view-only access to my professional Forward-Deployed / Backend Engineering Resume and my Academic Research CV. Direct download, printing, and unauthorized screen extraction are restricted."
      />

      <div className="pt-10">
        <ProtectedCVViewer />
      </div>
    </div>
  );
}
