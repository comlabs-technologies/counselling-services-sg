import Image from "next/image";
import { LockKeyhole } from "lucide-react";

import { CTA } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { trustRail } from "@/lib/site";
import { sectionX } from "@/lib/styles";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className={`${sectionX} pb-6 pt-10 md:pt-16`}>
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <Eyebrow>Therapy & counselling · Singapore</Eyebrow>
          <h1
            id="hero-heading"
            className="mt-6 mb-0 font-serif text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] font-normal tracking-[-0.045em] text-[#272620]"
          >
            Support for{" "}
            <em className="font-normal text-[#9D4936]">what life is</em> asking
            of you.
          </h1>
          <p className="mt-6 mb-0 max-w-[34rem] font-serif text-[18px] leading-[1.65] text-[#6E6A62]">
            For individuals, couples and families who need a calm, confidential
            place to pause, understand and move forward.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CTA>Start a private enquiry</CTA>
            <a
              href="#sheetal"
              className="inline-flex min-h-12 items-center text-[14px] text-[#272620] underline decoration-[#C9C4B9] underline-offset-6 hover:text-[#9D4936]"
            >
              Meet Sheetal
            </a>
          </div>
          <p className="mt-5 mb-0 flex items-start gap-2 text-[13px] leading-[1.55] text-[#6E6A62] sm:items-center">
            <LockKeyhole className="mt-0.5 size-3.5 shrink-0 text-[#9D4936] sm:mt-0" aria-hidden="true" />
            Personally answered by Sheetal · No commitment · Share only what feels comfortable
          </p>
        </Reveal>
        <Reveal delayMs={80} className="relative">
          <div className="relative overflow-hidden">
            <Image
              src="/clarity-room.png"
              alt="A quiet counselling room with a calm view over the city"
              width={1672}
              height={941}
              priority
              className="h-[420px] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02] md:h-[560px]"
            />
            <div className="absolute right-4 bottom-4 bg-[#272620] px-5 py-4 text-white md:right-6 md:bottom-6">
              <p className="m-0 font-serif text-[28px] leading-none">500+</p>
              <p className="mt-1 mb-0 max-w-[8rem] text-[12px] leading-[1.35]">
                Counselling sessions
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <ul className="mx-auto mt-10 mb-0 grid max-w-[1180px] list-none grid-cols-1 border-y border-[#C9C4B9] p-0 sm:grid-cols-2 lg:grid-cols-4">
        {trustRail.map((item) => (
          <li
            key={item}
            className="flex min-h-16 items-center justify-center border-[#C9C4B9] px-4 text-center text-[13px] text-[#272620] sm:border-r sm:last:border-r-0 max-sm:border-b max-sm:last:border-b-0 lg:text-[14px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
