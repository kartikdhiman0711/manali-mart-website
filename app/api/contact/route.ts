import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (phone) {
      // Remove any spaces, dashes, or plus signs
      const cleanPhone = phone.replace(/[\s\-+]/g, '');
      
      // Check if it contains only digits
      if (!/^\d+$/.test(cleanPhone)) {
        return NextResponse.json(
          { error: 'Phone number must contain only digits' },
          { status: 400 }
        );
      }

      // Check if it's exactly 10 digits (after removing country code if present)
      const phoneDigits = cleanPhone.replace(/^91/, ''); // Remove India country code if present
      if (phoneDigits.length !== 10) {
        return NextResponse.json(
          { error: 'Phone number must be exactly 10 digits' },
          { status: 400 }
        );
      }
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@manalimart.co.in',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #16a34a; border-bottom: 3px solid #16a34a; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong style="color: #374151;">Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #4b5563;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              <p>This email was sent from the Manali Mart website contact form</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Manali Mart',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #16a34a; border-bottom: 3px solid #16a34a; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
            
            <p style="color: #374151; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for contacting Manali Mart. We have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f0fdf4; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <p style="margin: 0; color: #374151;"><strong>Your Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #4b5563;">${message}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              If you need immediate assistance, please feel free to call us at:
            </p>
            
            <div style="text-align: center; margin: 20px 0;">
              <p style="margin: 5px 0; color: #16a34a; font-size: 18px; font-weight: bold;">+91 62303 37333</p>
              <p style="margin: 5px 0; color: #16a34a; font-size: 18px; font-weight: bold;">+91 79471 21545</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              <strong>Our Store Hours:</strong><br/>
              Monday - Sunday: 7:00 AM - 10:00 PM
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              <p>Manali Mart - 18 Mile, Manali, Himachal Pradesh</p>
              <p>info@manalimart.co.in | www.manalimart.co.in</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}