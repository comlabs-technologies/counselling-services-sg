"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { pathways } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PathwayList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="m-0 list-none p-0">
      {pathways.map((item) => {
        const expanded = openId === item.id;
        return (
          <li key={item.id} className="border-t border-[#C9C4B9] last:border-b">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`${item.id}-panel`}
              className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-4 bg-transparent px-0 py-6 text-left transition-colors duration-200 hover:bg-[#F3EFE6] focus-visible:bg-[#F3EFE6] md:grid-cols-[1fr_auto_auto] md:px-4"
              onClick={() => setOpenId(expanded ? null : item.id)}
            >
              <span className="font-serif text-[22px] leading-[1.3] font-normal text-[#272620] md:text-[26px]">
                {item.title}
              </span>
              <span className="hidden text-[12px] tracking-[0.08em] text-[#9D4936] md:inline">
                {item.suggest}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-5 text-[#9D4936] transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </button>
            <div
              id={`${item.id}-panel`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 px-0 pb-6 md:px-4">
                  <p className="m-0 max-w-[38rem] text-[16px] leading-[1.7] text-[#6E6A62] md:text-[17px]">
                    {item.description}
                  </p>
                  <p className="m-0 text-[13px] tracking-[0.06em] text-[#9D4936] md:hidden">
                    {item.suggest}
                  </p>
                  <a
                    href={item.href}
                    className="inline-flex min-h-12 w-fit items-center text-[14px] text-[#272620] underline decoration-[#C9C4B9] underline-offset-4 transition-colors duration-200 hover:text-[#9D4936]"
                  >
                    Continue with this starting point
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
