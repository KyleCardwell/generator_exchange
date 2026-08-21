"use client";

import { useState } from "react";

import { brandColors } from "@/constants/colors";
import { brandStyles, inputClasses, sectionClasses } from "@/constants/styles";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      form.reset();
      setStatus("success");
      setMessage(result.message);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "We couldn’t submit the form. Please call the shop instead.");
    }
  }

  return (
    <section id="quote" className={`${sectionClasses} py-8`}>
      <h2 className="mb-2 text-2xl font-semibold text-slate-900">Tell us what you&apos;re driving.</h2>
      <p className="mb-5 max-w-3xl text-sm leading-6" style={{ color: brandColors.muted }}>
        Tell us what you need and how to reach you. We&apos;ll confirm the right part, current price, and
        availability.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          <span>
            Name <span className="text-red-600">*</span>
          </span>
          <input className={inputClasses} type="text" name="name" autoComplete="name" required maxLength={100} />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          <span>
            Phone <span className="text-red-600">*</span>
          </span>
          <input className={inputClasses} type="tel" name="phone" autoComplete="tel" required maxLength={30} />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Application (Year/Make/Model/Engine, optional)
          <input
            className={inputClasses}
            type="text"
            name="application"
            maxLength={200}
            placeholder="Example: 2019 Ford F-150 3.5L"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
          Part # (from alternator tag, optional)
          <input
            className={inputClasses}
            type="text"
            name="partNumber"
            maxLength={100}
            placeholder="Leave blank if you can't find it"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800 md:col-span-2">
          <span>
            Message <span className="text-red-600">*</span>
          </span>
          <textarea
            className={inputClasses}
            name="message"
            rows={5}
            required
            maxLength={2000}
            placeholder="Tell us what the alternator is doing (or not doing)"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="max-w-[200px] rounded-lg px-4 py-3 font-medium text-white disabled:cursor-wait disabled:opacity-70 md:col-span-2"
          style={brandStyles.primaryButton}
        >
          {status === "submitting" ? "Submitting…" : "Submit request"}
        </button>

        {message && (
          <p
            role="status"
            className={`text-sm md:col-span-2 ${status === "error" ? "text-red-700" : "text-slate-700"}`}
          >
            {message}
          </p>
        )}
      </form>

      <a
        href="tel:8012600642"
        className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
        style={{ color: brandColors.ink }}
      >
        📞 801-260-0642
      </a>
    </section>
  );
}
