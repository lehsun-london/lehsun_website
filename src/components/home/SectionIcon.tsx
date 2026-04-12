import React from "react";

type SectionIconName =
  | "spark"
  | "gathering"
  | "badge"
  | "menu"
  | "message"
  | "delivery"
  | "star"
  | "plate"
  | "bespoke"
  | "location";

const iconRegistry: Record<SectionIconName, (className: string) => React.ReactElement> = {
  spark: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M12 3.8c1 2.2 2.8 4 5 5-2.2 1-4 2.8-5 5-1-2.2-2.8-4-5-5 2.2-1 4-2.8 5-5Z" fill="currentColor" />
      <path d="M6 13.8c.5 1.2 1.4 2.1 2.6 2.6-1.2.5-2.1 1.4-2.6 2.6-.5-1.2-1.4-2.1-2.6-2.6 1.2-.5 2.1-1.4 2.6-2.6Z" fill="currentColor" opacity=".72" />
      <path d="M18 14.3c.5 1.2 1.5 2.2 2.7 2.7-1.2.5-2.2 1.5-2.7 2.7-.5-1.2-1.5-2.2-2.7-2.7 1.2-.5 2.2-1.5 2.7-2.7Z" fill="currentColor" opacity=".72" />
    </svg>
  ),
  gathering: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 18.4c.6-2.6 2.6-4 5.6-4s5 1.4 5.7 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M14.4 18.4c.4-1.6 1.7-2.6 3.8-2.6 1 0 1.9.2 2.6.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  badge: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="m12 3 2.3 2.1 3.1-.3 1.5 2.7 3 1-1 3 1 3-3 1-1.5 2.7-3.1-.3L12 21l-2.3-2.1-3.1.3L5 16.5l-3-1 1-3-1-3 3-1 1.5-2.7 3.1.3L12 3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="m8.8 12.3 2.1 2.1 4.4-4.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  menu: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <rect x="5" y="4" width="14" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  message: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M6.2 18.4 4.5 20l.6-3A7.3 7.3 0 1 1 19.3 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.5 10.3h7M8.5 13.8h4.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  delivery: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M3.5 7.5h10v7h-10zM13.5 10.5h3l2 2.2v1.8h-5z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.2" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="17.5" r="1.7" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  star: (className) => (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="m12 3.8 2.5 5.1 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.8Z" />
    </svg>
  ),
  plate: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  bespoke: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M6.8 18.3c4.8-5.1 8.5-7.8 11.2-8.1-1.2 3-3.9 6.8-8.1 11.2H5.7v-4.2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M12 8.2c1.8-.8 3.7-1 5.8-.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  ),
  location: (className) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M12 2.5c3.5 0 6.3 2.8 6.3 6.3 0 4.6-6.3 12.5-6.3 12.5S5.7 13.4 5.7 8.8c0-3.5 2.8-6.3 6.3-6.3Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="8.8" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
};

export function SectionIcon({
  name,
  className = "size-5",
}: {
  name: SectionIconName;
  className?: string;
}) {
  return iconRegistry[name](className);
}
