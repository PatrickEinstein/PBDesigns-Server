import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const mailer = (mail, subject, text, html, attachments) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "patoctave99@gmail.com",
                pass: "kjksxvvyxtoldilv",
            },
        });
        const mailOptions = {
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
