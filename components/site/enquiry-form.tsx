"use client";

import { useMemo, useState, type FormEvent } from "react";

import {
  EMAIL,
  enquiryHelpOptions,
  WHATSAPP_NUMBER,
  type ContactMethod,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const methods: { id: ContactMethod; label: string }[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
];

type FormState = {
  firstName: string;
  method: ContactMethod | "";
  contact: string;
  help: string;
  message: string;
  consent: boolean;
};

const empty: FormState = {
  firstName: "",
  method: "",
  contact: "",
  help: "",
  message: "",
  consent: false,
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value: string) {
  return /^[+0-9()\s-]{8,}$/.test(value);
}

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const contactLabel = useMemo(() => {
    if (form.method === "email") return "Email address";
    if (form.method === "phone") return "Phone number";
    return "WhatsApp number";
  }, [form.method]);

  function validate() {
    if (!form.firstName.trim()) return "Please share a first name we can use.";
    if (!form.method) return "Please choose how you would prefer to be reached.";
    if (!form.contact.trim()) return "Please add a contact detail.";
    if (form.method === "email" && !isEmail(form.contact.trim())) {
      return "Please enter an email address we can reply to.";
    }
    if ((form.method === "phone" || form.method === "whatsapp") && !isPhone(form.contact.trim())) {
      return "Please enter a phone number we can use.";
    }
    if (!form.help) return "Please choose what would feel most helpful, even if you are unsure.";
    if (!form.consent) return "Please confirm you are comfortable sending this enquiry.";
    return "";
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validate();
    setError(nextError);
    if (nextError) return;

    const lines = [
      `Hello Sheetal, my name is ${form.firstName.trim()}.`,
      `I am looking for ${form.help}.`,
    ];
    if (form.message.trim()) lines.push(form.message.trim());
    lines.push(`Preferred contact: ${form.method} ${form.contact.trim()}`);
    const text = lines.join(" ");

    if (form.method === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else if (form.method === "email") {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Private enquiry")}&body=${encodeURIComponent(text)}`;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[#C9C4B9] bg-white p-8">
        <p className="m-0 font-serif text-[26px] text-[#272620]">Thank you.</p>
        <p className="mt-3 mb-0 text-[16px] leading-[1.7] text-[#6E6A62]">
          {form.method === "phone"
            ? "Your enquiry is ready. You can wait to hear from Sheetal, or send the same note by WhatsApp or email if that feels easier."
            : "Your message is ready to send privately. Share only what still feels comfortable."}
        </p>
      </div>
    );
  }

  const fieldClass =
    "h-12 border border-[#C9C4B9] bg-transparent px-3 text-[16px] text-[#272620] [font:inherit] outline-none transition-colors duration-200 focus:border-[#9D4936]";

  return (
    <form
      className="border border-[#C9C4B9] bg-white p-6 shadow-[0_18px_40px_#2726200d] md:p-8"
      onSubmit={onSubmit}
      noValidate
    >
      <p className="m-0 text-[12px] tracking-[0.16em] text-[#9D4936]">
        PRIVATE ENQUIRY
      </p>
      <div className="mt-6 grid gap-5">
        <label className="grid gap-2 text-[13px] text-[#272620]" htmlFor="first-name">
          First name
          <input
            id="first-name"
            name="firstName"
            autoComplete="given-name"
            className={fieldClass}
            value={form.firstName}
            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
          />
        </label>

        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-2 text-[13px] text-[#272620]">
            Preferred contact method
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {methods.map((method) => (
              <label
                key={method.id}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center justify-center border text-[14px] transition-colors duration-200",
                  form.method === method.id
                    ? "border-[#9D4936] bg-[#F6EDE8] text-[#9D4936]"
                    : "border-[#C9C4B9] text-[#272620]",
                )}
              >
                <input
                  type="radio"
                  name="method"
                  value={method.id}
                  className="sr-only"
                  checked={form.method === method.id}
                  onChange={() => setForm({ ...form, method: method.id, contact: "" })}
                />
                {method.label}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid gap-2 text-[13px] text-[#272620]" htmlFor="contact-detail">
          {contactLabel}
          <input
            id="contact-detail"
            name="contact"
            className={fieldClass}
            value={form.contact}
            onChange={(event) => setForm({ ...form, contact: event.target.value })}
            inputMode={form.method === "email" ? "email" : "tel"}
            autoComplete={form.method === "email" ? "email" : "tel"}
          />
        </label>

        <label className="grid gap-2 text-[13px] text-[#272620]" htmlFor="help">
          What would feel most helpful?
          <select
            id="help"
            name="help"
            className={fieldClass}
            value={form.help}
            onChange={(event) => setForm({ ...form, help: event.target.value })}
          >
            <option value="" disabled>
              Choose one
            </option>
            {enquiryHelpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-[13px] text-[#272620]" htmlFor="message">
          Optional message
          <textarea
            id="message"
            name="message"
            rows={4}
            className="resize-y border border-[#C9C4B9] bg-transparent p-3 text-[16px] text-[#272620] [font:inherit] outline-none transition-colors duration-200 focus:border-[#9D4936]"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>

        <label className="flex items-start gap-3 text-[14px] leading-[1.55] text-[#6E6A62]" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 size-4 accent-[#9D4936]"
            checked={form.consent}
            onChange={(event) => setForm({ ...form, consent: event.target.checked })}
          />
          <span>
            I am comfortable sending this private enquiry. See the{" "}
            <a href="/privacy-policy" className="text-[#272620] underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>

      {error ? (
        <p className="mt-4 mb-0 text-[14px] leading-[1.6] text-[#9D4936]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 border-0 bg-[#272620] text-[14px] text-white transition-colors duration-200 hover:bg-[#9D4936]"
      >
        Continue privately
      </button>
    </form>
  );
}
