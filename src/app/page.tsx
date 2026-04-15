"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import Hero from "@/components/home/Hero";
import Occasions from "@/components/home/Occasions";
import Categories from "@/components/home/Categories";
import Trust from "@/components/home/Trust";
import Brands from "@/components/home/Brands";
import Testimonials from "@/components/home/Testimonials";
import ConcessionPreview from "@/components/home/ConcessionPreview";
import Location from "@/components/home/Location";
import BlogPreview from "@/components/home/BlogPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Occasions />
      <Categories />
      <Trust />
      <Brands />
      <Testimonials />
      <ConcessionPreview />
      <BlogPreview />
      <Location />
      <CTA />
    </>
  );
}
