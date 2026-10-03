import { ArrowRight } from "lucide-react";
import type { ArchitectureFlow } from "@/data/projects";

export default function ArchitectureDiagram({ flow }: { flow: ArchitectureFlow }) {
  return (
    <div className="w-full">
      <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <span className="text-xs uppercase tracking-wider text-neutral-600 block mb-4">
          Data & Request Pipeline
        </span>

        <ol className="flex flex-wrap items-center gap-3">
          {flow.nodes.map((node, i) => (
            <li key={node} className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 rounded-sm border border-neutral-300 bg-white px-3.5 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-mono font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-mono text-xs font-semibold text-black tracking-tight">
                  {node}
                </span>
              </div>
              {i < flow.nodes.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
