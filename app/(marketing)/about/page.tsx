import Image from "next/image";
import { Section } from "@/components/section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { Scale, BookOpen, Users } from "lucide-react";

export const metadata = {
  title: "About Francisco M. Zavala, Esq. | Santa Clarita Divorce Attorney",
  description: "Meet Francisco M. Zavala, Esq., a leading Santa Clarita divorce attorney with 30 years of experience serving families in Santa Clarita and Los Angeles County. Former Los Angeles County Temporary Judge providing strategic family law representation.",
  keywords: [
    "Francisco M. Zavala",
    "Santa Clarita divorce attorney",
    "Santa Clarita family law attorney",
    "Los Angeles County divorce attorney",
    "Valencia divorce lawyer",
  ],
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container">
          <div className="max-w-3xl">
            <div className="uppercase text-xs tracking-[2.5px] text-[#5F7A9E]">PRACTICING SINCE 1996 • SANTA CLARITA</div>
            <h1 className="heading-serif text-[#334155] mt-3">Francisco M. Zavala, Esq. — Santa Clarita Divorce Attorney</h1>
            <p className="mt-4 text-xl text-[#5A5A5A]">Principal Attorney & Founder</p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Portrait + quick facts */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[320px] mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#5F7A9E] shadow-lg mb-6">
              <Image 
                src="/images/francisco-zavala.jpg" 
                alt="Francisco M. Zavala, Esq. - Santa Clarita and Los Angeles County Divorce Attorney" 
                fill
                className="object-cover object-[center_18%]" 
                priority
                sizes="(max-width: 1024px) 320px, 320px"
              />
            </div>

            <div className="space-y-4 text-sm border border-[#D4CFC4] bg-white rounded-xl p-6">
              <div>
                <div className="font-medium text-[#334155]">Admitted to Practice</div>
                <div className="text-[#5A5A5A]">United States District Court – Central District<br />California Supreme Court (1996)<br />Oregon Supreme Court (2023)<br />Washington D.C. Court of Appeals (2020)</div>
              </div>
              <div>
                <div className="font-medium text-[#334155]">Judicial Experience</div>
                <div className="text-[#5A5A5A]">Los Angeles County Temporary Judge</div>
              </div>
              <div>
                <div className="font-medium text-[#334155]">Education & Advanced Training</div>
                <div className="text-[#5A5A5A]">J.D., UCLA School of Law (1996)<br />B.S., UCLA (1993)<br />Harvard Law School (2003)<br />Hastings College of the Law, College of Advocacy (2000)</div>
              </div>
              <div>
                <div className="font-medium text-[#334155]">Professional Memberships</div>
                <div className="text-[#5A5A5A]">Los Angeles County Bar Association (Family Law Section)<br />Santa Clarita Valley and Los Angeles County Bar Association<br />Beverly Hills Bar Association<br />American Bar Association (Family Law Section)<br />Multnomah County Bar Association<br />California State Bar<br />Oregon State Bar<br />District of Columbia Bar</div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 text-[15.5px] text-[#3A3A3A] leading-relaxed space-y-6">
            <p className="text-lg text-[#2C2C2C]">
              Celebrating his 30th year practicing law, Francisco M. Zavala, Esq. has devoted his career to helping families navigate some of life’s most difficult transitions with compassion, skill, and an unwavering commitment to justice and stability.
            </p>

            <p>
              A proud UCLA alumnus, Mr. Zavala earned his Bachelor of Science from the University of California, Los Angeles in 1993 and his Juris Doctor from the UCLA School of Law in 1996. He has continued his professional development through advanced advocacy training at Harvard Law School in 2003 and at the Hastings College of the Law, College of Advocacy in San Francisco in 2000.
            </p>

            <p>
              One of Mr. Zavala’s most distinctive qualifications is his experience serving as a Los Angeles County Temporary Judge. Having presided over legal cases from the bench, he gained a rare and invaluable perspective that few practicing attorneys possess. This judicial service gave him direct, firsthand insight into how judges think, evaluate evidence, assess witness credibility, and make rulings in complex and emotionally difficult legal litigation matters. He understands the questions that matter most to the court, the concerns judges prioritize, and the arguments that carry the greatest weight.
            </p>

            <p>
              This experience provides his clients with a significant strategic advantage. Because Mr. Zavala has seen cases from both sides of the courtroom, he knows how to anticipate the challenges a case may face, craft arguments that resonate with judges, and present his clients’ stories in the most compelling and persuasive manner possible. His time as a Temporary Judge allows him to offer realistic guidance about likely outcomes while developing strategies specifically designed to address judicial concerns before they even arise.
            </p>

            <p>
              He is admitted to practice before the United States District Court – Central District, the California Supreme Court (1996), the Oregon Supreme Court (2023), and the Washington D.C. Court of Appeals (2020). He maintains active membership in the Los Angeles County Bar Association Family Law Section, the Santa Clarita Valley and Los Angeles County Bar Association, the Beverly Hills Bar Association, the American Bar Association Family Law Section, the Multnomah County Bar Association, the California State Bar, the Oregon State Bar, and the District of Columbia Bar.
            </p>

            <p>
              Mr. Zavala founded The F.M. Zavala Law Firm with a clear mission: to provide family law representation that protects his clients’ rights while treating every individual with the dignity and respect they deserve during what is often one of the most painful periods of their lives. He understands that behind every case are real families—parents concerned about their children’s future, individuals facing profound life changes, and people seeking fairness and a path forward.
            </p>

            <div className="pt-4">
              <h3 className="font-serif text-[#334155] text-2xl mb-3">My Approach</h3>
              <p>
                Mr. Zavala’s approach begins with listening—truly listening. Informed by his time on the bench, he takes the time to understand each client’s unique circumstances, goals, and concerns before crafting a strategy tailored to their specific needs. While he is fully prepared to provide strong, effective advocacy in the courtroom when necessary, he believes that many family law matters are best resolved through thoughtful negotiation or mediation. This balanced philosophy helps preserve important relationships and minimizes the emotional and financial toll on families, particularly when children are involved.
              </p>
              <p className="mt-4">
                Throughout every matter, clients have direct access to Mr. Zavala. He does not believe in delegating critical decisions or communication to junior associates. When you work with The F.M. Zavala Law Firm, you work directly with an experienced attorney who knows the intimate details of your situation and who is personally invested in protecting what matters most to you and your family.
              </p>
              <p className="mt-4">
                With deep roots in Santa Clarita and throughout Los Angeles County, Francisco M. Zavala, Esq. offers exceptional legal expertise and a steady, compassionate presence to families in Santa Clarita Valley and Los Angeles County during life’s most uncertain times.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white border-y border-[#D4CFC4]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-[#334155]">A Note to Those Considering Their Options</h2>
          <div className="mt-6 space-y-5 text-[#3A3A3A] text-[15.5px] leading-relaxed">
            <p>
              If you are reading this, you may be facing one of the hardest decisions of your life. Whether you are contemplating divorce, fighting for time with your children, or trying to secure financial stability for the future, I want you to know this:
            </p>
            <p>
              You do not have to go through this alone, and you do not have to go through it in a way that causes unnecessary damage. There is a path forward that protects your dignity and your children’s well-being.
            </p>
          </div>
          <div className="mt-9">
            <ConsultationCTA size="lg" />
          </div>
          <p className="text-xs text-[#5A5A5A] mt-3">Confidential. No obligation.</p>
        </div>
      </Section>
    </>
  );
}
