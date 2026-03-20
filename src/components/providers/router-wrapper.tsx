"use client";

import { RouterProvider } from "@page-speed/router";
import { ReactNode } from "react";

export function RouterWrapper({ children }: { children: ReactNode }) {
  return <RouterProvider>{children}</RouterProvider>;
}