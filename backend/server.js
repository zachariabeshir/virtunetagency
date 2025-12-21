require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const contactRoutes = require("./src/routes/contactRoutes");

const app = express();
const adminRoutes = require("./src/routes/adminRoutes");

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 10, // 10 requests per IP per window
});

app.get("/", (req, res) => {
  res.send("VirtuNet API is running ✅");
});

app.use("/api/contact", contactLimiter);

app.use(express.json());

// CORS for local dev (frontend on 3000)
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, status: "alive" });
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  });
