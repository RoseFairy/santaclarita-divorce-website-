import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { Award, MapPin, Heart, Shield, Clock, Users, Handshake, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | Santa Clarita Divorce Attorney",
  description: "Why choose the real licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq.? 30+ years experience as Former Los Angeles County Temporary Judge, UCLA Law, Direct Attorney Access — not paralegals or staff. Serving Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County.",
  keywords: [
    "Santa Clarita divorce attorney",
    "why choose Santa Clarita divorce lawyer",
    "local family law attorney Santa Clarita",
    "Los Angeles County divorce attorney",
    "Santa Clarita family law",
  ],
};

const reasons = [
  {
    icon: Scale,
    title: "A Real Attorney — Not Paralegals or Staff",
    desc: "You work directly with the real licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — 30 years experience, Former Los Angeles County Temporary Judge. Every case receives senior-level Direct Attorney Access. No hand-offs to paralegals, case managers, or junior associates for clients in Santa Clarita, Valencia, Newhall, and the Santa Clarita Valley.",
  },
  {
    icon: Award,
    title: "Deep Experience as Your Santa Clarita Divorce Attorney",
    desc: "Over three decades practicing family law exclusively in the Santa Clarita Valley courts as a real licensed attorney with 30 years experience. We know the judges, the procedures in Santa Clarita, Valencia, Newhall, and Canyon Country, and what actually works for families in Santa Clarita and Los Angeles County.",
  },
  {
    icon: MapPin,
    title: "True Local Presence in Santa Clarita, Valencia & Newhall",
    desc: "We live and work here in Santa Clarita, Valencia, and Newhall as your local Santa Clarita Divorce Attorney. Our children attend local schools in the Santa Clarita Valley. We understand the unique pressures and community values of families in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County.",
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
    title: "Responsive & Accessible — Direct with the Attorney",
    desc: "You will have direct access to Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — never routed to paralegals or staff. We return calls and emails promptly because we understand how stressful uncertainty can be for families in Santa Clarita, Valencia, and Newhall.",
  },
  {
    icon: Users,
    title: "Personal Attention from Your Santa Clarita Divorce Attorney",
    desc: "You are never passed to a junior associate or paralegal. From the first meeting through resolution, your case with the real licensed Santa Clarita Divorce Attorney receives senior-level focus for clients in Santa Clarita, Valencia, Newhall, and the Santa Clarita Valley.",
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
  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container max-w-3xl">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">THE F.M. ZAVALA DIFFERENCE</div>
          <h1 className="heading-serif text-[#334155] mt-2">Why Families Choose Our Real Santa Clarita Divorce Attorney with 30 Years Experience and Former Judge Advantage</h1>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            Choosing the right real licensed Santa Clarita Divorce Attorney serving Valencia, Newhall, and Canyon Country — with 30 years experience as a Former Judge and Direct Attorney Access, not paralegals — is one of the most important decisions you will make. Here is why families throughout Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County consistently choose The F.M. Zavala Law Firm.
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

      {/* Testimonials (client component for carousel) */}
      <Section className="bg-white border-y border-[#D4CFC4]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">IN THEIR OWN WORDS</div>
          <h2 className="heading-serif text-[#334155] mt-2">What our clients say.</h2>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </Section>

      <Section className="text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="heading-serif text-[#334155]">Let’s talk about your situation with the real Santa Clarita Divorce Attorney.</h2>
          <p className="mt-3 text-[#5A5A5A]">A confidential conversation with Direct Attorney Access costs nothing and may change everything for families in Santa Clarita, Valencia, and Newhall.</p>
          <div className="mt-7">
            <ConsultationCTA size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
