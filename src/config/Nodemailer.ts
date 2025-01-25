import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

interface Attachment {
  filename: string;
  content: string | Buffer;
}

const mailer = (
  mail: string,
  subject: string,
  text: string,
  html: string,
  attachments?: Attachment[]
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const transporter: Transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "patoctave99@gmail.com",
        pass: "kjksxvvyxtoldilv",
      },
    });

    const mailOptions: SendMailOptions = {
      from: "DreamSeeds Schools",
      to: `${mail} dsischools@ymail.com`,
      subject: subject,
      text: text,
      html: html,
      attachments: attachments,
    };

    transporter
      .sendMail(mailOptions)
      .then((data) => {
        console.log("Mail sent successfully");
        console.log(data);

        resolve("Mail sent successfully");
      })
      .catch((error) => {
        console.error(error.message);
        resolve(error.message);
      });
  });
};

export default mailer;
