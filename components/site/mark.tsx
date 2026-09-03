import { cn } from "@/lib/utils";

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={cn(
        "flex w-[74px] flex-col text-[7px] leading-[0.78] tracking-[0.12em] no-underline",
        light ? "text-[#f8f3e9]" : "text-[#24231f]",
      )}
    >
      <span>THE</span>
      <strong className="my-1 font-serif text-[21px] font-normal tracking-[0.02em]">
        EMBER
      </strong>
      <span>PRACTICE</span>
    </a>
  );
}
