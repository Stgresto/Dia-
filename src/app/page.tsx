import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AICoach from "@/components/AICoach";
import Community from "@/components/Community";
import Shop from "@/components/Shop";
import Education from "@/components/Education";
import Pricing from "@/components/Pricing";
import Story from "@/components/Story";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AICoach />
        <Community />
        <Shop />
        <Education />
        <Pricing />
        <Story />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
