import nodemailer from "nodemailer";

const sendVerificationEmail = async (to, subject, body) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"The Raze Store" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: body,
  };

  await transporter.sendMail(mailOptions);
};

export default sendVerificationEmail;
