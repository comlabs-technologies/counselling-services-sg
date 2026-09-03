import { PathwayList } from "@/components/site/pathway-list";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { bodyClass, h2Class, sectionInner, sectionX, sectionY } from "@/lib/styles";

export function Pathway() {
  return (
    <section
      id="support"
      aria-labelledby="pathway-heading"
      className={`${sectionX} ${sectionY}`}
    >
      <div className={sectionInner}>
        <Reveal className="max-w-[40rem]">
          <Eyebrow>Start with what feels closest</Eyebrow>
          <h2 id="pathway-heading" className={`${h2Class} mt-5`}>
            You do not need the clinical name for what you are experiencing.
          </h2>
          <p className={`${bodyClass} mt-5`}>
            Choose the starting point that feels nearest. You can stay with it,
            change your mind, or simply continue with a private enquiry.
          </p>
        </Reveal>
        <Reveal delayMs={80} className="mt-10">
          <PathwayList />
        </Reveal>
      </div>
    </section>
  );
}
