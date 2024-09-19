import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface EmailRequestBody {
  name: string;
  phone: string;
  email: string;
  service: string;
}

export async function POST(req: NextRequest) {
  const user = process.env.NEXT_PUBLIC_GMAIL_USER;
  const pass = process.env.NEXT_PUBLIC_GMAIL_PASS;

  try {
    const body: EmailRequestBody = await req.json();
    const { email, phone, name, service } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: user, pass: pass },
    });

    // User email template
    const userEmailMessage = {
      subject: "Your Service Request has been Successfully Received",
      text: `Dear ${name},
    
Thank you for reaching out to us for the ${service} service. We have successfully received your request and our team will get in touch with you shortly.
      
If you need any immediate assistance, feel free to reply to this email or contact us at ${user}.
      
Thank you for choosing our services.
      
Best regards,
The Volvrit Team`,
    };

    // Admin email template
    const adminEmailMessage = {
      subject: "New Service Request Received",
      text: `Dear Admin,
    
A new service request has been received. Below are the details:
      
- Name: ${name}
- Email: ${email}
- Service: ${service}
- Phone: ${phone}
      
Please review the details and follow up with the client as soon as possible.
      
Best regards`,
    };

    const userMailOptions = { from: user, to: email, ...userEmailMessage };
    const adminMailOptions = { from: user, to: user, ...adminEmailMessage };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `Error sending email: ${error.message}` },
      { status: 500 }
    );
  }
}
