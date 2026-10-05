import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ZentiaNexus from "@/components/ZentiaNexus";
import Dietiya from "@/components/Dietiya";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <WhyUs />
        <ZentiaNexus />
        <Dietiya />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
