"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F4ED]/95 backdrop-blur-md border-b border-[#D4CFC4]">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#334155] text-[#F8F4ED] group-hover:bg-[#5F7A9E] transition-colors">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[-0.02em] text-[#334155]">
              F.M. Zavala
            </span>
            <span className="text-[10px] font-medium tracking-[2px] text-[#5A5A5A] -mt-0.5">
              LAW FIRM
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link pb-1",
                isActive(link.href) && "nav-link-active text-[#5F7A9E]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#5F7A9E] px-6 text-sm font-medium text-[#F8F4ED] transition-all hover:bg-[#4A6280]"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[#334155] hover:bg-[#F1EDE4] rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <SheetContent side="right" className="w-80 bg-[#F8F4ED] p-0 border-l-[#D4CFC4]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-[#D4CFC4] px-6 py-5">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#334155] text-[#F8F4ED]">
                      <Scale className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-serif text-lg text-[#334155]">F.M. Zavala</span>
                      <span className="text-[9px] font-medium tracking-[1.5px] text-[#5A5A5A]">LAW FIRM</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-9 w-9 items-center justify-center text-[#334155] hover:bg-[#F1EDE4] rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col px-6 py-8 gap-y-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "py-1 transition-colors",
                        isActive(link.href) ? "text-[#5F7A9E]" : "text-[#2C2C2C] hover:text-[#5F7A9E]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto border-t border-[#D4CFC4] p-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-lg bg-[#5F7A9E] py-3 text-center text-sm font-medium text-[#F8F4ED] transition-all hover:bg-[#4A6280]"
                  >
                    Schedule Free Consultation
                  </Link>
                  <p className="text-center text-xs text-[#5A5A5A] mt-4">
                    (661) 753-3534
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
