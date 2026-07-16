const express = require("express");
const ContactMessage = require("../models/ContactMessage");
const { sendNewContactEmail } = require("../utils/mailer");

const router = express.Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanString(value, maxLength = 3000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const name = cleanString(req.body.name, 80);
    const email = cleanString(req.body.email, 120).toLowerCase();
    const company = cleanString(req.body.company, 120);
    const phone = cleanString(req.body.phone, 40);
    const service = cleanString(req.body.service, 120);
    const budget = cleanString(req.body.budget, 80);
    const message = cleanString(req.body.message, 3000);

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Name, email, and message are required.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        ok: false,
        error: "Please enter a valid email address.",
      });
    }

    const saved = await ContactMessage.create({
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
    });

    // Send the notification without delaying the API response.
    sendNewContactEmail({
      name: saved.name,
      email: saved.email,
      company: saved.company,
      phone: saved.phone,
      service: saved.service,
      budget: saved.budget,
      message: saved.message,
      createdAt: saved.createdAt,
    }).catch((error) => {
      console.error("Email send failed:", error);
    });

    return res.status(201).json({
      ok: true,
      id: saved._id,
      message: "Consultation request received.",
    });
  } catch (error) {
    console.error("Contact POST error:", error);

    if (error?.name === "ValidationError") {
      return res.status(400).json({
        ok: false,
        error: "Some submitted information is invalid.",
      });
    }

    return res.status(500).json({
      ok: false,
      error: "Server error. Please try again.",
    });
  }
});

module.exports = router;
