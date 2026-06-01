import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConsultationCTAProps {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function ConsultationCTA({
  variant = "primary",
  size = "default",
  className,
  children = "Schedule Free Consultation",
}: ConsultationCTAProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all active:scale-[0.985]";

  const styles =
    variant === "primary"
      ? "bg-[#5F7A9E] text-[#F8F4ED] hover:bg-[#4A6280] px-6"
      : "border border-[#334155] text-[#334155] hover:bg-[#334155] hover:text-[#F8F4ED] px-6";

  const sizes = size === "lg" ? "h-14 px-8 text-base" : "h-11 px-6";

  return (
    <Link href="/contact" className={cn(base, styles, sizes, className)}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
