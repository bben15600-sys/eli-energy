import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
