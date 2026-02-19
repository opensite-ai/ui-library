"use client";

import { useMemo } from "react";
import { BannerCountdownSale } from "@opensite/ui/blocks/banner/banner-countdown-sale";

export default function Demo() {
  const endTime = useMemo(
    () => new Date(Date.now() + (18 * 60 * 60 + 34 * 60 + 12) * 1000),
    []
  );

  return (
    <BannerCountdownSale
      endTime={endTime}
      message="Flash access pricing ends in"
      description="Save 40% on annual plans before launch week closes."
      renderTimer={(timeLeft) => (
        <div className="inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 font-mono text-sm font-semibold text-white">
          <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
          <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
          <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
        </div>
      )}
      background="primary"
      containerClassName="py-3"
    />
  );
}
