import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SiteNav({
  children,
  className,
  hoverable = false,
}: {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <nav
      className={cn(
        "mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-[34px] max-[900px]:h-[76px] max-[900px]:px-5",
        hoverable &&
          "transition-[background-color,box-shadow] duration-[350ms] hover:bg-[#faf8f3] hover:shadow-[0_1px_0_#29272114]",
        className,
      )}
    >
      {children}
    </nav>
  );
}
