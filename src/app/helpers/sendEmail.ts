import nodemailer from "nodemailer";
import config from "../../config";

export async function sendEmail(
  to: string,
  sub: string,
  text: string,
  html: string,
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // => true
    auth: {
      user: config.nodemailer_email,
      pass: config.nodemailer_app_password,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: config.nodemailer_email, // sender address
    to, // list of receivers
    subject: sub, // Subject line
    text: text, // plain text body
    html, // html body
  });
}