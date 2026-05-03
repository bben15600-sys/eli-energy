import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";

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
