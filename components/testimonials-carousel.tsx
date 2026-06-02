"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  role: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="px-2"
          >
            <blockquote className="text-center">
              <p className="text-2xl md:text-[27px] leading-tight font-serif text-[#2C2C2C] tracking-[-0.01em]">
                “{testimonials[current].quote}”
              </p>
              <footer className="mt-8 text-sm">
                <div className="font-medium text-[#334155]">{testimonials[current].name}</div>
                <div className="text-[#5A5A5A]">{testimonials[current].location} • {testimonials[current].role}</div>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          className="h-9 w-9 rounded-full border border-[#D4CFC4] flex items-center justify-center text-[#5A5A5A] hover:bg-white hover:text-[#334155] transition-colors"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current ? "w-8 bg-[#5F7A9E]" : "w-3 bg-[#D4CFC4] hover:bg-[#A89E8C]"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="h-9 w-9 rounded-full border border-[#D4CFC4] flex items-center justify-center text-[#5A5A5A] hover:bg-white hover:text-[#334155] transition-colors"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <p className="text-center text-xs text-[#8A877F] mt-10 max-w-md mx-auto">
        Testimonials are used with permission. Individual results vary. These stories are representative of the care and dedication we bring to every client relationship.
      </p>
    </div>
  );
}
