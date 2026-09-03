import { CTA } from "@/components/site/cta";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C9C4B9] bg-[#F7F5EF]/95 p-3 backdrop-blur-sm md:hidden">
      <CTA className="w-full">Start a private enquiry</CTA>
    </div>
  );
}
