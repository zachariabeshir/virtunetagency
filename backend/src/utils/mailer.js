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
  phone,
  service,
  budget,
  message,
  createdAt,
}) {
  if (
    !process.env.MAIL_USER ||
    !process.env.MAIL_PASS ||
    !process.env.MAIL_TO
  ) {
    console.warn(
      "Email not configured (missing MAIL_USER, MAIL_PASS, or MAIL_TO). Skipping email."
    );
    return;
  }

  const transporter = makeTransport();
  const submittedAt = createdAt
    ? new Date(createdAt).toLocaleString()
    : new Date().toLocaleString();

  const subject = `New VirtuNet consultation request: ${name}`;

  const text = `New VirtuNet consultation request

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}
Primary service: ${service || "Not selected"}
Monthly advertising budget: ${budget || "Not selected"}
Date: ${submittedAt}

Goals:
${message}
`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin: 0 0 18px;">New VirtuNet consultation request</h2>

      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Company", company || "Not provided")}
        ${row("Phone", phone || "Not provided")}
        ${row("Primary service", service || "Not selected")}
        ${row("Monthly advertising budget", budget || "Not selected")}
        ${row("Date", submittedAt)}
      </table>

      <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e2e8f0;" />

      <h3 style="margin: 0 0 8px;">Goals and context</h3>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME || "VirtuNet"}" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject,
    text,
    html,
  });
}

function row(label, value) {
  return `
    <tr>
      <td style="padding: 8px 12px 8px 0; color: #64748b; vertical-align: top;">
        <strong>${escapeHtml(label)}</strong>
      </td>
      <td style="padding: 8px 0; vertical-align: top;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = { sendNewContactEmail };
