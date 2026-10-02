"use client";
import { useRef, useState } from "react";
import { site, services } from "./site-config";
export default function ConsultationForm({ interest, setInterest }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const result = useRef(null);
  const busy = useRef(false);
  async function handleSubmit(event) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    busy.current = true;
    setStatus("sending");
    setMessage("Sending your consultation request…");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || body?.ok !== true) {
        throw new Error(
          response.status === 429
            ? "There have been too many requests. Please wait a few minutes, or contact Josiah directly."
            : "We could not send your request. Your details are still here. Please try again or contact Josiah directly.",
        );
      }
      setStatus("success");
      setMessage(
        "Thank you. Your request was accepted by our form service. Josiah will follow up to discuss availability and next steps. An appointment has not been booked.",
      );
      form.reset();
      setInterest("");
      requestAnimationFrame(() => result.current?.focus());
    } catch (error) {
      setStatus("error");
      setMessage(
        error.name === "AbortError"
          ? "The connection timed out. Delivery could not be confirmed. Please contact Josiah before resending to avoid a duplicate request."
          : error.message === "Failed to fetch"
            ? "Unable to connect. Your details are still here. Please check your connection, try again, or contact Josiah directly."
            : error.message,
      );
      requestAnimationFrame(() => result.current?.focus());
    } finally {
      clearTimeout(timer);
      busy.current = false;
    }
  }
  return (
    <form
      className="consultation-form"
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      action={site.formEndpoint}
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="Layerstead consultation request"
      />
      <input type="hidden" name="notice_version" value={site.documentVersion} />
      <input
        className="honeypot"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="form-heading">
        <span className="eyebrow">Start a conversation</span>
        <p>Required fields are marked *</p>
      </div>
      <fieldset disabled={status === "sending"}>
        <legend className="sr-only">Your consultation details</legend>
        <div className="form-grid">
          <label>
            Full name *
            <input required name="name" autoComplete="name" maxLength={120} />
          </label>
          <label>
            Email *
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
            />
          </label>
          <label>
            Phone <span>(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </label>
          <label>
            Service area / city *
            <input
              required
              name="service_area"
              autoComplete="address-level2"
              placeholder="e.g. Virginia Beach"
              maxLength={120}
            />
          </label>
        </div>
        <label>
          What can we help with? *
          <select
            name="service_interest"
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Choose a service</option>
            {[...new Set(services.map((s) => s.interest))].map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Tell us a little about the problem *
          <textarea
            name="message"
            required
            rows={4}
            maxLength={3000}
            placeholder="What is happening, and what would you like to improve?"
          />
        </label>
        <p className="small muted">
          Please leave out passwords, payment details, and sensitive personal
          information.
        </p>
        <label className="acknowledgment">
          <input
            required
            type="checkbox"
            name="booking_acknowledgment"
            value="Consultation request only; no appointment or work authorized"
          />
          <span>
            I understand this requests a consultation and does not book an
            appointment or authorize work. *
          </span>
        </label>
        <button className="button dark submit" disabled={status === "sending"}>
          {status === "sending"
            ? "Sending request…"
            : "Send Consultation Request"}
        </button>
      </fieldset>
      <div
        className={"form-status " + status}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        tabIndex={-1}
        ref={result}
      >
        {message}
      </div>
      <p className="small">
        Submitting this form requests a consultation. Appointments and services
        are confirmed separately. Project scope, pricing, and applicable
        warranties will be documented in your service agreement.
      </p>
      <p className="small muted">
        Processed by Formspree. Read our <a href="/privacy">Privacy Policy</a>,{" "}
        <a href="/terms">Website Terms</a>, and{" "}
        <a href="/service-disclaimer">Service Disclaimer</a>. The acknowledgment
        above is a booking clarification, not acceptance of a service contract.
      </p>
    </form>
  );
}
