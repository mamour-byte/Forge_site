import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, message, timeline } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "mamourf958@gmail.com", // Ou l'adresse de réception souhaitée
      subject: `Nouveau message de contact de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f6f8fa; padding: 32px;">
          <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 12px #0001; padding: 32px 28px;">
            <h2 style="color: #1a2233; font-size: 1.6rem; margin-bottom: 18px;">Nouveau message de contact</h2>
            <table style="width: 100%; font-size: 1rem; color: #222; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: 600;">Nom</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Entreprise</td><td style="padding: 8px 0;">${company || '-'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Type de projet</td><td style="padding: 8px 0;">${projectType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Budget</td><td style="padding: 8px 0;">${budget || '-'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Delai</td><td style="padding: 8px 0;">${timeline || '-'}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <div style="font-weight: 600; color: #1a2233; margin-bottom: 6px;">Message :</div>
              <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; color: #333;">${message}</div>
            </div>
            <div style="margin-top: 32px; text-align: center; color: #888; font-size: 0.95rem;">
              <span>Contact Forge - ${new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
