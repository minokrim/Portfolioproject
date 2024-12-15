import bodyparser from "body-parser";
import cors from "cors";
import env from "dotenv";
import nodemailer from "nodemailer";

// Load environment variables
env.config();

// Initialize body parser and CORS
const jsonParser = bodyparser.json();
const { EMAIL_USER, EMAIL_PASS } = process.env;

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Main function handler for Vercel
export default function handler(req, res) {
  const { method, url } = req;

  // Handle GET request for "/" route
  if (url === "/" && method === "GET") {
    return res.status(200).send("Express on Vercel");
  }

  // Handle POST request for "/api/db/react" route
  if (url === "/api/db/react" && method === "POST") {
    // Parse request body
    const { fullname, email, message } = req.body;

    // Mail options
    const mailOptions = {
      from: EMAIL_USER,
      to: "ayomidekareem563@gmail.com",
      subject: "Message from Portfolio",
      replyTo: email,
      text: `Dear alameen, \n\n${fullname} has sent the following message: \n\n${message} \n\nKind regards, \n${email}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred:', error);
        return res.status(500).json({ error: "Error sending email." });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  }

  // Default: Route not found
  return res.status(404).json({ error: "Route not found" });
}
