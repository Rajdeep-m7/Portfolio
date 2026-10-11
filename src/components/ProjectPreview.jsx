import { previews } from "@/data/portfolio";
import Icon from "./Icon";

// Decorative UI sketches for the featured projects. Hidden from assistive tech
// and labelled as illustrative so they are never mistaken for real data.

function Storefront() {
  const data = previews.storefront;
  return (
    <div className="bg-surface-container-low rounded-xl border border-outline-variant p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-outline-variant mb-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-body-md font-semibold text-on-surface">{data.title}</span>
          <span className="font-label-mono text-meta-caption px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold">
            {data.badge}
          </span>
        </div>
        <div className="flex items-center gap-3 font-label-mono text-meta-caption text-secondary">
          <span className="flex items-center gap-1">
            <Icon name="bag" size={16} /> {data.meta[0]}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="lock" size={16} /> {data.meta[1]}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {data.products.map((product) => (
          <div key={product.name} className="p-3 bg-surface rounded-lg border border-outline-variant">
            <div className="h-24 w-full bg-surface-container rounded mb-2 flex items-center justify-center text-outline">
              <Icon name={product.icon} size={32} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-body-sm font-medium text-on-surface truncate">{product.name}</p>
                <p className="font-label-mono text-meta-caption text-primary font-semibold">{product.price}</p>
              </div>
              <span className="p-1 rounded bg-surface-container text-primary">
                <Icon name="add_cart" size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded bg-surface border border-outline-variant font-label-mono text-meta-caption flex flex-wrap items-center justify-between gap-2 text-secondary">
        <span>{data.footerLeft}</span>
        <span className="text-primary font-semibold">{data.footerRight}</span>
      </div>
    </div>
  );
}

function Chat() {
  const data = previews.chat;
  return (
    <div className="bg-surface-container-low rounded-xl border border-outline-variant p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-outline-variant mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-mono text-meta-caption font-semibold text-on-surface">{data.channel}</span>
        </div>
        <span className="font-label-mono text-meta-caption text-secondary">{data.status}</span>
      </div>
      <div className="space-y-2">
        {data.messages.map((message) => (
          <div
            key={message.from}
            className={`p-2 rounded text-body-sm max-w-[85%] ${
              message.mine
                ? "bg-primary-fixed text-on-primary-fixed ml-auto"
                : "bg-surface border border-outline-variant text-on-surface"
            }`}
          >
            <span
              className={`font-label-mono text-meta-caption block ${
                message.mine ? "text-on-primary-fixed-variant" : "text-primary"
              }`}
            >
              {message.from}
            </span>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function Admin() {
  const data = previews.admin;
  return (
    <div className="bg-surface-container-low rounded-xl border border-outline-variant p-4">
      <div className="grid grid-cols-4 gap-2 pb-2 border-b border-outline-variant mb-2 font-label-mono text-meta-caption text-secondary">
        {data.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      <div className="space-y-1.5 font-label-mono text-meta-caption">
        {data.rows.map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-4 gap-2 p-1.5 bg-surface rounded border border-outline-variant"
          >
            <span className="text-on-surface font-semibold">{row[0]}</span>
            <span className="text-secondary">{row[1]}</span>
            <span className="text-primary font-semibold">{row[2]}</span>
            <span className="text-primary font-semibold">{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const views = { storefront: Storefront, chat: Chat, admin: Admin };

export default function ProjectPreview({ kind }) {
  const View = views[kind];
  if (!View) return null;
  return (
    <div aria-hidden="true">
      <View />
      <p className="mt-2 font-label-mono text-meta-caption text-secondary">
        Illustrative interface preview
      </p>
    </div>
  );
}
