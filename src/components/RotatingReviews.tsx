"use client";

import { useState, useEffect } from "react";
import type { Review } from "@/content/site";

interface RotatingReviewsProps {
  reviews: Review[];
}

export function RotatingReviews({ reviews }: RotatingReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="reviewsSection revealOnScroll">
      <h2>What People Are Saying</h2>
      <div className="rotatingReviewsWrap">
        {reviews.map((review, index) => (
          <article
            key={index}
            className={`reviewCard ${index === activeIndex ? "active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <div className="reviewStars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="reviewText">&quot;{review.text}&quot;</p>
            <p className="reviewAuthor">&mdash; {review.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
