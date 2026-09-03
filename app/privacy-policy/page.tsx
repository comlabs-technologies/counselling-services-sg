import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { MobileCta } from "@/components/site/mobile-cta";
import { SkipLink } from "@/components/site/skip-link";
import { EMAIL } from "@/lib/site";
import { bodyClass, h2Class, sectionX, sectionY } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy — The Ember Practice",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" className={`${sectionX} ${sectionY} mx-auto max-w-[760px]`}>
        <h1 className={cn(h2Class, "mt-0 max-w-none")}>Privacy Policy</h1>
        <p className={`${bodyClass} mt-6`}>
          This page explains how The Ember Practice handles the information you
          choose to share through this website.
        </p>
        <h2 className="mt-10 mb-3 font-serif text-[28px] font-normal">
          Private enquiries
        </h2>
        <p className={bodyClass}>
          The enquiry form collects only what you enter: your first name,
          preferred contact method, contact detail, the kind of support you
          select, an optional message, and confirmation that you are comfortable
          sending the enquiry.
        </p>
        <p className={`${bodyClass} mt-4`}>
          If you choose WhatsApp, your browser opens a message to Sheetal using
          the details you typed. If you choose email, your device opens a
          message to {EMAIL}. Phone enquiries are noted so that Sheetal can
          respond personally. No clinical details are required.
        </p>
        <h2 className="mt-10 mb-3 font-serif text-[28px] font-normal">
          How to reach us
        </h2>
        <p className={bodyClass}>
          For privacy questions, please write to{" "}
          <a className="text-[#272620] underline underline-offset-4" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
