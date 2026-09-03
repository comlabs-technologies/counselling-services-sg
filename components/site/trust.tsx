import { Clock3, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { icon: ShieldCheck, label: "Private & confidential" },
  { icon: Stethoscope, label: "Former paediatric doctor" },
  { icon: MapPin, label: "2 central locations" },
  { icon: Clock3, label: "Online & in-person" },
] as const;

export function Trust({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[1260px] grid-cols-4 border-y border-[#d5d1c7] max-[900px]:mx-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1",
        dark && "border-[#ffffff25]",
      )}
    >
      {items.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className={cn(
            "flex min-h-[76px] items-center justify-center gap-2.5 border-r border-[#d5d1c7] text-[13px] last:border-0 max-[900px]:min-h-[62px] max-[900px]:border-b max-[900px]:border-[#d8d4ca] max-[900px]:text-[11px] max-[900px]:last:border-0 max-[560px]:border-r-0",
            dark && "border-[#ffffff25] text-[#d7d1c6] last:border-0",
          )}
        >
          <Icon className="size-[17px] text-[#aa4f39]" />
          {label}
        </span>
      ))}
    </div>
  );
}
