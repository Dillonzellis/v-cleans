"use client";

import { sendEmail, confirmationEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

const test = () => {
  console.log("test");
};

export const ContactForm = () => {
  return (
    <form
      // action={async (formData) => {
      //   await sendEmail(formData);
      //   await confirmationEmail(formData);
      // }}
      action={test}
    >
      <input name="senderEmail" type="senderEmail" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message" />
      <button
        type="submit"
        onClick={() => {
          toast("Ayoo big toast");
        }}
      >
        Send
      </button>
    </form>
  );
};
