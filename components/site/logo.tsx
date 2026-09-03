import { cn } from "@/lib/utils";

export function Logo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label="The Ember Practice, home"
      className={cn(
        "flex min-h-12 flex-col justify-center text-[11px] leading-[0.82] tracking-[0.16em] text-[#272620] no-underline",
        className,
      )}
    >
      <span>THE</span>
      <strong className="my-0.5 font-serif text-[22px] font-normal tracking-[0.02em]">
        EMBER
      </strong>
      <span>PRACTICE</span>
    </a>
  );
}
