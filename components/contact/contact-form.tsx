"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { TurnstileWidget } from "./turnstile-widget";
import { SERVICE_TYPES } from "@/lib/constants";

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP",
  "1–2 weeks",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  honeypot: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  serviceType: "",
  budgetRange: "",
  timeline: "",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-success/30 bg-success/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-success">Message Sent</h3>
        <p className="mt-2 text-text-secondary">
          Thank you for reaching out. We&rsquo;ll get back to you within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="honeypot">Leave empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Required fields */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            minLength={2}
            maxLength={100}
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder-text-muted transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
            Work Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder-text-muted transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-secondary">
            Company <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            maxLength={100}
            value={form.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder-text-muted transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">
            Phone <span className="text-text-muted">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={30}
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder-text-muted transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text-secondary">
          Service Type <span className="text-red-400">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={form.serviceType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-text-secondary">
            Budget Range <span className="text-text-muted">(optional)</span>
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          >
            <option value="">Prefer not to say</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-text-secondary">
            Timeline <span className="text-text-muted">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          >
            <option value="">No preference</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
          Project Summary <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary placeholder-text-muted transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          placeholder="Tell us about your project, current challenges, and goals..."
        />
      </div>

      <TurnstileWidget onVerify={handleTurnstileVerify} />

      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
