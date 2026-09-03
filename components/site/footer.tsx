import { EMAIL, PHONE_DISPLAY, PHONE_TEL, socialLinks, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import { sectionX } from "@/lib/styles";

import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#C9C4B9] bg-[#F7F5EF] pb-24 md:pb-0">
      <div className={`${sectionX} mx-auto grid max-w-[1180px] gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <Logo href="/" />
          <p className="mt-6 mb-0 font-serif text-[22px] text-[#272620]">
            The Ember Practice Pte Ltd
          </p>
          <p className="mt-2 mb-0 max-w-[28rem] text-[16px] leading-[1.7] text-[#6E6A62]">
            Therapy and counselling in Singapore. A calm, confidential place to
            pause, understand and move forward.
          </p>
        </div>
        <div className="grid gap-3 text-[15px] md:justify-items-end md:text-right">
          <a href={`mailto:${EMAIL}`} className="text-[#272620] no-underline hover:text-[#9D4936]">
            {EMAIL}
          </a>
          <a href={PHONE_TEL} className="text-[#272620] no-underline hover:text-[#9D4936]">
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[#272620] no-underline hover:text-[#9D4936]"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#6E6A62] no-underline hover:text-[#9D4936]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={`${sectionX} mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-[#C9C4B9] py-6 text-[13px] text-[#6E6A62] md:flex-row md:items-center md:justify-between`}>
        <p className="m-0">© 2026 The Ember Practice Pte Ltd</p>
        <p className="m-0">
          <a href="/privacy-policy" className="text-inherit no-underline hover:text-[#9D4936]">
            Privacy Policy
          </a>
          <span aria-hidden="true"> · </span>
          Not a crisis service
        </p>
      </div>
      <p className={`${sectionX} mx-auto max-w-[1180px] pb-8 text-[13px] leading-[1.6] text-[#6E6A62]`}>
        If you are in immediate danger, please seek local emergency help. This
        practice is not an emergency or crisis service.
      </p>
    </footer>
  );
}
