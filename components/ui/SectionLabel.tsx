export default function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="label-mono text-accent-tech">{index}</span>
      <span className="h-px w-8 bg-border-muted" />
      <span className="label-mono">{label}</span>
    </div>
  );
}
