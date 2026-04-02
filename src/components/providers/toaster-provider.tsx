"use client";

import { Toaster } from "sonner";

export function ToasterProvider() {
  return (
    <Toaster
      richColors
      theme="dark"
      position="top-right"
      toastOptions={{
        className: "!border !border-white/10 !bg-[#0b1d3a] !text-white",
      }}
    />
  );
}
