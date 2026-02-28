import { ReactNode } from "react";

type SectionShellProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

function slugifyTitle(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function SectionShell({ title, subtitle, className = "", children }: SectionShellProps) {
  const titleId = `${slugifyTitle(title)}-title`;

  return (
    <section className={`sectionShell ${className}`} aria-labelledby={titleId}>
      <div className="sectionHead">
        <h2 id={titleId}>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
