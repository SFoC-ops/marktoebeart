// Fixed, pointer-events: none grain texture that sits above the page background.
// Uses an inline SVG turbulence filter so there's no network cost and no image
// asset to manage. Respects prefers-reduced-motion via globals.css.
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-overlay opacity-[0.08]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>\")",
        backgroundSize: "200px 200px",
      }}
    />
  );
}
