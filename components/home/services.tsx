import { CTA } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { corporateWellness, primaryServices, secondaryServices } from "@/lib/site";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-[#DED8CD]">
      <div className={`${sectionX} ${sectionY} mx-auto max-w-[1180px]`}>
        <Reveal>
          <Eyebrow>Ways to work together</Eyebrow>
          <h2 id="services-heading" className={`${h2Class} mt-5`}>
            Three primary paths, held at your pace.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {primaryServices.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 70}>
              <article
                id={service.id}
                className="flex h-full flex-col border border-[#C9C4B9] bg-[#F7F5EF] p-7 scroll-mt-28"
              >
                <span className="text-[12px] tracking-[0.14em] text-[#9D4936]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 mb-3 font-serif text-[28px] font-normal text-[#272620]">
                  {service.title}
                </h3>
                <p className="mt-0 mb-0 text-[16px] leading-[1.7] text-[#6E6A62]">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-4 grid gap-4 border border-[#C9C4B9]/80 bg-[#F7F5EF]/70 md:grid-cols-2">
          {secondaryServices.map((service) => (
            <article key={service.title} className="p-7">
              <h3 className="m-0 font-serif text-[22px] font-normal text-[#272620]">
                {service.title}
              </h3>
              <p className="mt-3 mb-0 text-[16px] leading-[1.7] text-[#6E6A62]">
                {service.body}
              </p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-10 grid items-end gap-6 border-t border-[#272620]/15 pt-10 md:grid-cols-[1.2fr_auto]">
          <div>
            <p className="m-0 text-[12px] tracking-[0.16em] text-[#6E6A62]">
              For organisations
            </p>
            <h3 className="mt-3 mb-3 font-serif text-[28px] font-normal text-[#272620]">
              {corporateWellness.title}
            </h3>
            <p className={`${bodyClass}`}>{corporateWellness.body}</p>
          </div>
          <CTA pale>Enquire confidentially</CTA>
        </Reveal>
      </div>
    </section>
  );
}
