"use client";

import * as React from "react";
import { ThemeToggleDropdown } from "@/components/theme-toggle";

import {
  Card,

} from "@/components/ui/card"

import { PolygonalChart } from "@/components/use-chart";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ThemeToggleDropdown />
        <Card className="w-[350px]">
          <PolygonalChart/>
        </Card>
      </main>
    </div>
  );
}
