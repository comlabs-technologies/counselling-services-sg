import Image from "next/image";

import { CTA } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { credentials, whoSheetalSupports } from "@/lib/site";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";

export function MeetSheetal() {
  return (
    <section id="sheetal" aria-labelledby="sheetal-heading" className="scroll-mt-24">
      <div className={`${sectionX} ${sectionY} mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[0.86fr_1.14fr]`}>
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden bg-[#DED8CD]">
            <Image
              src="/images/ember/sheetal-singhania.webp"
              alt="Portrait of Sheetal Singhania, counsellor at The Ember Practice"
              width={941}
              height={1672}
              className="h-[520px] w-full object-cover object-[center_12%] md:h-[640px] lg:h-[720px]"
            />
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow>Your counsellor</Eyebrow>
          <h2 id="sheetal-heading" className={`${h2Class} mt-5`}>
            Medical understanding.{" "}
            <em className="font-normal text-[#9D4936]">Grounded human care.</em>
          </h2>
          <div className="mt-8 grid gap-5">
            <p className={`${bodyClass} font-serif text-[19px] text-[#272620]`}>
              I am Sheetal Singhania, a counsellor and former paediatric doctor
              with a Master’s in Counselling.
            </p>
            <p className={bodyClass}>
              My path to counselling began in medicine, where I spent several
              years working as a paediatric doctor in the United Kingdom and
              supporting children and families through complex and emotional
              experiences.
            </p>
            <p className={bodyClass}>
              My work centres on understanding people—not only their symptoms,
              but their experiences, emotions and the context of their lives.
            </p>
            <p className={bodyClass}>
              My style is warm, collaborative and non-judgemental. Sessions move
              at a pace that feels safe, thoughtful and appropriate for each
              person.
            </p>
          </div>
          <div className="mt-10 border-t border-[#C9C4B9] pt-6">
            <h3 className="m-0 text-[12px] tracking-[0.16em] text-[#9D4936]">
              Who Sheetal supports
            </h3>
            <ul className="mt-4 mb-0 grid list-none gap-2 p-0">
              {whoSheetalSupports.map((item) => (
                <li key={item} className="text-[16px] leading-[1.6] text-[#6E6A62]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 mb-0 text-[14px] leading-[1.7] text-[#272620]">
            <span className="text-[12px] tracking-[0.14em] text-[#9D4936]">
              Approach
            </span>
            <br />
            CBT · ACT · Mindfulness-based techniques · Relationship-focused
            approaches
          </p>
          <div className="mt-10">
            <h3 className="m-0 text-[12px] tracking-[0.16em] text-[#9D4936]">
              Training and experience
            </h3>
            <ul className="mt-4 mb-0 list-none p-0">
              {credentials
                .filter((item) => item.kind !== "ethics")
                .map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-[#C9C4B9] py-3 text-[15px] leading-[1.55] text-[#6E6A62]"
                  >
                    {item.label}
                  </li>
                ))}
            </ul>
            <p className="mt-5 mb-0 text-[14px] leading-[1.65] text-[#6E6A62]">
              {credentials.find((item) => item.kind === "ethics")?.label}
            </p>
          </div>
          <CTA className="mt-8">See if this feels like the right space</CTA>
        </Reveal>
      </div>
    </section>
  );
}
