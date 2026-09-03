import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Mark } from "./mark";

export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer
      className={cn(
        "mx-auto grid max-w-[1260px] grid-cols-2 items-end gap-3 border-t border-[#cac6bc] px-6 py-[65px] max-[900px]:mx-5 max-[900px]:px-0 max-[560px]:grid-cols-1",
        dark && "border-[#ffffff28]",
      )}
    >
      <Mark light={dark} />
      <p className="m-0 font-serif text-[18px] font-normal">
        Therapy & counselling in Singapore
      </p>
      <div className="col-start-2 row-start-1 row-end-3 grid gap-2 text-right max-[560px]:col-start-1 max-[560px]:row-auto max-[560px]:text-left">
        <a
          href={`mailto:${EMAIL}`}
          className="text-[12px] text-inherit no-underline"
        >
          {EMAIL}
        </a>
        <a href={PHONE_TEL} className="text-[12px] text-inherit no-underline">
          {PHONE_DISPLAY}
        </a>
      </div>
      <small className={cn("text-[#848077]", dark && "text-[#85847e]")}>
        © 2026 The Ember Practice Pte Ltd · Not a crisis service
      </small>
    </footer>
  );
}
