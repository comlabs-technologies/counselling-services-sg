import { Eyebrow } from "@/components/site/eyebrow";
import { FaqList } from "@/components/site/faq-list";
import { Reveal } from "@/components/site/reveal";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";

export function Faqs() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24">
      <div className={`${sectionX} ${sectionY} mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2`}>
        <Reveal>
          <Eyebrow>Before you reach out</Eyebrow>
          <h2 id="faq-heading" className={`${h2Class} mt-5`}>
            A little clarity can make the first step easier.
          </h2>
          <p className={`${bodyClass} mt-5`}>
            You are welcome to ask questions before deciding whether counselling
            feels right.
          </p>
        </Reveal>
        <Reveal>
          <FaqList />
        </Reveal>
      </div>
    </section>
  );
}
