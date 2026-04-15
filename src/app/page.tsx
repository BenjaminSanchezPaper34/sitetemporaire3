"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Occasions from "@/components/home/Occasions";
import Brands from "@/components/home/Brands";
import Trust from "@/components/home/Trust";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import CTA from "@/components/home/CTA";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Categories />
      <Occasions />
      <Trust />
      <Brands />
      <Testimonials />
      <Location />
      <CTA />
    </>
  );
}
