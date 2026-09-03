"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { guidedChoices, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GuidedChoices() {
  const [choice, setChoice] = useState("myself");

  return (
    <>
      <div className="mt-[38px] grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
        {guidedChoices.map(([id, title, detail]) => (
          <button
            key={id}
            type="button"
            onClick={() => setChoice(id)}
            className={cn(
              "grid min-h-[102px] cursor-pointer grid-cols-[1fr_auto] border border-[#d5d9d4] bg-white p-5 text-left text-[#21322e]",
              choice === id &&
                "border-[#b05c43] bg-[#fbede6] shadow-[inset_4px_0_#b05c43]",
            )}
          >
            <span className="font-serif text-[18px] font-normal">{title}</span>
            <small className="col-start-1 mt-1 text-[12px] text-[#7a827f]">
              {detail}
            </small>
            <ArrowRight className="col-start-2 row-start-1 row-end-3 size-[18px] self-center" />
          </button>
        ))}
      </div>
      <a
        className="mt-3.5 flex min-h-14 items-center justify-between bg-[#21423a] px-[22px] text-white no-underline"
        href={WHATSAPP_URL}
      >
        Continue with a private enquiry <ArrowRight />
      </a>
    </>
  );
}
