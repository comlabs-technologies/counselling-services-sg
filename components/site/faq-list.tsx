"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="border-t border-[#C9C4B9]">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                className="flex min-h-14 w-full items-center justify-between gap-6 bg-transparent py-5 text-left font-serif text-[19px] font-normal text-[#272620] md:text-[21px]"
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-[#9D4936] transition-transform duration-200",
                    expanded && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-[38rem] pb-5 text-[16px] leading-[1.7] text-[#6E6A62]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
