import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface EmailRequestBody {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message?: string;
  country?: string;
}

export async function POST(req: NextRequest) {
  const user = process.env.NEXT_PUBLIC_GMAIL_USER;
  const pass = process.env.NEXT_PUBLIC_GMAIL_PASS;

  try {
    const body: EmailRequestBody = await req.json();
    const { email, phone, name, service, country, message } = body;

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

    const userEmailMessageI = {
      subject: "Your Inquiry Has Been Successfully Received",
      text: `Dear ${name},
    
Thank you for contacting us. We have successfully received your inquiry from ${country}, and our team will reach out to you shortly.
    
If you need any immediate assistance, feel free to reply to this email or contact us directly at ${email}.
    
We appreciate your interest and look forward to assisting you.
    
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

    const adminEmailMessageI = {
      subject: "New Inquiry Received",
      text: `Dear Admin,
    
A new inquiry has been received. Below are the details of the client:

- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Country: ${country}
- Message: ${message}
    
Please review the details and follow up with the client as soon as possible.
    
Best regards,  
The Volvrit Team`,
    };

    const userMailOptions = {
      from: user,
      to: email,
      ...(country ? userEmailMessageI : userEmailMessage),
    };
    const adminMailOptions = {
      from: user,
      to: user,
      ...(country ? adminEmailMessageI : adminEmailMessage),
    };

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
