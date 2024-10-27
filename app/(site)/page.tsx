import { Metadata } from "next";
import Hero from "@/components/Site/Hero";
import Brands from "@/components/Site/Brands";
import Feature from "@/components/Site/Features";
import About from "@/components/Site/About";
import FeaturesTab from "@/components/Site/FeaturesTab";
import FunFact from "@/components/Site/FunFact";
import Integration from "@/components/Site/Integration";
import CTA from "@/components/Site/CTA";
import FAQ from "@/components/Site/FAQ";
import Pricing from "@/components/Site/Pricing";
import Contact from "@/components/Site/Contact";
import Blog from "@/components/Site/Blog";
import Testimonial from "@/components/Site/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
