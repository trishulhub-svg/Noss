"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { companySizeOptions, serviceInterestOptions } from "@/lib/site";

type FormState = {
  name: string;
  workEmail: string;
  company: string;
  phone: string;
  companySize: string;
  serviceInterests: string[];
  message: string;
  privacyAcknowledged: boolean;
  marketingConsent: boolean;
  website: string;
};

const initial: FormState = {
  name: "",
  workEmail: "",
  company: "",
  phone: "",
  companySize: "",
  serviceInterests: [],
  message: "",
  privacyAcknowledged: false,
  marketingConsent: false,
  website: "",
};

export function ContactForm({ sourcePage = "/contact" }: { sourcePage?: string }) {
  const formId = useId();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "rate_limited"
  >("idle");
  const [message, setMessage] = useState("");
  const requestToken = useMemo(
    () =>
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `tok-${Date.now()}`,
    [],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleInterest(value: string) {
    setForm((prev) => {
      const exists = prev.serviceInterests.includes(value);
      return {
        ...prev,
        serviceInterests: exists
          ? prev.serviceInterests.filter((v) => v !== value)
          : [...prev.serviceInterests, value],
      };
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourcePage,
          requestToken,
          privacyAcknowledged: form.privacyAcknowledged ? true : false,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (res.status === 429) {
        setStatus("rate_limited");
        setMessage(
          data.message ||
            "Too many submissions. Please wait a little while and try again.",
        );
        return;
      }

      if (res.status === 400 || res.status === 422) {
        setStatus("idle");
        setErrors(data.errors || {});
        setMessage(data.message || "Please check the highlighted fields.");
        const firstKey = Object.keys(data.errors || {})[0];
        if (firstKey) {
          const el = document.querySelector<HTMLElement>(
            `[name="${firstKey}"], [data-field="${firstKey}"]`,
          );
          el?.focus();
        }
        return;
      }

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.message ||
            "We could not submit your enquiry right now. Please try again shortly.",
        );
        return;
      }

      setStatus("success");
      setMessage(
        data.message ||
          "Thank you. Your enquiry has been received. A NOSS team member will follow up using the details you provided.",
      );
      setForm(initial);
    } catch {
      setStatus("error");
      setMessage(
        "Network problem. Your entered details are still here — please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
        role="status"
      >
        <h2 className="text-xl font-semibold text-[var(--success)]">Enquiry received</h2>
        <p className="mt-3 text-[var(--text)]">{message}</p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-[var(--action-blue)] underline"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm"
      aria-describedby={message ? `${formId}-summary` : undefined}
    >
      {message ? (
        <div
          id={`${formId}-summary`}
          role="alert"
          className={`rounded-md border px-4 py-3 text-sm ${
            status === "error" || status === "rate_limited"
              ? "border-[var(--error)]/30 bg-red-50 text-[var(--error)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          }`}
        >
          {message}
        </div>
      ) : null}

      {/* Honeypot */}
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <Field
        id={`${formId}-name`}
        label="Name"
        required
        error={errors.name}
      >
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass(errors.name)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
        />
      </Field>

      <Field
        id={`${formId}-email`}
        label="Work email"
        required
        error={errors.workEmail}
      >
        <input
          id={`${formId}-email`}
          name="workEmail"
          type="email"
          autoComplete="email"
          value={form.workEmail}
          onChange={(e) => update("workEmail", e.target.value)}
          className={inputClass(errors.workEmail)}
          aria-invalid={Boolean(errors.workEmail)}
          aria-describedby={errors.workEmail ? `${formId}-email-error` : undefined}
        />
      </Field>

      <Field
        id={`${formId}-company`}
        label="Company"
        required
        error={errors.company}
      >
        <input
          id={`${formId}-company`}
          name="company"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass(errors.company)}
          aria-invalid={Boolean(errors.company)}
        />
      </Field>

      <Field id={`${formId}-phone`} label="Phone (optional)" error={errors.phone}>
        <input
          id={`${formId}-phone`}
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass(errors.phone)}
        />
      </Field>

      <Field id={`${formId}-size`} label="Company size (optional)" error={errors.companySize}>
        <select
          id={`${formId}-size`}
          name="companySize"
          value={form.companySize}
          onChange={(e) => update("companySize", e.target.value)}
          className={inputClass(errors.companySize)}
        >
          <option value="">Select a range</option>
          {companySizeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <fieldset data-field="serviceInterests">
        <legend className="text-sm font-semibold text-[var(--text)]">
          Service interest <span className="font-normal text-[var(--slate)]">(required)</span>
        </legend>
        <div className="mt-3 space-y-2">
          {serviceInterestOptions.map((opt) => (
            <label key={opt.value} className="flex items-start gap-3 text-sm text-[var(--text)]">
              <input
                type="checkbox"
                name="serviceInterests"
                checked={form.serviceInterests.includes(opt.value)}
                onChange={() => toggleInterest(opt.value)}
                className="mt-1"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.serviceInterests ? (
          <p className="mt-2 text-sm text-[var(--error)]" role="alert">
            {errors.serviceInterests}
          </p>
        ) : null}
      </fieldset>

      <Field id={`${formId}-message`} label="Message (optional)" error={errors.message}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass(errors.message)}
        />
      </Field>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-[var(--text)]">
          <input
            type="checkbox"
            name="privacyAcknowledged"
            checked={form.privacyAcknowledged}
            onChange={(e) => update("privacyAcknowledged", e.target.checked)}
            className="mt-1"
            aria-invalid={Boolean(errors.privacyAcknowledged)}
          />
          <span>
            I have read and acknowledge the{" "}
            <Link href="/privacy" className="font-semibold text-[var(--action-blue)] underline">
              Privacy Notice
            </Link>{" "}
            <span className="text-[var(--slate)]">(required)</span>
          </span>
        </label>
        {errors.privacyAcknowledged ? (
          <p className="text-sm text-[var(--error)]" role="alert">
            {errors.privacyAcknowledged}
          </p>
        ) : null}

        <label className="flex items-start gap-3 text-sm text-[var(--text)]">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={form.marketingConsent}
            onChange={(e) => update("marketingConsent", e.target.checked)}
            className="mt-1"
          />
          <span>
            Optional: I am happy to receive occasional NOSS service updates by
            email. This is separate from handling this enquiry.
          </span>
        </label>
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending enquiry…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[var(--text)]">
        {label}{" "}
        {required ? (
          <span className="font-normal text-[var(--slate)]">(required)</span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[var(--error)]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-md border bg-white px-3 py-2.5 text-[var(--text)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)] ${
    error ? "border-[var(--error)]" : "border-[var(--border)]"
  }`;
}
