import { z } from "zod";
import { sanitizePlainText } from "@/lib/utils/sanitize";

const requiredText = (max: number) =>
  z.string().trim().min(2).max(max).transform((value) => sanitizePlainText(value));

export const contactFormSchema = z.object({
  name: requiredText(80),
  email: z.email().max(120).transform((value) => sanitizePlainText(value.toLowerCase())),
  message: z.string().trim().min(10).max(1500).transform((value) => sanitizePlainText(value)),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
