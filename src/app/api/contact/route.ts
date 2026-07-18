import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailAddress = process.env.SMTP_USER
    const password = process.env.SMTP_PASS

    if (!emailAddress || !password) {
      console.error('SMTP credentials missing in environment variables.')
      return NextResponse.json(
        { error: 'Server misconfiguration: missing SMTP credentials' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Default to gmail, can be changed if needed
      auth: {
        user: emailAddress,
        pass: password,
      },
    })

    const mailOptions = {
      from: emailAddress,
      to: emailAddress, // Send to yourself
      replyTo: email, // If you reply to the email, it goes to the sender
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #3b82f6; padding: 20px; color: white;">
            <h2 style="margin: 0; font-size: 20px;">New Message from Portfolio</h2>
          </div>
          <div style="padding: 24px; background-color: #f8fafc;">
            <p style="margin: 0 0 8px;"><strong>From:</strong> ${name} (${email})</p>
            <p style="margin: 0 0 24px;"><strong>Subject:</strong> ${subject}</p>
            
            <div style="background-color: white; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
            </div>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
