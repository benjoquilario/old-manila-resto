import Hero from "@/components/section/hero";
import SiteHeader from "@/components/site-header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[62px]">
        <Hero />
      </main>
    </>
  );
}
