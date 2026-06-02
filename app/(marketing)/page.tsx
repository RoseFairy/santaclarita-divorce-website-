import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, Users, MapPin, Shield, Heart, Award } from "lucide-react";
import { Section } from "@/components/section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: {
    absolute: "Santa Clarita Divorce Attorney | The F.M. Zavala Law Firm",
  },
  description: "Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — Real Licensed Attorney with 30 Years Experience, Former Los Angeles County Temporary Judge, UCLA Law. Direct Attorney Access — never handled by paralegals or staff. Serving Santa Clarita, Valencia, Newhall, Canyon Country for divorce, custody, high-asset.",
  keywords: [
    "Santa Clarita Divorce Attorney",
    "Santa Clarita Divorce Lawyer",
    "Valencia Divorce Attorney",
    "Newhall Family Law Attorney",
    "Santa Clarita family law attorney",
    "Los Angeles County divorce attorney",
    "Valencia divorce lawyer",
    "Newhall child custody lawyer",
    "child custody attorney Santa Clarita",
    "high asset divorce Santa Clarita",
    "real attorney Santa Clarita",
    "former judge Santa Clarita Divorce Attorney",
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.92, 0.26, 1] },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const practiceHighlights = [
  {
    title: "Divorce & Legal Separation",
    desc: "Santa Clarita Divorce Attorney strategic guidance through uncontested and high-conflict dissolutions with clarity and respect for the personal and financial stakes in Santa Clarita, Valencia, and Newhall.",
  },
  {
    title: "Child Custody & Visitation",
    desc: "Santa Clarita Divorce Attorney advocacy in complex custody matters, including 730 evaluations, Minor’s Counsel, forensic assessments, and move-away cases for families in Valencia and Newhall.",
  },
  {
    title: "High-Asset Divorce & Property Division",
    desc: "Santa Clarita Divorce Attorney for sophisticated asset tracing, business valuation, forensic accounting, and equitable division of complex marital estates in Valencia, Newhall, and the Santa Clarita Valley.",
  },
  {
    title: "Support & Estate Planning",
    desc: "Santa Clarita Divorce Attorney for child and spousal support, post-judgment modifications, and wills and trusts tailored to changing family circumstances.",
  },
];

const whyUs = [
  { icon: Award, label: "30 Years Experience", detail: "Celebrating his 30th year as real licensed Santa Clarita Divorce Attorney in Santa Clarita, Valencia, Newhall family courts" },
  { icon: Users, label: "Real Attorney, Direct Access", detail: "Work directly with real licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — never handed to paralegals or staff in Valencia, Newhall" },
  { icon: MapPin, label: "Local Court Knowledge", detail: "Familiar with judges, procedures & local practices in Santa Clarita, Valencia, Newhall, Canyon Country, and Santa Clarita Valley courts as your Divorce Attorney" },
  { icon: Shield, label: "Strategic Advocacy", detail: "Settlement-focused when possible, trial-ready when necessary" },
];

const testimonials = [
  {
    quote: "Mr. Zavala guided me through a very difficult custody case with patience and professionalism. I always felt heard and supported.",
    name: "Maria R.",
    location: "Valencia",
  },
  {
    quote: "He helped us reach a fair property settlement without the bitterness I feared. I would recommend him without hesitation.",
    name: "David K.",
    location: "Canyon Country",
  },
  {
    quote: "The level of personal attention and clear communication was exceptional. My children’s future is secure because of his work.",
    name: "Aisha T.",
    location: "Santa Clarita",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center justify-center border-b border-[#D4CFC4] bg-[#F8F4ED] pt-8 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="Santa Clarita Divorce Attorney office serving Valencia, Newhall, Canyon Country" 
            fill
            className="object-cover opacity-40" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4ED] via-[#F8F4ED]/90 to-[#F8F4ED]/70" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4CFC4] bg-white/70 px-4 py-1 text-xs tracking-[1.5px] text-[#5A5A5A] mb-8">
              SANTA CLARITA VALLEY, CALIFORNIA
            </div>

            <h1 className="heading-serif max-w-4xl text-balance text-[#334155] leading-[1.05]">
              Santa Clarita Divorce Attorney<br />Real Licensed Attorney with 30 Years Experience You Can Trust
            </h1>

            <p className="mt-6 max-w-xl text-xl text-[#3F3F3F] leading-relaxed">
              For over three decades, The F.M. Zavala Law Firm has served as the trusted Santa Clarita Divorce Attorney — a real licensed attorney with 30 years experience, former Los Angeles County Temporary Judge, and UCLA Law graduate. Direct Attorney Access for clients in Santa Clarita, Valencia, Newhall, Canyon Country, and the Santa Clarita Valley. We provide experienced representation in divorce, child custody, spousal support, and high-asset property division — never handled by paralegals or staff.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ConsultationCTA size="lg" className="h-14 px-8 text-base">
                Schedule Your Confidential Consultation
              </ConsultationCTA>
              <Link
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-[#334155] px-8 text-base font-medium text-[#334155] transition-all hover:bg-[#334155] hover:text-[#F8F4ED]"
              >
                Meet the Real Santa Clarita Divorce Attorney with 30 Years Experience
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-[#5A5A5A]">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4" /> <span>U.S. District Court – Central District</span>
              </div>
              <div>CA Supreme Court (1996) • OR Supreme Court (2023) • D.C. Court of Appeals (2020)</div>
            </div>
          </div>
        </div>

        {/* Subtle decorative element */}
        <div className="absolute bottom-12 right-8 hidden lg:block text-[10px] tracking-[3px] text-[#D4CFC4] rotate-90 origin-bottom-right">
          SANTA CLARITA DIVORCE ATTORNEY
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-b border-[#D4CFC4] bg-white py-5">
        <div className="container flex flex-wrap justify-center md:justify-between gap-x-10 gap-y-3 text-sm font-medium text-[#5A5A5A] tracking-wide">
          <div>REAL LICENSED ATTORNEY — 30 YEARS EXPERIENCE</div>
          <div>DIRECT ATTORNEY ACCESS — NO PARALEGALS OR STAFF</div>
          <div>FORMER LOS ANGELES COUNTY TEMPORARY JUDGE</div>
          <div>SANTA CLARITA SUPERIOR COURT EXPERT</div>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <Section>
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[2px] text-xs text-[#5F7A9E] font-medium mb-3">MEET YOUR ATTORNEY</div>
            <h2 className="heading-serif text-[#334155]">Santa Clarita Divorce Attorney: Francisco M. Zavala, Esq.</h2>
            <p className="mt-6 text-lg text-[#5A5A5A] max-w-2xl">
              A UCLA alumnus (B.S. 1993, J.D. 1996) with advanced training at Harvard Law School and Hastings College of the Law, Francisco M. Zavala, Esq. is the real licensed Santa Clarita Divorce Attorney serving Valencia, Newhall, Canyon Country, and the Santa Clarita Valley with 30 years of experience as a Former Los Angeles County Temporary Judge. Direct Attorney Access — your case is never handed off to paralegals or staff.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-[#5F7A9E] px-5 py-2 text-sm font-medium text-[#5F7A9E] transition-all hover:bg-[#5F7A9E] hover:text-[#F8F4ED]"
              >
                Read the full story of our real Santa Clarita Divorce Attorney with 30 years experience
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 mt-10 md:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4CFC4] shadow-sm">
              <Image 
                src="/images/francisco-zavala.jpg" 
                alt="Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. serving Valencia and Newhall" 
                fill
                className="object-cover object-[center_22%]" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* PRACTICE HIGHLIGHTS */}
      <Section className="bg-white border-y border-[#D4CFC4]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[2px] text-[#5F7A9E]">EXPERIENCED REPRESENTATION</div>
            <h2 className="heading-serif text-[#334155] mt-1">Santa Clarita Divorce Attorney Practice Areas</h2>
          </div>
          <Link href="/practice-areas" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#5F7A9E] hover:underline">
            View Santa Clarita Divorce Attorney practice areas for Valencia &amp; Newhall <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceHighlights.map((area, i) => (
            <div key={i} className="card-elegant p-7 flex flex-col">
              <h3 className="font-serif text-xl text-[#334155] mb-3">{area.title}</h3>
              <p className="text-[#5A5A5A] flex-1 leading-relaxed text-[15px]">{area.desc}</p>
              <Link href="/practice-areas" className="mt-6 text-sm font-medium text-[#5F7A9E] inline-flex items-center gap-1 hover:gap-1.5 transition-all">
                Santa Clarita Divorce Attorney services →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/practice-areas" className="text-sm font-medium text-[#5F7A9E]">View Santa Clarita Divorce Attorney services for Valencia &amp; Newhall →</Link>
        </div>
      </Section>

      {/* WHY CHOOSE US SNAPSHOT */}
      <Section>
        <div className="max-w-2xl">
          <div className="text-xs tracking-[2px] text-[#5F7A9E]">THE F.M. ZAVALA DIFFERENCE</div>
          <h2 className="heading-serif text-[#334155] mt-2">Why Families Choose Our Real Santa Clarita Divorce Attorney with 30 Years Experience</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="border-l-2 border-[#5F7A9E] pl-6">
                <Icon className="h-6 w-6 text-[#5F7A9E] mb-4" />
                <div className="font-medium text-lg text-[#334155] tracking-tight">{item.label}</div>
                <p className="mt-1.5 text-[#5A5A5A] text-[15px]">{item.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link href="/why-choose-us" className="inline-flex text-sm font-medium text-[#5F7A9E] hover:underline">Why choose the real Santa Clarita Divorce Attorney with direct access and 30 years experience →</Link>
        </div>
      </Section>

      {/* TESTIMONIALS PREVIEW */}
      <Section className="bg-white border-y border-[#D4CFC4]">
        <div className="flex justify-between items-baseline mb-9">
          <div>
            <div className="text-xs tracking-[2px] text-[#5F7A9E]">CLIENT VOICES</div>
            <h2 className="heading-serif text-[#334155]">Real stories from real families.</h2>
          </div>
          <Link href="/why-choose-us" className="text-sm hidden md:block font-medium text-[#5F7A9E]">Read stories from families served by our Santa Clarita Divorce Attorney →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-elegant p-8 flex flex-col">
              <p className="italic text-[15px] leading-relaxed flex-1 text-[#3F3F3F]">“{t.quote}”</p>
              <div className="mt-6 pt-6 border-t border-[#D4CFC4] text-sm">
                <div className="font-medium text-[#334155]">{t.name}</div>
                <div className="text-[#5A5A5A]">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/why-choose-us" className="text-sm font-medium text-[#5F7A9E]">Read stories from families served by our Santa Clarita Divorce Attorney →</Link>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-serif text-[#334155]">Ready to take the next step with your Santa Clarita Divorce Attorney?</h2>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            Schedule a confidential consultation today with your real Santa Clarita Divorce Attorney — licensed with 30 years experience as a Former Judge, providing Direct Attorney Access (not paralegals) for clients in Santa Clarita, Valencia, Newhall, Canyon Country, and the Santa Clarita Valley. We’ll listen carefully, answer your questions, and help you understand your options — with no pressure and no obligation.
          </p>
          <div className="mt-8">
            <ConsultationCTA size="lg" className="px-10 h-14 text-base" />
          </div>
          <p className="mt-4 text-xs text-[#5A5A5A]">Most initial consultations are scheduled within 48 hours.</p>
        </div>
      </Section>
    </>
  );
}
