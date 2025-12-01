import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },

  secure: process.env.NODE_ENV === 'production',
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production',
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};