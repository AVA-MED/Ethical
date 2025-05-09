import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: " ethicalsolutiondelhi@gmail.com",
    pass: "zzua piym yqmb ywqi",
  },
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "Failed to send email", error };
  }
};

app.post("/send-Enquiry", async (req, res) => {
  const { name, email, mobile, address, message } = req.body;

  if (!name || !email || !mobile || !address || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const mailOptions = {
  
    from: `"Enquiry Form" <ethicalsolutiondelhi@gmail.com>`,
    to:    " ethicalsolutiondelhi@gmail.com",
    subject: "New Enquiry from ${name}",
    html: `
    <h3>New Enquiry Received</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
};
  const result = await sendEmail(mailOptions);
  res.status(result.success ? 200 : 500).json({ message: result.message });
});

app.post('/send-contact', async (req, res) => {
  try {
    // Destructure fields from the request body
    const { name, email, mobile, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ethicalsolutiondelhi@gmail.com', // Your Gmail address
        pass: "zzua piym yqmb ywqi", // Your Gmail App Password
      },
    });

    // Define email options
    const mailOptions = {
      from: `"Contact Form" <ethicalsolutiondelhi@gmail.com>`,
      to: 'ethicalsolutiondelhi@gmail.com', // Destination email
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Contact from </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <p style="margin-left: 20px;">${message}</p>

          <hr style="margin: 20px 0;" />

          <p style="color: #444;">Thank you for your enquiry. We appreciate your interest and will get back to you shortly.</p>

          <p>Best regards,<br />
          <strong>Your Company Name</strong><br />
          <em>Customer Support Team</em></p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
  
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
