import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DWmL8OAAwTx/",
    thumbnail: "/assets/reels/reel-1.jpg",
    alt: "Customer review reel 1",
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DWoKyINCnG0/",
    thumbnail: "/assets/reels/reel-2.jpg",
    alt: "Customer review reel 2",
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DWqmoSngWlR/",
    thumbnail: "/assets/reels/reel-3.jpg",
    alt: "Customer review reel 3",
  },
  {
    id: 4,
    url: "https://www.instagram.com/p/DWvfnT9ABT5/",
    thumbnail: "/assets/reels/reel-4.jpg",
    alt: "Customer review reel 4",
  },
  {
    id: 5,
    url: "https://www.instagram.com/p/DW_9F8VCnMm/",
    thumbnail: "/assets/reels/reel-5.jpg",
    alt: "Customer review reel 5",
  },
];

export function InstagramReelsSection() {
  return (
    <section id="reels" className="py-12 md:py-16 bg-[#FFF5E4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#D93423] mb-2">
              Real customers, real moments
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C0A00] mb-3">
              See what people are saying
            </h2>
            <p className="text-[#6B3A2A] text-base max-w-xl mx-auto">
              Fresh food, honest reactions — straight from our customers on Instagram.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {reels.map((reel, i) => (
            <ScrollReveal key={reel.id} delay={i * 60}>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[9/16] rounded-2xl overflow-hidden bg-[#3D1A00] cursor-pointer"
                aria-label={`Watch reel on Instagram: ${reel.alt}`}
              >
                {/* Thumbnail */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-70" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                    {/* Triangle play icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-[#D93423] translate-x-0.5"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Instagram logo bottom-right */}
                <div className="absolute bottom-2.5 right-2.5 opacity-70 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Follow CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/lehsun.london/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D93423] hover:text-[#B82B1C] transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @lehsun.london for daily food videos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
