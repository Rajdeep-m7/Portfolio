export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-label-mono text-meta-caption uppercase tracking-widest text-primary font-semibold">
        {children}
      </span>
      <div className="label-line h-px w-12 bg-primary/40" aria-hidden="true" />
    </div>
  );
}
