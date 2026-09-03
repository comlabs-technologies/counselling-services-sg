import { EnquiryForm } from "@/components/site/enquiry-form";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { enquiryReassurance } from "@/lib/site";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function Enquiry() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="scroll-mt-24 bg-[#35352F] text-[#EFEBE2]"
    >
      <div className={`${sectionX} ${sectionY} mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16`}>
        <Reveal>
          <Eyebrow className="text-[#D7A090]">A gentle first step</Eyebrow>
          <h2 id="enquiry-heading" className={cn(h2Class, "mt-5 text-[#EFEBE2]")}>
            You can begin with one short message.
          </h2>
          <p className={`${bodyClass} mt-6 text-[#C4BEB4]`}>
            You do not need the right words. Share only what feels comfortable
            and Sheetal will respond personally.
          </p>
          <ul className="mt-8 mb-0 grid list-none gap-3 p-0">
            {enquiryReassurance.map((item) => (
              <li key={item} className="text-[16px] text-[#EFEBE2]">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="text-[#272620]">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
