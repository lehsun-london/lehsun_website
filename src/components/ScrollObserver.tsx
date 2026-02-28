"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      rootMargin: "0px 0px -100px 0px", // Trigger slightly before it comes into full view
      threshold: 0.1,
    });

    // Find all elements with the 'revealOnScroll' class
    const elements = document.querySelectorAll(".revealOnScroll");
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // This component doesn't render any DOM itself
  return null;
}
