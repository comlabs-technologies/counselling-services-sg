"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CTA } from "@/components/site/cta";
import { Logo } from "@/components/site/logo";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200",
        scrolled || open
          ? "border-[#C9C4B9]/80 bg-[#F7F5EF] shadow-[0_8px_24px_#2726200d]"
          : "border-transparent bg-[#F7F5EF]/90",
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-5 md:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#272620]/75 no-underline transition-colors duration-200 hover:text-[#9D4936]"
            >
              {link.label}
            </a>
          ))}
          <CTA className="min-h-12">Start a private enquiry</CTA>
        </nav>
        <button
          type="button"
          className="inline-flex size-12 items-center justify-center border border-[#C9C4B9] bg-transparent text-[#272620] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-[#C9C4B9] bg-[#F7F5EF] px-5 py-4 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center text-[16px] text-[#272620] no-underline"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CTA className="w-full" onClick={() => setOpen(false)}>
                Start a private enquiry
              </CTA>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
