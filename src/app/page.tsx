import Background from "@/components/home/Background";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Navbar from "@/components/layout/Navbar";
import HowItWorks from "@/components/home/HowItWorks";
import WhyAthkar from "@/components/home/WhyAthkar";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <WhyAthkar />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}