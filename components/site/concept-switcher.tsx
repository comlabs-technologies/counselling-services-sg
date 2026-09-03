"use client";

import type { ReactNode } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function ConceptSwitcher({
  editorial,
  guided,
  clinical,
}: {
  editorial: ReactNode;
  guided: ReactNode;
  clinical: ReactNode;
}) {
  return (
    <Tabs defaultValue="editorial" className="block gap-0">
      <div className="sticky top-0 z-50 flex h-16 items-center justify-center gap-7 border-b border-[#ffffff20] bg-[#151512] px-6 py-2.5 text-white max-[900px]:relative max-[900px]:grid max-[900px]:h-auto max-[900px]:gap-[7px] max-[900px]:p-2.5">
        <span className="text-[10px] tracking-[0.2em] text-[#ffffff75] max-[900px]:text-center">
          THREE DESIGN DIRECTIONS
        </span>
        <TabsList className="h-11! rounded-full bg-[#ffffff10] p-1 max-[900px]:w-full max-[900px]:overflow-auto">
          <TabsTrigger
            value="editorial"
            className="h-full flex-none rounded-full px-[18px] py-0 text-[13px] text-[#ffffffa8] data-[state=active]:bg-[#f4f0e7] data-[state=active]:text-[#1f1f1b] data-[state=active]:shadow-none max-[900px]:px-3 max-[900px]:text-[11px]"
          >
            01 Editorial Calm
          </TabsTrigger>
          <TabsTrigger
            value="guided"
            className="h-full flex-none rounded-full px-[18px] py-0 text-[13px] text-[#ffffffa8] data-[state=active]:bg-[#f4f0e7] data-[state=active]:text-[#1f1f1b] data-[state=active]:shadow-none max-[900px]:px-3 max-[900px]:text-[11px]"
          >
            02 Guided Start
          </TabsTrigger>
          <TabsTrigger
            value="clinical"
            className="h-full flex-none rounded-full px-[18px] py-0 text-[13px] text-[#ffffffa8] data-[state=active]:bg-[#f4f0e7] data-[state=active]:text-[#1f1f1b] data-[state=active]:shadow-none max-[900px]:px-3 max-[900px]:text-[11px]"
          >
            03 Clinical Atelier
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="editorial">{editorial}</TabsContent>
      <TabsContent value="guided">{guided}</TabsContent>
      <TabsContent value="clinical">{clinical}</TabsContent>
    </Tabs>
  );
}
