import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { GrainOverlay } from "@/components/grain-overlay";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <GrainOverlay />
      <Nav />
      <main id="main" className="relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
