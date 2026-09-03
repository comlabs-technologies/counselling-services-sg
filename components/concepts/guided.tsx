import { Check, Heart, LockKeyhole, MessageCircle } from "lucide-react";

import { GuidedChoices } from "@/components/concepts/guided-choices";
import { CTA } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/eyebrow";
import { Footer } from "@/components/site/footer";
import { Mark } from "@/components/site/mark";
import { SiteNav } from "@/components/site/site-nav";
import { Trust } from "@/components/site/trust";
import { guidedLocations, guidedRelief, WHATSAPP_URL } from "@/lib/site";
import { conceptH2, sectionX } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function Guided() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef] text-[#21322e]" id="top">
      <SiteNav className="max-w-[1400px]">
        <Mark />
        <div className="flex items-center gap-[9px] text-[12px] text-[#60706b] max-[900px]:hidden">
          <span className="size-[7px] rounded-full bg-[#5fa984] shadow-[0_0_0_5px_#5fa98422]" />
          Accepting new enquiries
        </div>
        <a
          className="flex items-center gap-[9px] bg-[#21423a] px-5 py-3.5 text-white no-underline [&>svg]:size-[17px]"
          href={WHATSAPP_URL}
        >
          Speak privately <MessageCircle />
        </a>
      </SiteNav>

      <section className="mx-auto grid max-w-[1400px] grid-cols-[1.3fr_0.7fr] gap-[100px] px-[34px] pt-[58px] pb-[90px] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-[45px] max-[900px]:px-5 max-[900px]:pt-[45px] max-[900px]:pb-[60px]">
        <div>
          <Eyebrow className="max-w-[620px] text-[18px] leading-[1.6] text-[#64716d]">
            LET’S MAKE THIS SIMPLE
          </Eyebrow>
          <h1 className="mx-0 my-6 mb-[30px] font-serif text-[clamp(56px,6vw,88px)] font-normal leading-[0.91] tracking-[-0.055em] max-[900px]:text-[56px]">
            What would you like
            <br />
            support with today?
          </h1>
          <p className="max-w-[620px] text-[18px] leading-[1.6] text-[#64716d]">
            You don’t need a diagnosis or a perfect explanation. Pick the
            closest starting point.
          </p>
          <GuidedChoices />
          <small className="mt-3 flex items-center gap-[7px] text-[#7b8581] [&>svg]:size-[14px]">
            <LockKeyhole />
            Takes less than a minute. Share only what feels comfortable.
          </small>
        </div>
        <aside className="self-center bg-[#c86549] p-11 text-white shadow-[18px_18px_0_#e7ded3]">
          <div className="grid size-[72px] place-items-center rounded-full border border-[#ffffff88] font-serif text-[38px] italic">
            S
          </div>
          <p className="mt-[45px] text-[10px] tracking-[0.18em]">
            YOUR COUNSELLOR
          </p>
          <h2 className="mt-2.5 mb-1 font-serif text-[36px] font-normal leading-[1.02] tracking-[-0.045em]">
            Sheetal Singhania
          </h2>
          <p className="text-[13px]">Counsellor & former paediatric doctor</p>
          <hr className="my-[26px] border-0 border-t border-[#ffffff55]" />
          <blockquote className="m-0 font-serif text-[21px] font-normal leading-[1.4]">
            “A warm, collaborative space to feel heard without judgement.”
          </blockquote>
          <ul className="mt-[25px] mb-0 grid list-none gap-2.5 p-0 text-[12px]">
            <li className="flex items-center gap-[9px] [&>svg]:size-[15px]">
              <Check />
              Evidence-based approach
            </li>
            <li className="flex items-center gap-[9px] [&>svg]:size-[15px]">
              <Check />
              Online or central Singapore
            </li>
            <li className="flex items-center gap-[9px] [&>svg]:size-[15px]">
              <Check />
              Adults, couples & families
            </li>
          </ul>
        </aside>
      </section>

      <Trust />

      <section
        className={cn(
          "grid grid-cols-2 gap-[100px] py-[120px]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-[90px]",
        )}
      >
        <div>
          <Eyebrow>YOU MAY BE HERE BECAUSE…</Eyebrow>
          <h2 className={conceptH2}>
            Something that used to feel manageable doesn’t anymore.
          </h2>
        </div>
        <div>
          {guidedRelief.map((item, index) => (
            <article
              key={item}
              className="grid grid-cols-[45px_1fr] border-t border-[#c9cec9] py-5"
            >
              <span className="text-[10px] text-[#af5d46]">0{index + 1}</span>
              <p className="m-0 font-serif text-[19px] font-normal">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={cn(
          "grid grid-cols-2 items-center gap-[100px] bg-[#e5ece7] py-[120px]",
          sectionX,
          "max-[900px]:grid-cols-1 max-[900px]:gap-[55px] max-[900px]:px-5 max-[900px]:py-[90px]",
        )}
      >
        <div className="h-[570px] max-[900px]:h-[430px]">
          <img
            src="/therapy-room.png"
            alt="Private counselling room"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>WHAT TO EXPECT</Eyebrow>
          <h2 className={conceptH2}>
            No pressure to perform.
            <br />
            No judgement. No rush.
          </h2>
          <p className="leading-[1.75] text-[#5f706a]">
            The first session is a conversation. Together, you’ll understand
            what has brought you here and what support may be useful.
          </p>
          <div className="my-7 grid gap-3">
            <span className="flex items-center gap-2.5 text-[13px] [&>svg]:size-4 [&>svg]:text-[#c46c53]">
              <Check />
              You set the pace
            </span>
            <span className="flex items-center gap-2.5 text-[13px] [&>svg]:size-4 [&>svg]:text-[#c46c53]">
              <Check />
              Your goals shape the work
            </span>
            <span className="flex items-center gap-2.5 text-[13px] [&>svg]:size-4 [&>svg]:text-[#c46c53]">
              <Check />
              Questions are always welcome
            </span>
          </div>
          <CTA>Ask Sheetal a question</CTA>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-6 py-[130px] max-[900px]:px-5 max-[900px]:py-[90px]">
        <Eyebrow>MEET YOUR WAY</Eyebrow>
        <h2 className={conceptH2}>Close by, or from home.</h2>
        <div className="mt-[38px] grid grid-cols-3 max-[900px]:grid-cols-1">
          {guidedLocations.map(([id, title, detail]) => (
            <article
              key={id}
              className="mr-[30px] border-t border-[#bbb7ad] pt-6 pr-[45px] pb-2.5"
            >
              <span className="text-[11px] text-[#a64b36]">{id}</span>
              <h3 className="mt-[50px] mb-3 font-serif text-[22px] font-normal">
                {title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#68645b]">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#21423a] px-6 py-[125px] text-center text-[#f4f1e8]">
        <Heart className="mx-auto text-[#da7b61]" />
        <h2 className={cn(conceptH2, "mt-5")}>Start with one short message.</h2>
        <p className="font-serif text-[18px] font-normal text-[#c8d4d0]">
          You can simply say, “I’m looking for support.” That is enough.
        </p>
        <CTA className="mt-5 border-[#f5eee3] bg-[#f5eee3] text-[#21423a]">
          Message Sheetal privately
        </CTA>
      </section>

      <Footer />
    </main>
  );
}
