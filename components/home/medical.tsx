import Image from "next/image";

import { CTA } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { medicalConcerns } from "@/lib/site";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";

export function MedicalSupport() {
  return (
    <section
      id="medical"
      aria-labelledby="medical-heading"
      className="scroll-mt-24 bg-[#DED8CD]"
    >
      <div className={`${sectionX} ${sectionY} mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2`}>
        <Reveal>
          <div className="relative overflow-hidden">
            <Image
              src="/images/ember/medical-professionals-counselling-session.webp"
              alt="A confidential counselling conversation for medical professionals"
              width={1536}
              height={1024}
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] md:h-[540px]"
            />
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow>Support for those who heal</Eyebrow>
          <h2 id="medical-heading" className={`${h2Class} mt-5`}>
            You matter, <em className="font-normal text-[#9D4936]">too.</em>
          </h2>
          <p className={`${bodyClass} mt-6`}>
            Doctors and healthcare professionals often carry pressures that can
            be difficult to explain outside the clinical world—from demanding
            workloads and high-stakes decisions to emotional fatigue and the
            responsibility of caring for others.
          </p>
          <p className={`${bodyClass} mt-4`}>
            As a former paediatric doctor and trained counsellor, Sheetal brings
            an informed understanding of medical culture to the counselling
            space.
          </p>
          <ul className="mt-8 mb-0 grid list-none gap-2 p-0">
            {medicalConcerns.map((item) => (
              <li key={item} className="border-t border-[#C9C4B9] py-3 text-[16px] text-[#272620] last:border-b">
                {item}
              </li>
            ))}
          </ul>
          <CTA className="mt-8">Enquire confidentially</CTA>
        </Reveal>
      </div>
    </section>
  );
}
