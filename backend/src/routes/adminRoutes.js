const express = require("express");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/auth");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

// POST /api/admin/login
router.post("/login", (req, res) => {
  const { password } = req.body;

  if (!password)
    return res.status(400).json({ ok: false, error: "Password required" });
  if (!process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ ok: false, error: "Wrong password" });
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return res.json({ ok: true, token });
});

// GET /api/admin/messages (protected)
router.get("/messages", requireAuth, async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json({ ok: true, messages });
});

// DELETE /api/admin/messages/:id (protected) — optional but useful
router.delete("/messages/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  await ContactMessage.findByIdAndDelete(id);
  res.json({ ok: true });
});

module.exports = router;
