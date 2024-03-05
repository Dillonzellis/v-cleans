"use client";

import { sendEmail } from "@/actions/sendEmail";

export const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        await sendEmail(formData);
      }}
    >
      <input name="senderEmail" type="senderEmail" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message" />
      <button type="submit">Send</button>
    </form>
  );
};
