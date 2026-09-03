import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "m-0 text-[12px] font-medium tracking-[0.16em] text-[#9D4936]",
        className,
      )}
    >
      {children}
    </p>
  );
}
