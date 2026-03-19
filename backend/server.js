require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const connectDB = require("./src/config/db");
const contactRoutes = require("./src/routes/contactRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

const app = express();

const allowed = [
  process.env.CLIENT_ORIGIN, // your Vercel production domain
  "http://localhost:3000", // local dev
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // allow server-to-server / Postman
      if (!origin) return cb(null, true);

      // allow exact matches + any vercel preview deployments
      const isAllowed =
        allowed.includes(origin) || origin.endsWith(".vercel.app");

      return isAllowed ? cb(null, true) : cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// handle preflight
app.options("/.*/", cors());

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
});

app.get("/", (req, res) => {
  res.send("VirtuNet API is running ✅");
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, status: "alive" });
});

// Apply rate limit to contact route
app.use("/api/contact", contactLimiter);

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

// Final Server
