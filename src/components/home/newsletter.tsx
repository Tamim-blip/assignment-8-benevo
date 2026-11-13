"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.add({
      type: "success",
      title: "You're on the list!",
      description: `We'll send upcoming events to ${email}`,
    });
    setEmail("");
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div
          className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-secondary/30 blur-3xl"
          aria-hidden
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Mail className="size-4" aria-hidden />
              Newsletter
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Never miss an event near you
            </h2>
            <p className="mt-3 max-w-md text-base text-primary-foreground/70 sm:text-lg">
              Get upcoming plantations, blood drives and clean-ups delivered
              straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 w-full rounded-full border-transparent bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 sm:max-w-sm"
            />
            <Button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <p className="relative mt-6 text-xs text-primary-foreground/50">
          No spam — only event updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
