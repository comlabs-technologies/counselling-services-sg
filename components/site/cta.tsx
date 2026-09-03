import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CTA({
  children,
  pale = false,
  className,
}: {
  children: ReactNode;
  pale?: boolean;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      className={cn(
        "inline-flex min-h-[50px] items-center justify-center gap-[18px] border border-[#272620] bg-[#272620] px-[22px] text-[14px] text-white no-underline transition-all duration-[250ms] hover:gap-[26px] hover:border-[#b7573d] hover:bg-[#b7573d]",
        pale && "border-[#f4eee2] bg-[#f4eee2] text-[#24231f]",
        className,
      )}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
