import Link from "next/link";
import { Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#334155] text-[#E8E4DB] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F4ED] text-[#334155]">
                <Scale className="h-4.5 w-4.5" />
              </div>
              <div className="font-serif text-2xl tracking-[-0.01em] text-white">
                The F.M. Zavala Law Firm
              </div>
            </div>
            <p className="max-w-md text-[#C5BFB0] leading-relaxed text-[15px]">
              Santa Clarita divorce attorney providing compassionate, strategic family law representation 
              to families in Santa Clarita and Los Angeles County for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="font-medium text-white mb-4 tracking-wide text-sm">NAVIGATE</div>
            <ul className="space-y-2.5 text-[15px] text-[#C5BFB0]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-2">
            <div className="font-medium text-white mb-4 tracking-wide text-sm">AREAS OF FOCUS</div>
            <ul className="space-y-2.5 text-[15px] text-[#C5BFB0]">
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Divorce</Link></li>
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Child Custody</Link></li>
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Spousal Support</Link></li>
              <li><Link href="/practice-areas" className="hover:text-white transition-colors">Property Division</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="font-medium text-white mb-4 tracking-wide text-sm">SANTA CLARITA OFFICE</div>
            <address className="not-italic text-[#C5BFB0] text-[15px] leading-relaxed">
              28494 Westinghouse Place, Suite 205<br />
              Santa Clarita, CA 91355<br />
              <a href="tel:6617533534" className="hover:text-white transition-colors block mt-2">(661) 753-3534</a>
              <a href="mailto:Divorce@santaclaritadivorceattorney.com" className="hover:text-white transition-colors">Divorce@santaclaritadivorceattorney.com</a>
            </address>
          </div>
        </div>

        {/* Legal Disclaimer — Critical for law firms */}
        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-[#9A9280] leading-relaxed max-w-5xl">
          <p>
            <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. 
            The information provided should not be relied upon as a substitute for consultation with a qualified attorney. 
            Past results do not guarantee future outcomes. Every case is unique and results vary based on individual circumstances. 
            The F.M. Zavala Law Firm is licensed to practice law in the State of California. 
            This website is designed and operated in accordance with the rules of the State Bar of California.
          </p>
          <p className="mt-3">
            © {currentYear} The F.M. Zavala Law Firm. All rights reserved. 
            Attorney advertising. Francisco M. Zavala, Esq.
          </p>
        </div>
      </div>
    </footer>
  );
}
