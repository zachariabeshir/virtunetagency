import "./Contact.css";
import { API_BASE } from "../config";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", msg: "" });
  // states: idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({ state: "sending", msg: "Sending..." });

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        state: "success",
        msg: "Message sent! We’ll review your goals and get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <h1>Let’s grow your business</h1>
          <p>
            Tell us about your business, your current marketing, and the
            results you want to achieve. We’ll respond with clear next steps.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container contact-grid">
          <div className="contact-card">
            <h2>Request a consultation</h2>

            <p className="contact-note">
              No pressure and no generic sales pitch. Share a few details so
              we can determine whether VirtuNet is a strong fit for your goals.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="two-col">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Business email</label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Business name"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Tell us about your goals</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What services do you offer, how are you currently generating leads, and what results are you looking for?"
                  rows="6"
                  required
                />
              </div>

              <button
                className="contact-btn"
                type="submit"
                disabled={status.state === "sending"}
              >
                {status.state === "sending"
                  ? "Sending..."
                  : "Request Consultation"}
              </button>

              {status.state !== "idle" && (
                <p
                  className={
                    status.state === "success"
                      ? "status success"
                      : "status error"
                  }
                >
                  {status.msg}
                </p>
              )}
            </form>
          </div>

          <aside className="contact-side">
            <div className="info-box">
              <h3>Quick details</h3>

              <div className="info-row">
                <span>Location</span>
                <span>Orange County, CA</span>
              </div>

              <div className="info-row">
                <span>Primary service</span>
                <span>Google Search Ads</span>
              </div>

              <div className="info-row">
                <span>Typical response</span>
                <span>Within 24–48 hours</span>
              </div>

              <div className="info-row">
                <span>Email</span>
                <span>virtunetagency@gmail.com</span>
              </div>
            </div>

            <div className="info-box">
              <h3>What helps us prepare</h3>

              <ul className="help-list">
                <li>The services you want to promote</li>
                <li>The locations you currently serve</li>
                <li>Your current lead-generation process</li>
                <li>Your monthly marketing budget</li>
                <li>Your lead or revenue goals</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Contact;