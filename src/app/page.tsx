import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Program } from "@/sections/Program";
import { Advantages } from "@/sections/Advantages";
import { Contact } from "@/sections/Contact";
import { InfoStrip } from "@/components/features/InfoStrip";

export default function Page() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <About />
      <Program />
      <Advantages />
      <Contact />
    </>
  );
}
