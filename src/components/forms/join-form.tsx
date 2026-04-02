"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export function JoinForm() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = (await response.json()) as { error?: string; success?: boolean };

        if (!response.ok) {
          const message = result.error ?? "Unable to send your message right now.";
          setServerError(message);
          toast.error(message);
          return;
        }

        reset();
        toast.success("Your message has been received.");
      } catch {
        const message = "Something went wrong. Please try again in a moment.";
        setServerError(message);
        toast.error(message);
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          Full name
          <input
            {...register("name")}
            className="w-full rounded-2xl border border-white/10 bg-[#091427] px-4 py-3 text-white outline-none"
            placeholder="Your full name"
          />
          {errors.name ? <span className="text-xs text-rose-300">{errors.name.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          Email address
          <input
            {...register("email")}
            className="w-full rounded-2xl border border-white/10 bg-[#091427] px-4 py-3 text-white outline-none"
            placeholder="you@example.com"
            type="email"
          />
          {errors.email ? <span className="text-xs text-rose-300">{errors.email.message}</span> : null}
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        Message
        <textarea
          {...register("message")}
          className="min-h-40 w-full rounded-2xl border border-white/10 bg-[#091427] px-4 py-3 text-white outline-none"
          placeholder="Tell us about your graduation year, profession, or how you would like to reconnect."
        />
        {errors.message ? <span className="text-xs text-rose-300">{errors.message.message}</span> : null}
      </label>
      {serverError ? <p className="text-sm text-rose-300">{serverError}</p> : null}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-300">
          Protected by schema validation, sanitization, and server-side rate limiting.
        </p>
        <Button type="submit" disabled={isPending} className="disabled:cursor-not-allowed disabled:opacity-70">
          {isPending ? "Sending..." : "Submit enquiry"}
        </Button>
      </div>
    </form>
  );
}
