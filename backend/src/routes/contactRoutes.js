const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();
const { sendNewContactEmail } = require("../utils/mailer");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing required fields" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email" });
    }

    const saved = await ContactMessage.create({
      name,
      email,
      company: company || "",
      message,
    });

    // Send email notification (don’t block the response if email fails)
    sendNewContactEmail({
      name: saved.name,
      email: saved.email,
      company: saved.company,
      message: saved.message,
      createdAt: saved.createdAt,
    }).catch((err) => console.error("Email send failed:", err));

    return res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    console.error("Contact POST error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

module.exports = router;
