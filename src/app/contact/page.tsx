"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const email = "momen.helmy.m@gmail.com";
const github = "https://github.com/Mo2men7";
const linkedin = "https://www.linkedin.com/in/momenhelmyy";

export default function Contact() {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    toast.loading("Sending message...");

    const formData = new FormData(event.target);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
    );

    const [web3Response, telegramResponse] = await Promise.all([
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }),
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }),
    ]);

    const web3Data = await web3Response.json();

    toast.dismiss();

    if (web3Data.success) {
      toast.success("Message sent.", {
        description: "I'll get back to you soon.",
      });
      event.target.reset();
    } else {
      toast.error("Something went wrong.", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-between px-6 py-10 pt-20 md:px-10">
      <div className="flex items-center justify-between text-sm uppercase opacity-40">
        <p>Contact</p>
        <p>Available for freelance</p>
      </div>

      <div className="max-w-[1100px]">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] opacity-50">
          Let’s build something
        </p>

        <h1 className="text-[13vw] uppercase leading-[0.9] tracking-[-0.08em] md:text-[7vw]">
          Got an idea?
          <br />
          Let’s talk.
        </h1>

        <p className="mt-8 max-w-[600px] text-lg leading-relaxed opacity-70">
          Whether you have a project, an opportunity, or just want to connect —
          my inbox is always open.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-16 flex max-w-[700px] flex-col gap-10"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="border-b border-foreground/20 bg-transparent pb-4 text-xl outline-none placeholder:text-foreground/30 focus:border-foreground"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            className="border-b border-foreground/20 bg-transparent pb-4 text-xl outline-none placeholder:text-foreground/30 focus:border-foreground"
          />

          <textarea
            required
            name="message"
            placeholder="Tell me about your project"
            rows={4}
            className="resize-none border-b border-foreground/20 bg-transparent pb-4 text-xl outline-none placeholder:text-foreground/30 focus:border-foreground"
          />

          <button
            type="submit"
            className="mt-6 w-fit rounded-full border border-foreground px-8 py-4 text-sm uppercase transition duration-300 hover:bg-foreground hover:text-background"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-6 text-sm uppercase opacity-40">
        <Link href={`mailto:${email}`}>Email</Link>

        <div className="flex gap-6">
          <Link href={`${github}`} target="_blank">
            Github
          </Link>
          <Link href={`${linkedin}`} target="  _blank">
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
