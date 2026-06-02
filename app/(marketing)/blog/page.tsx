import Link from "next/link";
import { Section } from "@/components/section";

export const metadata = {
  title: "Resources | Santa Clarita Divorce Attorney",
  description: "Educational articles on California family law from the real licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. with 30 years experience serving Valencia, Newhall. Insights on divorce, child custody, high-asset for Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County families.",
};

export default function BlogIndex() {
  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container max-w-4xl">
          <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">RESOURCES</div>
          <h1 className="heading-serif text-[#334155] mt-2">Santa Clarita Divorce Attorney Resources — 30 Years Experience, Former Judge</h1>
          <p className="mt-4 text-lg text-[#5A5A5A]">
            Educational articles on California child custody, divorce, and family law matters from the real licensed Santa Clarita Divorce Attorney with 30 years experience serving families in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County. Direct attorney guidance, not paralegal services.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-[#334155] mb-6">Latest Articles</h2>
          
          <div className="space-y-6">
            <div className="border border-[#D4CFC4] rounded-xl p-6 hover:border-[#5F7A9E] transition-colors">
              <Link href="/blog/financial-cheating-spouse-california" className="block">
                <h3 className="text-xl font-serif text-[#334155] hover:text-[#5F7A9E] transition-colors">
                  Financial Cheating in Marriage: How to Uncover Hidden Assets in California Divorce
                </h3>
                <p className="mt-2 text-[#5A5A5A]">
                  A strategic guide for spouses in Santa Clarita, Valencia, Newhall, and Los Angeles County who suspect financial infidelity and hidden assets during divorce.
                </p>
              </Link>
            </div>

            <div className="border border-[#D4CFC4] rounded-xl p-6 hover:border-[#5F7A9E] transition-colors">
              <Link href="/blog/parental-alienation-california" className="block">
                <h3 className="text-xl font-serif text-[#334155] hover:text-[#5F7A9E] transition-colors">
                  Understanding Parental Alienation in High-Conflict Child Custody Cases – Legal Strategies That Work
                </h3>
                <p className="mt-2 text-[#5A5A5A]">
                  A strategic guide for parents in Santa Clarita, Valencia, Newhall, and Los Angeles County facing parental alienation in high-conflict custody cases.
                </p>
              </Link>
            </div>

            <div className="border border-[#D4CFC4] rounded-xl p-6 hover:border-[#5F7A9E] transition-colors">
              <Link href="/blog/high-conflict-child-custody-california" className="block">
                <h3 className="text-xl font-serif text-[#334155] hover:text-[#5F7A9E] transition-colors">
                  High-Conflict Child Custody Litigation in California: What Santa Clarita Parents Need to Know
                </h3>
                <p className="mt-2 text-[#5A5A5A]">
                  A practical guide to navigating high-conflict custody cases, 730 evaluations, and protecting your children in Santa Clarita, Valencia, Newhall, and Los Angeles County courts.
                </p>
              </Link>
            </div>

            <div className="border border-[#D4CFC4] rounded-xl p-6 hover:border-[#5F7A9E] transition-colors">
              <Link href="/blog/move-away-cases-california" className="block">
                <h3 className="text-xl font-serif text-[#334155] hover:text-[#5F7A9E] transition-colors">
                  Understanding Move-Away and Relocation Cases in California Child Custody
                </h3>
                <p className="mt-2 text-[#5A5A5A]">
                  A comprehensive guide to LaMusga standards and relocation cases for parents in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
