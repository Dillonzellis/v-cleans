"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dillonzellis@gmail.com",
    subject: "Hello",
    html: `<h1>this is dank!</h1><span>${message}</span>`,
  });
};
