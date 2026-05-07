const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const sendContactEmail = async (data) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

  const transporter = createTransporter();

  // Notify owner
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `[Portfolio] New message: ${data.subject}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background: #060608; color: #e8e8f0; padding: 32px; border-radius: 12px;">
        <h2 style="color: #5b8ef0; margin-bottom: 24px;">New Contact Message</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="color:#6b6b82; padding: 8px 0; width:100px;">From</td><td style="color:#e8e8f0;">${data.name} &lt;${data.email}&gt;</td></tr>
          <tr><td style="color:#6b6b82; padding: 8px 0;">Subject</td><td style="color:#e8e8f0;">${data.subject}</td></tr>
          <tr><td style="color:#6b6b82; padding: 8px 0; vertical-align:top;">Message</td><td style="color:#e8e8f0; white-space: pre-wrap;">${data.message}</td></tr>
        </table>
      </div>
    `,
  });

  // Auto-reply to sender
  await transporter.sendMail({
    from: `"Sachin Kumar Thakur" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thanks for reaching out!",
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background: #060608; color: #e8e8f0; padding: 32px; border-radius: 12px;">
        <h2 style="color: #5b8ef0;">Hi ${data.name},</h2>
        <p style="color: #e8e8f0; line-height: 1.7;">Thanks for reaching out! I've received your message and will get back to you within 24-48 hours.</p>
        <p style="color: #6b6b82; font-size:13px; margin-top:24px;">— Sachin Kumar Thakur</p>
      </div>
    `,
  });
};

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ip: req.ip,
    });

    // Send email in background (don't await)
    sendContactEmail({ name, email, subject, message }).catch(console.error);

    res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
      id: contact._id,
    });
  } catch (err) {
    next(err);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
};
