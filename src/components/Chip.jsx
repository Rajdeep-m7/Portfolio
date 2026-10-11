const tones = {
  surface: "bg-surface text-secondary",
  strong: "bg-surface text-on-surface",
  solid: "bg-surface-container-high text-on-surface",
};

export default function Chip({ children, tone = "strong", as: Tag = "li" }) {
  return (
    <Tag
      className={`px-2.5 py-1 rounded border border-outline-variant font-label-mono text-meta-caption ${tones[tone]}`}
    >
      {children}
    </Tag>
  );
}
