import Image from "next/image";
import { Clock3 } from "lucide-react";

import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { locations } from "@/lib/site";
import { h2Class, sectionInner, sectionX, sectionY } from "@/lib/styles";

export function Locations() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className={`scroll-mt-24 bg-[#DED8CD] ${sectionX} ${sectionY}`}
    >
      <div className={sectionInner}>
        <Reveal className="grid items-end gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Eyebrow>Choose a calm space</Eyebrow>
            <h2 id="locations-heading" className={`${h2Class} mt-5`}>
              Central, discreet and easy to reach.
            </h2>
          </div>
          <Image
            src="/images/ember/locations-map-pins.webp"
            alt="Map showing The Ember Practice’s two central Singapore locations"
            width={1400}
            height={900}
            className="h-[220px] w-full object-cover object-center md:h-[280px]"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {locations.map((location) => (
            <Reveal key={location.name}>
              <article className="flex h-full flex-col bg-[#F7F5EF]">
                <Image
                  src={location.image}
                  alt={`${location.name} in Singapore`}
                  width={512}
                  height={512}
                  className="h-[280px] w-full object-cover md:h-[320px]"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="m-0 font-serif text-[28px] font-normal text-[#272620]">
                    {location.name}
                  </h3>
                  <p className="mt-4 mb-0 text-[16px] leading-[1.7] text-[#6E6A62]">
                    {location.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <ul className="mt-4 mb-0 list-none p-0 text-[13px] tracking-[0.04em] text-[#272620]">
                    {location.mrt.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 mb-0 text-[15px] leading-[1.65] text-[#6E6A62]">
                    {location.description}
                  </p>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-12 w-fit items-center text-[14px] text-[#272620] underline decoration-[#C9C4B9] underline-offset-4 hover:text-[#9D4936]"
                  >
                    Open in Maps
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 flex items-start gap-4 border border-[#C9C4B9] bg-[#F7F5EF] p-6 md:items-center">
          <Clock3 className="mt-0.5 size-6 shrink-0 text-[#9D4936]" aria-hidden="true" />
          <p className="m-0 text-[16px] leading-[1.7] text-[#272620]">
            <strong className="font-medium">Prefer to stay at home?</strong>
            {" "}
            Secure online sessions offer the same care, structure and
            confidentiality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
