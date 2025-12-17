const nodemailer = require("nodemailer");

function makeTransport() {
  const port = Number(process.env.MAIL_PORT || 465);
  const secure = String(process.env.MAIL_SECURE || "true") === "true";

  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port,
    secure,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}

async function sendNewContactEmail({
  name,
  email,
  company,
  message,
  createdAt,
}) {
  if (
    !process.env.MAIL_USER ||
    !process.env.MAIL_PASS ||
    !process.env.MAIL_TO
  ) {
    console.warn(
      "⚠️ Email not configured (missing MAIL_USER/MAIL_PASS/MAIL_TO). Skipping email."
    );
    return;
  }

  const transporter = makeTransport();

  const subject = `New contact form submission: ${name}`;
  const text = `New contact form submission

Name: ${name}
Email: ${email}
Company: ${company || "-"}
Date: ${createdAt ? new Date(createdAt).toLocaleString() : ""}

Message:
${message}
`;

  const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2 style="margin:0 0 10px 0;">New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
    <p><strong>Date:</strong> ${
      createdAt ? new Date(createdAt).toLocaleString() : ""
    }</p>
    <hr/>
    <p style="white-space: pre-wrap;"><strong>Message:</strong><br/>${escapeHtml(
      message
    )}</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME || "VirtuNet"}" <${
      process.env.MAIL_USER
    }>`,
    to: process.env.MAIL_TO,
    replyTo: email, // so you can hit Reply and respond to the lead
    subject,
    text,
    html,
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = { sendNewContactEmail };
