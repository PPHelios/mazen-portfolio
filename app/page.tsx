import { navItems } from "@/data";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Suspense } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
        <Suspense>
          <Hero />
        </Suspense>
        <Products />
      <Contact />
      <Footer />
    </div>
  );
}
