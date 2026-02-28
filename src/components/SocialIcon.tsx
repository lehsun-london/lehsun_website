type SocialIconProps = {
  label: string;
  className?: string;
};

export function SocialIcon({ label, className }: SocialIconProps) {
  const name = label.toLowerCase();

  if (name.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.9" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name.includes("facebook")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path
          d="M13.4 21v-7.5h2.6l.4-2.9h-3v-1.9c0-1 .3-1.6 1.7-1.6h1.4V4.5c-.2 0-1.1-.1-2.2-.1-2.4 0-4 1.4-4 4.2v2H8v2.9h2.3V21h3.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name.includes("whatsapp")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path
          d="M20.2 12a8.2 8.2 0 0 1-12.1 7.2L4 20.5l1.3-4A8.2 8.2 0 1 1 20.2 12Zm-5.5 2.5c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.5.1l-.6.8c-.2.2-.3.2-.6.1-1.8-.9-3-2.5-3.2-2.8-.2-.2 0-.3.1-.4l.4-.5c.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5l-.9-2.1c-.1-.3-.3-.2-.5-.2h-.5c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2 0 1.2.9 2.3 1 2.5.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4-.1-.1-.2-.2-.5-.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M14.7 4H20v5.3h-2V7.4l-5.5 5.5-1.4-1.4L16.6 6H14.7V4ZM5 6h5v2H7v9h9v-3h2v5H5V6Z"
        fill="currentColor"
      />
    </svg>
  );
}
