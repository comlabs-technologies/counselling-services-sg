import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function CTA({
  children,
  href = "#enquiry",
  className,
  pale = false,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  pale?: boolean;
  onClick?: () => void;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-3 border px-[22px] text-[14px] no-underline transition-[gap,background-color,border-color,color] duration-200 ease-out hover:gap-4 focus-visible:outline-offset-4",
        pale
          ? "border-[#272620]/20 bg-transparent text-[#272620] hover:border-[#9D4936] hover:text-[#9D4936]"
          : "border-[#272620] bg-[#272620] text-white hover:border-[#9D4936] hover:bg-[#9D4936]",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noreferrer" } : undefined)}
    >
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}
