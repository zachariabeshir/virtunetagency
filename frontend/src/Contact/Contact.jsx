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
      // Later: point this to your backend route (example: /api/contact)
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // If backend isn't ready yet, you can temporarily comment out fetch
      // and simulate success instead.

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        state: "success",
        msg: "Message sent! I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Something went wrong. Please try again or email me directly.",
      });
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <h1>Contact</h1>
          <p>
            Tell me what you’re building. I’ll respond with next steps, a
            timeline, and a clear plan.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container contact-grid">
          <div className="contact-card">
            <h2>Send a message</h2>
            <p className="contact-note">
              No pressure — just share what you need. The more details, the
              better.
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
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="company">Company (optional)</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Business name"
                />
              </div>

              <div className="field">
                <label htmlFor="message">What do you need?</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Pages you want, style you like, deadline, etc."
                  rows="6"
                  required
                />
              </div>

              <button
                className="contact-btn"
                type="submit"
                disabled={status.state === "sending"}
              >
                {status.state === "sending" ? "Sending..." : "Send Message"}
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
                <span>Typical response</span>
                <span>Within 24–48 hours</span>
              </div>
              <div className="info-row">
                <span>Email</span>
                <span>virtunetagency@gm.com</span>
              </div>
            </div>

            <div className="info-box">
              <h3>What helps most</h3>
              <ul className="help-list">
                <li>What pages you need (Home, Services, etc.)</li>
                <li>Any examples of sites you like</li>
                <li>Your timeline / deadline</li>
                <li>Whether you need a contact form or database</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Contact;
