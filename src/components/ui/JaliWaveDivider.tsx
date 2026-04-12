/**
 * JaliWaveDivider — Lehsun's brand signature strip
 * Uses the actual /assets/generated/jali-wave.svg (vermillion bg, cream waves, teal + gold dots)
 * Placed between major page sections as a visual separator.
 */
export function JaliWaveDivider({ height = 48 }: { height?: number }) {
  return (
    <div
      aria-hidden
      style={{
        width: "100%",
        height: `${height}px`,
        backgroundImage: "url('/assets/generated/jali-wave.svg')",
        backgroundSize: `auto ${height}px`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        flexShrink: 0,
      }}
    />
  );
}
