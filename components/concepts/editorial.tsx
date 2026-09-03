import { ArrowRight, ChevronDown, Clock3, LockKeyhole } from "lucide-react";

import { CTA } from "@/components/site/cta";
import { Enquiry } from "@/components/site/enquiry";
import { Eyebrow } from "@/components/site/eyebrow";
import { Footer } from "@/components/site/footer";
import { Mark } from "@/components/site/mark";
import { SiteNav } from "@/components/site/site-nav";
import { Trust } from "@/components/site/trust";
import {
  credentials,
  editorialOffers,
  faqs,
  processSteps,
  WHATSAPP_URL,
} from "@/lib/site";
import { conceptH2, navLinkClass, sectionX } from "@/lib/styles";
import { cn } from "@/lib/utils";

const navCtaClass = "max-[900px]:min-h-[42px] max-[900px]:px-3.5";

export function Editorial() {
  return (
    <main
      className="overflow-hidden bg-[#f5f2eb] text-[#24231f] [&_em]:font-normal [&_em]:text-[#a8523d]"
      id="top"
    >
      <SiteNav hoverable>
        <Mark />
        <div className="flex gap-9 max-[900px]:hidden">
          <a href="#support" className={navLinkClass}>
            How we can help
          </a>
          <a href="#approach" className={navLinkClass}>
            Your counsellor
          </a>
          <a href="#visit" className={navLinkClass}>
            Locations
          </a>
          <a href="#questions" className={navLinkClass}>
            FAQs
          </a>
        </div>
        <CTA className={navCtaClass}>Book a session</CTA>
      </SiteNav>

      <section className="mx-auto grid min-h-[720px] max-w-[1380px] grid-cols-[0.88fr_1.12fr] items-center gap-[72px] px-9 pt-[42px] pb-[86px] max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:pt-[35px] max-[900px]:pb-20 max-[560px]:gap-[35px]">
        <div className="relative z-[2]">
          <Eyebrow className="animate-soft-rise">
            THERAPY & COUNSELLING · SINGAPORE
          </Eyebrow>
          <h1 className="animate-soft-rise mx-0 mt-[25px] mb-7 font-serif text-[clamp(56px,5.6vw,82px)] font-normal leading-[0.94] tracking-[-0.052em] delay-[80ms] max-[900px]:text-[52px] max-[560px]:text-[43px]">
            Support for
            <br />
            <em>what life is</em>
            <br />
            asking of you.
          </h1>
          <p className="animate-soft-rise max-w-[540px] font-serif text-[18px] font-normal leading-[1.65] text-[#625e55] delay-[150ms]">
            For individuals, couples and families who need a calm, confidential
            place to pause, understand and move forward.
          </p>
          <div className="animate-soft-rise mt-9 flex items-center gap-7 delay-[220ms] max-[560px]:flex-col max-[560px]:items-start">
            <CTA>Begin with a private enquiry</CTA>
            <a
              href="#support"
              className="flex gap-2 text-[13px] text-inherit"
            >
              Explore support <ArrowRight />
            </a>
          </div>
          <small className="animate-soft-rise mt-[17px] flex items-center gap-2 text-[#777267]">
            <LockKeyhole className="size-[14px]" />
            Online and in-person · Two central locations
          </small>
        </div>
        <div className="group animate-soft-rise-hero relative h-[620px] overflow-visible after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#342d2510,transparent_45%)] after:content-[''] max-[900px]:h-[500px] max-[560px]:h-[410px]">
          <img
            src="/clarity-room.png"
            alt="A quiet counselling space overlooking Singapore"
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.025]"
          />
          <div className="absolute top-[62px] left-[-58px] z-[2] bg-[#f5f2ebcc] p-[18px_24px] font-serif text-[16px] font-normal leading-[1.4] backdrop-blur-[12px] max-[900px]:left-3">
            A space to
            <br />
            <i className="text-[24px] text-[#a8523d]">feel heard.</i>
          </div>
          <div className="absolute right-[-22px] bottom-8 z-[2] grid size-[135px] place-content-center rounded-full bg-[#282722] text-center text-[#f4efe5] transition-transform duration-[450ms] hover:scale-[1.04] hover:rotate-[-4deg] max-[900px]:right-3">
            <span className="font-serif text-[29px] font-normal">500+</span>
            <small className="max-w-20 text-[10px] leading-[1.3]">
              Counselling sessions
            </small>
          </div>
        </div>
      </section>

      <Trust />

      <section
        className="mx-auto grid max-w-[1260px] grid-cols-[0.67fr_1.33fr] gap-[100px] px-6 py-[115px] max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-20 max-[560px]:gap-[35px]"
        id="support"
      >
        <div className="sticky top-[105px] self-start max-[900px]:static">
          <Eyebrow>WAYS WE CAN WORK TOGETHER</Eyebrow>
          <h2 className={cn(conceptH2, "mt-[22px] mb-[25px]")}>
            Start with what
            <br />
            feels closest.
          </h2>
          <p className="max-w-[350px] leading-[1.7] text-[#6d695f]">
            You do not need to know the clinical name for what you are
            experiencing.
          </p>
        </div>
        <div>
          {editorialOffers.map((offer, index) => (
            <a
              href={WHATSAPP_URL}
              key={offer.id}
              className={cn(
                "grid grid-cols-[48px_1fr_42px] items-center gap-[18px] border-t border-[#c9c4b9] py-7 text-inherit no-underline transition-[padding,background-color] duration-300 hover:bg-white/60 hover:pl-[18px] hover:[&>svg]:translate-x-1.5 [&>svg]:w-5 [&>svg]:transition-transform [&>svg]:duration-300",
                index === 0 && "bg-[#e8dfd3] px-[18px]",
              )}
            >
              <span className="text-[10px] text-[#a8523d]">{offer.id}</span>
              <div>
                <h3 className="mb-[5px] font-serif text-[26px] font-normal">
                  {offer.title}
                </h3>
                <b className="text-[13px] font-medium text-[#5d594f]">
                  {offer.lead}
                </b>
                <p className="mt-[7px] mb-0 text-[13px] leading-[1.6] text-[#7b766c]">
                  {offer.body}
                </p>
              </div>
              <ArrowRight />
            </a>
          ))}
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-[1.04fr_0.96fr] items-center gap-[90px] bg-[#ded8cd] py-[105px] text-[#292822]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-20",
        )}
      >
        <div className="group relative h-[620px] overflow-hidden max-[900px]:h-[520px] max-[560px]:h-[430px]">
          <img
            src="/therapy-conversation.png"
            alt="A private and supportive counselling conversation"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.035]"
          />
          <span className="absolute bottom-0 left-0 bg-[#eee9df] px-5 py-3.5 text-[11px] tracking-[0.08em] text-[#262722]">
            Private · Respectful · At your pace
          </span>
        </div>
        <div>
          <Eyebrow>SUPPORT FOR THOSE WHO HEAL</Eyebrow>
          <h2 className="mx-0 my-6 font-serif text-[clamp(56px,6vw,88px)] font-normal leading-[1.02] tracking-[-0.045em]">
            You matter,
            <br />
            <em>too.</em>
          </h2>
          <p className="max-w-[510px] text-[16px] leading-[1.8] text-[#625f57]">
            Medical practitioners carry the emotional weight of high-stakes
            decisions, demanding hours and caring for others. Sheetal’s own
            medical background creates a place where that reality does not need
            to be explained from the beginning.
          </p>
          <CTA className="mt-6 border-[#292822] bg-[#292822] text-[#f5f1e9]">
            Enquire confidentially
          </CTA>
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-[1fr_0.88fr_0.55fr] items-start gap-[70px] py-[120px]",
          sectionX,
          "max-[900px]:grid-cols-2 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-20 max-[560px]:grid-cols-1",
        )}
        id="approach"
      >
        <div className="max-[900px]:col-span-full max-[560px]:col-auto">
          <Eyebrow>YOUR COUNSELLOR</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(48px,5vw,72px)] font-normal leading-[1.02] tracking-[-0.045em]">
            Medical understanding.
            <br />
            <em>Grounded human care.</em>
          </h2>
        </div>
        <div>
          <p className="font-serif text-[21px] font-normal leading-[1.65] text-[#34322d] first-letter:float-left first-letter:pt-[9px] first-letter:pr-2.5 first-letter:font-serif first-letter:text-[75px] first-letter:leading-[0.78] first-letter:text-[#a8523d]">
            I am Sheetal Singhania, a counsellor and former paediatric doctor
            with a Master’s in Counselling.
          </p>
          <p className="text-[16px] leading-[1.8] text-[#666158]">
            My work has always centred around understanding people—not just
            their symptoms, but their experiences, emotions and the context of
            their lives.
          </p>
          <p className="text-[16px] leading-[1.8] text-[#666158]">
            My style is warm, collaborative and non-judgemental. Sessions
            integrate CBT, ACT, mindfulness-based techniques and
            relationship-focused approaches around your individual needs.
          </p>
          <a
            href={WHATSAPP_URL}
            className="mt-5 inline-flex items-center gap-2.5 text-[13px] text-inherit underline-offset-[6px] [&>svg]:w-4"
          >
            See if this feels like the right space <ArrowRight />
          </a>
        </div>
        <aside className="border-t border-[#bfb9ad] pt-5">
          <p className="text-[11px] tracking-[0.12em]">Training & experience</p>
          <ul className="mt-[25px] mb-0 list-none p-0">
            {credentials.map((item) => (
              <li
                key={item}
                className="border-b border-[#d5d0c6] py-3 text-[12px] leading-[1.5]"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section
        className={cn(
          "relative bg-[#35352f] py-[105px] text-[#f0ebe2]",
          sectionX,
          "max-[900px]:px-5 max-[900px]:py-[100px]",
        )}
      >
        <Eyebrow className="text-[#c68a78]">EXPERIENCES OF SUPPORT</Eyebrow>
        <div className="mx-auto mt-[55px] max-w-[920px] text-center">
          <span className="font-serif text-[100px] leading-[0] font-normal text-[#f5c3b1]">
            “
          </span>
          <blockquote className="my-[30px] font-serif text-[clamp(30px,3.4vw,46px)] font-normal leading-[1.3]">
            I felt heard and understood from the very first session. The space
            felt calm, safe and genuinely supportive.
          </blockquote>
          <small className="text-[10px] tracking-[0.13em] text-[#aaa69f]">
            ANONYMOUS CLIENT FEEDBACK · SHARED WITH PERMISSION
          </small>
        </div>
        <div className="mt-[95px] grid grid-cols-2 gap-[90px] border-t border-[#ffffff50] pt-7 max-[560px]:grid-cols-1 max-[560px]:gap-[22px]">
          <p className="m-0 font-serif text-[17px] font-normal leading-[1.55] text-[#c9c5bd]">
            “The sessions helped me make sense of things I had been struggling
            with for a long time.”
          </p>
          <p className="m-0 font-serif text-[17px] font-normal leading-[1.55] text-[#c9c5bd]">
            “A thoughtful and grounded approach that helped me move forward with
            more clarity.”
          </p>
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-2 gap-[110px] py-[115px]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-20",
        )}
      >
        <div className="sticky top-[105px] self-start max-[900px]:static">
          <Eyebrow>A SIMPLE, COMFORTABLE PROCESS</Eyebrow>
          <h2 className={cn(conceptH2, "mt-[22px]")}>
            No pressure to
            <br />
            have it all figured out.
          </h2>
        </div>
        <ol className="m-0 list-none p-0">
          {processSteps.map((step) => (
            <li
              key={step.id}
              className="grid grid-cols-[55px_1fr] gap-[22px] border-t border-[#c6c1b6] py-[26px] transition-transform duration-300 hover:translate-x-2"
            >
              <span className="text-[10px] text-[#a8523d]">{step.id}</span>
              <div>
                <h3 className="mb-2 font-serif text-[23px] font-normal">
                  {step.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.6] text-[#6d695f]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={cn(
          "grid grid-cols-3 gap-[22px] bg-[#ded7cb] py-[110px]",
          sectionX,
          "max-[900px]:grid-cols-2 max-[900px]:px-5 max-[900px]:py-[95px] max-[560px]:grid-cols-1",
        )}
        id="visit"
      >
        <header className="col-span-full mb-10 grid grid-cols-[0.5fr_1.5fr] max-[900px]:grid-cols-1 max-[560px]:mb-[15px]">
          <Eyebrow>CHOOSE A CALM SPACE</Eyebrow>
          <h2 className={conceptH2}>
            Central, discreet
            <br />
            and easy to reach.
          </h2>
        </header>
        <div className="min-h-[290px] bg-[#f6f2ea] p-[38px] transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-[7px] hover:shadow-[0_24px_50px_#4b40311a]">
          <span className="text-[10px] tracking-[0.12em]">
            01 · CBD / TANJONG PAGAR
          </span>
          <h3 className="mt-[55px] mb-4 font-serif text-[31px] font-normal">
            International Plaza
          </h3>
          <p className="text-[14px] leading-[1.7]">
            10 Anson Road, #28-14
            <br />
            Singapore 079903
          </p>
          <b className="mt-[30px] block text-[11px] font-medium">
            EW15 Tanjong Pagar · Exit C
          </b>
        </div>
        <div className="min-h-[290px] bg-[#6f5b51] p-[38px] text-[#fff8ef] transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-[7px] hover:shadow-[0_24px_50px_#4b40311a]">
          <span className="text-[10px] tracking-[0.12em]">
            02 · CITY HALL / CIVIC DISTRICT
          </span>
          <h3 className="mt-[55px] mb-4 font-serif text-[31px] font-normal">
            High Street Centre
          </h3>
          <p className="text-[14px] leading-[1.7]">
            1 North Bridge Road, #01-48
            <br />
            Singapore 179094
          </p>
          <b className="mt-[30px] block text-[11px] font-medium">
            NE5 Clarke Quay · EW13 City Hall
          </b>
        </div>
        <div className="flex items-center gap-[18px] border-t border-[#aaa195] p-[30px] max-[900px]:col-span-full max-[560px]:col-auto">
          <Clock3 className="size-6 text-[#a8523d]" />
          <p className="text-[13px] leading-[1.6]">
            <b>Prefer to stay at home?</b>
            <br />
            Secure online sessions offer the same care, structure and
            confidentiality.
          </p>
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-2 gap-[100px] bg-[#f7f4ed] py-[120px]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-[90px] max-[560px]:gap-10",
        )}
        id="questions"
      >
        <div>
          <Eyebrow>BEFORE YOU REACH OUT</Eyebrow>
          <h2 className={conceptH2}>
            A little clarity can make the first step easier.
          </h2>
          <p className="leading-[1.7] text-[#6e6a62]">
            You are welcome to ask questions before deciding whether counselling
            feels right.
          </p>
        </div>
        <div>
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="border-t border-[#c7c2b8] py-5"
            >
              <summary className="flex cursor-pointer list-none justify-between font-serif text-[19px] font-normal [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown />
              </summary>
              <p className="text-[14px] leading-[1.7] text-[#6e6a62]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-[1fr_0.78fr] items-center gap-[130px] bg-[#262721] py-[125px] text-[#efebe2]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-20 max-[560px]:gap-[45px]",
        )}
      >
        <div>
          <Eyebrow className="text-[#d98167]">A GENTLE FIRST STEP</Eyebrow>
          <h2 className={conceptH2}>
            You can begin with
            <br />
            one short message.
          </h2>
          <p className="font-serif text-[18px] font-normal text-[#aaa79e]">
            You deserve support and a space that feels safe.
          </p>
        </div>
        <Enquiry />
      </section>

      <Footer />
    </main>
  );
}
