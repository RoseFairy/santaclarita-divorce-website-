"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { Award, MapPin, Heart, Shield, Clock, Users, Handshake, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Award,
    title: "Deep Experience",
    desc: "Over three decades practicing family law exclusively in the Santa Clarita Valley courts. We know the judges, the procedures, and what actually works.",
  },
  {
    icon: MapPin,
    title: "True Local Presence",
    desc: "We live and work here. Our children attend local schools. We understand the unique pressures and community values of Santa Clarita families.",
  },
  {
    icon: Heart,
    title: "Genuine Empathy",
    desc: "We never lose sight of the human cost. Every recommendation is made with your emotional and financial well-being, and your children’s future, in mind.",
  },
  {
    icon: Shield,
    title: "Strategic & Prepared",
    desc: "Settlement is often the wisest path. But when litigation is necessary, we enter the courtroom fully prepared with a clear, compelling strategy.",
  },
  {
    icon: Clock,
    title: "Responsive & Accessible",
    desc: "You will have direct access to Francisco M. Zavala, Esq. We return calls and emails promptly because we understand how stressful uncertainty can be.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "You are never passed to a junior associate. From the first meeting through resolution, your case receives senior-level focus.",
  },
  {
    icon: Handshake,
    title: "Transparent Fees",
    desc: "Clear, honest billing practices. We discuss costs upfront and work efficiently so you can make informed decisions about your case.",
  },
  {
    icon: Scale,
    title: "Balanced Advocacy",
    desc: "We fight hard for your rights and interests — without turning your case into unnecessary warfare that harms the people you care about most.",
  },
];

const testimonials = [
  {
    quote: "Francisco M. Zavala, Esq. handled my divorce with such professionalism and kindness. He helped me understand every step and fought for a fair outcome for my children and me. I am forever grateful.",
    name: "Elena M.",
    location: "Stevenson Ranch",
    role: "Mother of two",
  },
  {
    quote: "I was terrified of losing time with my kids. Francisco M. Zavala, Esq. took the time to really listen and built a custody plan that the court accepted. My relationship with my children is stronger today because of his work.",
    name: "Michael R.",
    location: "Valencia",
    role: "Father",
  },
  {
    quote: "We had significant assets and a complicated financial picture. Francisco M. Zavala, Esq.’s attention to detail and calm negotiation style resulted in a settlement that protected both of us. Highly recommended.",
    name: "Priya & James S.",
    location: "Santa Clarita",
    role: "Former clients",
  },
  {
    quote: "After a terrible experience with another attorney, switching to Francisco M. Zavala, Esq. was night and day. He actually cared about the result and the toll the process was taking on our family.",
    name: "Robert T.",
    location: "Canyon Country",
    role: "Client",
  },
  {
    quote: "Francisco M. Zavala, Esq. helped me navigate a very high-conflict custody modification. His preparation and courtroom presence were outstanding. My children now have the stability they needed.",
    name: "Samantha L.",
    location: "Newhall",
    role: "Mother",
  },
];

export default function WhyChooseUsPage() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container max-w-3xl">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">THE F.M. ZAVALA DIFFERENCE</div>
          <h1 className="heading-serif text-[#334155] mt-2">Why Santa Clarita Families Choose Our Divorce Attorney</h1>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            Choosing the right Santa Clarita divorce attorney is one of the most important decisions you will make. Here is why families throughout Santa Clarita and Los Angeles County consistently choose The F.M. Zavala Law Firm.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <div className="h-11 w-11 rounded-xl bg-[#F1EDE4] flex items-center justify-center text-[#5F7A9E]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#334155] tracking-tight">{reason.title}</h3>
                  <p className="mt-3 text-[#5A5A5A] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white border-y border-[#D4CFC4]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">IN THEIR OWN WORDS</div>
          <h2 className="heading-serif text-[#334155] mt-2">What our clients say.</h2>
        </div>

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
        </div>

        <p className="text-center text-xs text-[#8A877F] mt-10 max-w-md mx-auto">
          Testimonials are used with permission. Individual results vary. These stories are representative of the care and dedication we bring to every client relationship.
        </p>
      </Section>

      <Section className="text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="heading-serif text-[#334155]">Let’s talk about your situation.</h2>
          <p className="mt-3 text-[#5A5A5A]">A confidential conversation costs nothing and may change everything.</p>
          <div className="mt-7">
            <ConsultationCTA size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
