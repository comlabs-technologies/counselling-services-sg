import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/site";
import { sectionX } from "@/lib/styles";

const featured = testimonials.find((item) => item.featured)!;
const supporting = testimonials.filter((item) => !item.featured);

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#35352F] text-[#F0EBE2]"
    >
      <div className={`${sectionX} mx-auto max-w-[980px] py-20 md:py-24`}>
        <Reveal>
          <h2
            id="testimonials-heading"
            className="m-0 text-[12px] font-medium tracking-[0.16em] text-[#C9A396]"
          >
            Experiences of support
          </h2>
          <figure className="mx-auto mt-8 mb-0 max-w-[46rem] text-center">
            <blockquote className="m-0 font-serif text-[clamp(1.65rem,3vw,2.35rem)] leading-[1.35] font-normal">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-5 text-[12px] tracking-[0.14em] text-[#C4BEB4]">
              Anonymous client feedback · Shared with permission
            </figcaption>
          </figure>
        </Reveal>
        <div className="mt-12 grid gap-6 border-t border-white/20 pt-8 md:grid-cols-2 md:gap-12">
          {supporting.map((item) => (
            <p
              key={item.quote}
              className="m-0 font-serif text-[17px] leading-[1.55] text-[#D8D2C8]"
            >
              “{item.quote}”
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
