"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpglbqn";

export default function ConsultationForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks — your consultation request was sent. Layerstead will be in touch soon.");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong while sending your request. Please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="consultation-form">
      <input type="hidden" name="_subject" value="New Layerstead Consultation Request" />
      <input
        className="form-honeypot"
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-grid">
        <label>
          Name
          <input required name="name" autoComplete="name" />
        </label>
        <label>
          Email
          <input required type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Property type
          <select name="propertyType" defaultValue="Home">
            <option>Home</option>
            <option>Small Business</option>
            <option>Church / Nonprofit</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="message-label">
        What can we help with?
        <textarea
          required
          name="message"
          rows="6"
          placeholder="Tell us what’s happening, what equipment you have, or what you want to improve."
        />
      </label>

      <button
        type="submit"
        className="button button-dark form-submit"
        disabled={status === "sending"}
      >
        <span>{status === "sending" ? "Sending…" : "Send Consultation Request"}</span>
        <span aria-hidden>↗</span>
      </button>

      <div className="form-status" aria-live="polite">
        {message && (
          <p className={status === "success" ? "form-success" : "form-error"}>{message}</p>
        )}
      </div>

      <p className="form-note">
        Your request is sent securely through Formspree. We’ll only use your contact information to respond to your consultation request.
      </p>
    </form>
  );
}
