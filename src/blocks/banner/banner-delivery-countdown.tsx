"use client";

import { useMemo } from "react";
import { BannerDeliveryCountdown } from "@opensite/ui/blocks/banner/banner-delivery-countdown";

export default function Demo() {
  const cutoffTime = useMemo(
    () => new Date(Date.now() + (9 * 60 * 60 + 18 * 60 + 30) * 1000),
    []
  );

  return (
    <BannerDeliveryCountdown
      iconName="lucide/gift"
      prefixText="Order within"
      middleText="for guaranteed delivery by"
      deliveryDate={<strong>Friday, December 20</strong>}
      cutoffTime={cutoffTime}
      background="muted"
      containerClassName="py-3"
      messageClassName="text-foreground"
    />
  );
}
