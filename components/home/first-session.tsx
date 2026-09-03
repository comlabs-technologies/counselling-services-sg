import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { firstSessionSteps } from "@/lib/site";
import { bodyClass, h2Class, sectionInner, sectionX, sectionY } from "@/lib/styles";

export function FirstSession() {
  return (
    <section aria-labelledby="session-heading" className={`${sectionX} ${sectionY}`}>
      <div className={`${sectionInner} grid gap-12 lg:grid-cols-[0.85fr_1.15fr]`}>
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>A simple, comfortable beginning</Eyebrow>
          <h2 id="session-heading" className={`${h2Class} mt-5`}>
            No pressure to have it all figured out.
          </h2>
          <p className={`${bodyClass} mt-5`}>
            The first step can be small. You are welcome to ask questions before
            deciding whether this space feels right.
          </p>
        </Reveal>
        <ol className="m-0 list-none p-0">
          {firstSessionSteps.map((step, index) => (
            <Reveal key={step.id} delayMs={index * 60}>
              <li className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-[#C9C4B9] py-6 last:border-b">
                <span className="text-[12px] tracking-[0.14em] text-[#9D4936]">
                  {step.id}
                </span>
                <div>
                  <h3 className="m-0 font-serif text-[24px] font-normal text-[#272620]">
                    {step.title}
                  </h3>
                  <p className="mt-2 mb-0 text-[16px] leading-[1.7] text-[#6E6A62]">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
