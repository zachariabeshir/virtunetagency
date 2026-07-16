import "./Contact.css";
import { API_BASE } from "../config";
import { useState } from "react";
import { motion } from "framer-motion";

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    state: "idle",
    msg: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      state: "sending",
      msg: "Sending your request...",
    });

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        state: "success",
        msg: "Your request was sent. We’ll review your goals and get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        state: "error",
        msg: "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-one" />
        <div className="contact-hero-glow contact-hero-glow-two" />

        <motion.div
          className="contact-container contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.p className="contact-kicker" variants={reveal}>
            Let’s Talk Growth
          </motion.p>

          <motion.h1 variants={reveal}>
            Let’s build a stronger{" "}
            <span className="contact-title-highlight">lead pipeline.</span>
          </motion.h1>

          <motion.p className="contact-hero-description" variants={reveal}>
            Tell us about your business, your current marketing, and the
            customers you want to reach. We’ll review the opportunity and
            provide clear next steps.
          </motion.p>

          <motion.div className="contact-hero-badges" variants={reveal}>
            <span>No-pressure consultation</span>
            <span>Clear next steps</span>
            <span>Response within 24–48 hours</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="contact-section">
        <div className="contact-container contact-grid">
          <motion.div
            className="contact-card contact-form-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div className="contact-card-heading">
              <p className="contact-section-label">
                Request a consultation
              </p>

              <h2>Tell us what you want to grow.</h2>

              <p className="contact-note">
                Share a few details so we can understand your services, market,
                and lead-generation goals before reaching out.
              </p>
            </div>

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
                    autoComplete="name"
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
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="two-col">
                <div className="field">
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Business name"
                    autoComplete="organization"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone number</label>

                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="two-col">
                <div className="field">
                  <label htmlFor="service">
                    Primary service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Google Ads Management">
                      Google Ads Management
                    </option>

                    <option value="Landing Page Development">
                      Landing Page Development
                    </option>

                    <option value="Lead Generation System">
                      Lead Generation System
                    </option>

                    <option value="Campaign Audit">
                      Campaign Audit
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="budget">
                    Monthly advertising budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select a range
                    </option>

                    <option value="Under $1,000">
                      Under $1,000
                    </option>

                    <option value="$1,000–$2,500">
                      $1,000–$2,500
                    </option>

                    <option value="$2,500–$5,000">
                      $2,500–$5,000
                    </option>

                    <option value="$5,000–$10,000">
                      $5,000–$10,000
                    </option>

                    <option value="$10,000+">
                      $10,000+
                    </option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">
                  Tell us about your goals
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What services do you offer, where do you operate, how are you currently generating leads, and what results are you looking for?"
                  rows="7"
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

                {status.state !== "sending" && (
                  <span aria-hidden="true">→</span>
                )}
              </button>

              {status.state !== "idle" && (
                <p
                  className={`status ${status.state}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.msg}
                </p>
              )}
            </form>
          </motion.div>

          <motion.aside
            className="contact-side"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >
            <div className="contact-info-card contact-info-card-dark">
              <p className="contact-info-kicker">
                What happens next
              </p>

              <h3>A straightforward process.</h3>

              <div className="contact-next-steps">
                <div className="contact-next-step">
                  <span>01</span>

                  <div>
                    <strong>We review your business</strong>

                    <p>
                      We look at your offer, location, market,
                      and current lead-generation setup.
                    </p>
                  </div>
                </div>

                <div className="contact-next-step">
                  <span>02</span>

                  <div>
                    <strong>We evaluate the opportunity</strong>

                    <p>
                      We consider search demand, competition,
                      budget, and whether Google Ads is a good fit.
                    </p>
                  </div>
                </div>

                <div className="contact-next-step">
                  <span>03</span>

                  <div>
                    <strong>We share clear next steps</strong>

                    <p>
                      You receive an honest recommendation without
                      a generic sales pitch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <p className="contact-info-kicker blue">
                Quick details
              </p>

              <div className="info-row">
                <span>Location</span>
                <strong>Orange County, CA</strong>
              </div>

              <div className="info-row">
                <span>Primary service</span>
                <strong>Google Search Ads</strong>
              </div>

              <div className="info-row">
                <span>Typical response</span>
                <strong>Within 24–48 hours</strong>
              </div>

              <div className="info-row">
                <span>Email</span>
                <a href="mailto:virtunetagency@gmail.com">
                  virtunetagency@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <p className="contact-info-kicker blue">
                Helpful information
              </p>

              <ul className="help-list">
                <li>
                  <span>✓</span>
                  The services you want to promote
                </li>

                <li>
                  <span>✓</span>
                  The locations you currently serve
                </li>

                <li>
                  <span>✓</span>
                  Your current lead-generation process
                </li>

                <li>
                  <span>✓</span>
                  Your monthly marketing budget
                </li>

                <li>
                  <span>✓</span>
                  Your lead or revenue goals
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

export default Contact;