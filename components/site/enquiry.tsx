"use client";

import { ArrowRight, LockKeyhole } from "lucide-react";
import type { FormEvent } from "react";

import { enquiryOptions, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Enquiry({ dark = false }: { dark?: boolean }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(WHATSAPP_URL, "_blank");
  }

  return (
    <form
      className={cn(
        "bg-white p-8 text-[#272620] shadow-[0_24px_60px_#463d2f18]",
        dark &&
          "border border-[#ffffff20] bg-[#2a2b26] text-[#eee8dc] shadow-none",
      )}
      onSubmit={onSubmit}
    >
      <div className="flex justify-between text-[11px] tracking-[0.15em] text-[#9d4936]">
        <span>PRIVATE ENQUIRY</span>
        <LockKeyhole className="size-[17px]" />
      </div>
      <h3 className="mx-0 mt-7 mb-2.5 font-serif text-[27px] font-normal">
        You don’t need the right words.
      </h3>
      <p className="text-[13px] leading-[1.6] text-[#6c685f]">
        Share only what feels comfortable. Sheetal will reply personally.
      </p>
      <label className="mt-5 grid gap-[7px] text-[11px] tracking-[0.05em]">
        Your name
        <input
          required
          placeholder="How should we address you?"
          className={cn(
            "h-[46px] border border-[#d2cec5] bg-transparent px-[13px] [font:inherit] text-inherit",
            dark && "border-[#ffffff30]",
          )}
        />
      </label>
      <label className="mt-5 grid gap-[7px] text-[11px] tracking-[0.05em]">
        What would feel most helpful?
        <select
          defaultValue=""
          className={cn(
            "h-[46px] border border-[#d2cec5] bg-transparent px-[13px] [font:inherit] text-inherit",
            dark && "border-[#ffffff30] bg-[#2a2b26]",
          )}
        >
          <option value="" disabled>
            Choose one
          </option>
          {enquiryOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <button
        className={cn(
          "mt-5 flex h-[51px] w-full cursor-pointer items-center justify-center gap-3.5 border-0 bg-[#272620] text-white",
          dark && "bg-[#eee8dc] text-[#25251f]",
        )}
      >
        Start a private conversation <ArrowRight className="size-[17px]" />
      </button>
      <small className="mt-3 block text-center text-[#7b776e]">
        No commitment. No clinical details required.
      </small>
    </form>
  );
}
