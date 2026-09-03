import { ArrowRight } from "lucide-react";

import { CTA } from "@/components/site/cta";
import { Enquiry } from "@/components/site/enquiry";
import { Eyebrow } from "@/components/site/eyebrow";
import { Footer } from "@/components/site/footer";
import { Mark } from "@/components/site/mark";
import { SiteNav } from "@/components/site/site-nav";
import { Trust } from "@/components/site/trust";
import {
  clinicalServices,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/site";
import { conceptH2, navLinkClass, sectionX } from "@/lib/styles";
import { cn } from "@/lib/utils";

const navCtaClass = "max-[900px]:min-h-[42px] max-[900px]:px-3.5";

const proof = [
  ["500+", "Counselling sessions"],
  ["2", "Central locations"],
  ["1:1", "Continuity of care"],
  ["SAC", "Ethical standards"],
] as const;

export function Clinical() {
  return (
    <main className="overflow-hidden bg-[#1e1f1b] text-[#eee8dc]" id="top">
      <SiteNav className="max-w-[1400px]">
        <Mark light />
        <div className="flex gap-9 max-[900px]:hidden">
          <a href="#care" className={navLinkClass}>
            Areas of care
          </a>
          <a href="#sheetal" className={navLinkClass}>
            Your counsellor
          </a>
          <a href="#visit" className={navLinkClass}>
            Visit
          </a>
        </div>
        <CTA pale className={navCtaClass}>
          Confidential enquiry
        </CTA>
      </SiteNav>

      <section className="mx-auto grid min-h-[670px] max-w-[1400px] grid-cols-[0.9fr_1.1fr] items-center gap-[70px] px-[34px] pt-7 pb-[70px] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-[45px] max-[900px]:px-5 max-[900px]:pt-[45px] max-[900px]:pb-[60px]">
        <div>
          <Eyebrow className="text-[#d2795f]">
            THE EMBER PRACTICE · SINGAPORE
          </Eyebrow>
          <h1 className="mx-0 my-6 mb-[30px] font-serif text-[clamp(62px,7vw,102px)] font-normal leading-[0.91] tracking-[-0.055em] max-[900px]:text-[56px]">
            Care for the life
            <br />
            behind the symptoms.
          </h1>
          <p className="max-w-[570px] font-serif text-[20px] font-normal leading-[1.55] text-[#bcb8af]">
            Private, evidence-based counselling for individuals, couples and
            families—grounded in clinical understanding and human connection.
          </p>
          <div className="mt-9 flex items-center gap-7 max-[560px]:flex-col max-[560px]:items-start">
            <CTA pale>Arrange a first conversation</CTA>
            <a
              href={PHONE_TEL}
              className="flex gap-2 text-[13px] text-inherit"
            >
              or call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="relative h-[570px] max-[900px]:h-[450px]">
          <img
            src="/therapy-room.png"
            alt="A discreet modern therapy room"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-6 bottom-[25px] grid grid-cols-[18px_1fr] items-center gap-3 bg-white px-[22px] py-[17px] text-[11px] leading-[1.55] text-[#272620] shadow-[0_18px_45px_#33291d24]">
            <span className="row-span-2 size-[7px] self-center rounded-full bg-[#5fa984] shadow-[0_0_0_5px_#5fa98422]" />
            Appointments available
            <br />
            <b className="text-[13px] font-medium">Online & in person</b>
          </div>
        </div>
      </section>

      <Trust dark />

      <section
        className={cn(
          "grid grid-cols-2 gap-[100px] py-[120px]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-[90px]",
        )}
        id="care"
      >
        <div>
          <Eyebrow className="text-[#d2795f]">AREAS OF CARE</Eyebrow>
          <h2 className={conceptH2}>Space for what matters now.</h2>
          <p className="leading-[1.75] text-[#aaa79f]">
            Support is tailored—not templated—to your circumstances, needs and
            pace.
          </p>
        </div>
        <div>
          {clinicalServices.map(([title, body], index) => (
            <article
              key={title}
              className="grid grid-cols-[55px_1fr_42px] items-center gap-5 border-t border-[#ffffff26] py-[26px]"
            >
              <span className="text-[10px] text-[#d1765c]">0{index + 1}</span>
              <div>
                <h3 className="mb-[7px] font-serif text-[25px] font-normal">
                  {title}
                </h3>
                <p className="m-0 text-[13px] text-[#aaa79f]">{body}</p>
              </div>
              <a
                href={WHATSAPP_URL}
                className="grid size-[38px] place-items-center border border-[#ffffff38] text-[#eee8dc]"
              >
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-2 gap-[100px] bg-[#d6c7b4] py-[120px] text-[#25251f]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-[90px]",
        )}
        id="sheetal"
      >
        <div>
          <span className="text-[10px] tracking-[0.14em]">
            MBBS · MRCPCH (UK) · MASTER’S IN COUNSELLING
          </span>
          <h2 className={conceptH2}>A rare perspective on care.</h2>
          <p className="leading-[1.75] text-[#5a554d]">
            Before becoming a counsellor, Sheetal Singhania worked as a
            paediatric doctor in the United Kingdom. Today, she integrates that
            clinical foundation with CBT, ACT, mindfulness and
            relationship-focused therapy.
          </p>
          <CTA pale className="mt-5 border-[#25251f] bg-[#25251f] text-white">
            Read Sheetal’s approach
          </CTA>
        </div>
        <blockquote className="m-0 self-center border-l border-[#8f8475] pl-[45px] font-serif text-[35px] leading-[1.35] italic max-[900px]:text-[28px]">
          “Understanding people—not just their symptoms, but their experiences
          and the context of their lives.”
        </blockquote>
      </section>

      <section className="mx-auto grid max-w-[1260px] grid-cols-4 px-6 py-[100px] max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[900px]:px-5 max-[900px]:py-[70px] max-[560px]:grid-cols-1">
        {proof.map(([value, label], index) => (
          <div
            key={label}
            className={cn(
              "grid border-r border-[#ffffff28] pl-[30px] max-[900px]:border-0 max-[900px]:pl-0",
              index === 0 && "pl-0",
              index === proof.length - 1 && "border-0",
            )}
          >
            <strong className="font-serif text-[42px] font-normal">
              {value}
            </strong>
            <span className="mt-2 text-[11px] text-[#9f9c95]">{label}</span>
          </div>
        ))}
      </section>

      <section
        className={cn(
          "mx-auto grid max-w-[1260px] grid-cols-2 items-center gap-[100px] border-t border-[#ffffff26] px-6 py-[120px]",
          "max-[900px]:mx-5 max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-0 max-[900px]:py-[90px]",
        )}
        id="visit"
      >
        <div>
          <Eyebrow className="text-[#d2795f]">YOUR FIRST SESSION</Eyebrow>
          <h2 className={conceptH2}>
            Clear, discreet,
            <br />
            at your pace.
          </h2>
          <p className="leading-[1.75] text-[#aaa79f]">
            Begin with a short enquiry. You’ll hear directly from Sheetal about
            availability, format and whether the practice feels like the right
            fit.
          </p>
        </div>
        <Enquiry dark />
      </section>

      <Footer dark />
    </main>
  );
}
