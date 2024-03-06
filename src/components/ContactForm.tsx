"use client";

import { sendEmail, confirmationEmail } from "@/actions/sendEmail";

export const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        await sendEmail(formData);
        await confirmationEmail(formData);
      }}
    >
      <input name="senderEmail" type="senderEmail" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message" />
      <button type="submit">Send</button>
    </form>
  );
};
