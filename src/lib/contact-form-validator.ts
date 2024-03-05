import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export type TContactForm = z.infer<typeof contactFormSchema>;
