import Link from "next/link";
import { Section } from "@/components/section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { FileText, Users, DollarSign, Shield, RefreshCw, Handshake, Scroll, Briefcase } from "lucide-react";

export const metadata = {
  title: "Practice Areas | Santa Clarita Divorce Attorney",
  description: "Santa Clarita divorce attorney offering comprehensive family law services including property division, high-asset divorce, child custody evaluations, spousal support, and estate planning for families in Santa Clarita and Los Angeles County.",
  keywords: [
    "Santa Clarita divorce attorney",
    "Santa Clarita family law attorney",
    "Los Angeles County divorce attorney",
    "high asset divorce Santa Clarita",
    "child custody attorney Santa Clarita",
    "property division Santa Clarita",
    "730 evaluation Santa Clarita",
  ],
};

const areas = [
  {
    icon: FileText,
    title: "Divorce & Legal Separation",
    desc: "Strategic guidance through every stage of marital dissolution—from uncontested agreements to high-conflict litigation—delivered with clarity and respect for the personal and financial stakes involved.",
    points: [
      "No-fault and fault-based proceedings",
      "Legal separation when appropriate",
      "Collaborative divorce and mediation options",
    ],
  },
  {
    icon: Users,
    title: "Child Custody & Visitation",
    desc: "Experienced representation in sole, joint, and complex custody and visitation matters. We guide clients through evaluations, the appointment of Minor’s Counsel, forensic assessments, and relocation cases with a steadfast focus on the child’s best interests.",
    points: [
      "Child Custody Evaluations (730 Evaluations)",
      "Appointment of Minor's Counsel",
      "Forensic Child Custody Evaluations",
      "Move-Away / Relocation Cases under California’s LaMusga standards",
    ],
  },
  {
    icon: DollarSign,
    title: "Child & Spousal Support",
    desc: "Accurate calculation and strong advocacy for child support and spousal support orders that reflect California guidelines and the true financial circumstances of both parties.",
    points: [
      "Guideline and above-guideline support calculations",
      "Imputation of income and needs-based arguments",
      "Long-term, short-term, and rehabilitative spousal support",
    ],
  },
  {
    icon: Briefcase,
    title: "Property and Asset Division",
    desc: "Every divorce in Santa Clarita involves dividing property and assets. As your local Santa Clarita divorce attorney, we take a practical, balanced approach—whether your situation involves typical marital assets or complex high-asset matters—and work to achieve fair outcomes for families in Santa Clarita and Los Angeles County.",
    points: [
      "Simple / Standard Property Division — Division of the family home, retirement accounts, bank accounts, vehicles, household items, and other typical marital assets using established legal principles and fair negotiation.",
      "High-Asset & Complex Property Division — Asset tracing (including hidden assets, offshore accounts, and suspicious transfers), business valuation, lifestyle analysis, forensic accounting, and collaboration with financial experts when substantial or concealed assets are involved.",
    ],
  },
  {
    icon: Shield,
    title: "Domestic Violence & Restraining Orders",
    desc: "Immediate, effective protection for victims of domestic violence and strong defense for those facing allegations. We understand the critical intersection of these matters with custody, support, and property division.",
    points: [
      "Emergency protective orders and DVROs",
      "Related custody and support implications",
      "Defense against false or exaggerated allegations",
    ],
  },
  {
    icon: RefreshCw,
    title: "Post-Judgment Modifications & Enforcement",
    desc: "When life circumstances change, we help clients seek or defend modifications to custody, visitation, and support orders, as well as enforce existing judgments through contempt and other proceedings when necessary.",
    points: [
      "Changed circumstances analysis",
      "Enforcement of existing orders",
      "Contempt and sanctions proceedings",
    ],
  },
  {
    icon: Handshake,
    title: "Mediation & Collaborative Divorce",
    desc: "When parties are committed to a respectful, efficient process, we provide skilled mediation and collaborative divorce services that reduce conflict, cost, and time while achieving durable agreements.",
    points: [
      "Private mediation services",
      "Collaborative divorce team approach",
      "Creative, interest-based settlement solutions",
    ],
  },
  {
    icon: Scroll,
    title: "Estate Planning",
    desc: "Wills, trusts, and estate planning documents thoughtfully prepared for individuals and families, with special attention to the unique considerations that arise during and after divorce, including blended families and support obligations.",
    points: [
      "Wills and revocable living trusts",
      "Blended family and asset protection planning",
      "Coordination with divorce decrees and support orders",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container max-w-3xl">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">COMPREHENSIVE FAMILY LAW</div>
          <h1 className="heading-serif text-[#334155] mt-2">Santa Clarita Family Law Practice Areas</h1>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            As a Santa Clarita divorce attorney, we focus exclusively on family law for clients in Santa Clarita and throughout Los Angeles County. We handle straightforward property division as well as complex high-asset matters, child custody evaluations, support, and estate planning.
          </p>
        </div>
      </div>

      <Section>
        <div className="space-y-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="grid md:grid-cols-12 gap-x-12 gap-y-6 items-start">
                <div className="md:col-span-5 flex gap-5">
                  <div className="mt-1 shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-[#F1EDE4] flex items-center justify-center text-[#5F7A9E]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl text-[#334155] tracking-[-0.01em]">{area.title}</h2>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-[#3A3A3A] leading-relaxed text-[15.2px]">{area.desc}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-[#5A5A5A]">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white border-y border-[#D4CFC4] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="heading-serif text-[#334155]">Every family’s situation is unique.</h2>
          <p className="mt-4 text-[#5A5A5A]">
            The issues above often overlap. We take the time to understand the full picture of your case so we can build the right strategy from day one.
          </p>
          <div className="mt-8">
            <ConsultationCTA size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}
