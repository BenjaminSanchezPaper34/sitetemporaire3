"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const hasInit = useRef(false);

  useEffect(() => {
    if (hasInit.current) return;
    hasInit.current = true;

    const elements = document.querySelectorAll("[data-reveal]");

    // Add reveal-ready class (hides elements) only after JS loads
    // This ensures content is visible if JS fails
    elements.forEach((el) => el.classList.add("reveal-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
