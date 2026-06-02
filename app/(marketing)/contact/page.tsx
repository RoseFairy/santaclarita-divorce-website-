import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Santa Clarita Divorce Attorney",
  description: "Contact the real licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. with 30 Years Experience, Former Judge, Direct Attorney Access (not paralegals). Serving Valencia, Newhall, Canyon Country. Confidential consultation for divorce, child custody, high-asset in Santa Clarita, Valencia, Newhall, and Los Angeles County.",
  keywords: [
    "Santa Clarita divorce attorney",
    "Valencia divorce attorney",
    "Newhall divorce lawyer",
    "contact Santa Clarita divorce lawyer",
    "family law consultation Santa Clarita",
    "Los Angeles County divorce attorney contact",
    "Valencia divorce lawyer",
  ],
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">CONFIDENTIAL CONSULTATION</div>
            <h1 className="heading-serif text-[#334155] mt-2">Contact Your Real Santa Clarita Divorce Attorney — 30 Years, Former Judge, Direct Access</h1>
            <p className="mt-4 text-lg text-[#5A5A5A]">
              Take the first step toward clarity and protection for your family with the real licensed Santa Clarita Divorce Attorney. All consultations are private and without obligation. Direct access to Francisco M. Zavala, Esq. — 30 years, Former Judge.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
          {/* Form (client component for interactivity and state) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D4CFC4] rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-[#334155]">Santa Clarita Office – Real Licensed Santa Clarita Divorce Attorney</h3>

              <div className="mt-8 space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Office</div>
                    <div className="text-[#5A5A5A] mt-0.5 leading-tight">
                      28494 Westinghouse Place, Suite 205<br />
                      Santa Clarita, CA 91355
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Phone</div>
                    <a href="tel:6617533534" className="text-[#5F7A9E] hover:underline">(661) 753-3534</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Email</div>
                    <a href="mailto:Divorce@santaclaritadivorceattorney.com" className="text-[#5F7A9E] hover:underline">Divorce@santaclaritadivorceattorney.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Office Hours</div>
                    <div className="text-[#5A5A5A] mt-0.5">Monday – Friday, 8:30am – 5:00pm<br />Evenings and weekends by appointment</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D4CFC4] text-xs text-[#5A5A5A] leading-relaxed">
                Free initial consultations are available by appointment. We serve clients in Santa Clarita, Valencia, Newhall, Canyon Country, and throughout the Santa Clarita Valley and Los Angeles County as your real licensed Santa Clarita Divorce Attorney with Direct Access.
              </div>
            </div>

            <div className="mt-6 text-[11px] text-[#8A877F] px-1">
              This form is secure. Your information is kept strictly confidential and is never shared.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
