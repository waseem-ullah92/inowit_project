import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',  // Set Hostinger Titan Mails host
      port: 587,  // Set the appropriate port (usually 587 for TLS)
      secure: false,  // Set to true if using SSL/TLS
      auth: {
        user: 'no-reply@inowit.ca',  // Your Hostinger email address
        pass: 'Pakistan@2023'  // Your email password
      }
    });

    try {
      await transporter.sendMail({
        from: "no-reply@inowit.ca",
        to: 'info@inowit.ca',
        subject: 'Contact Form Submission',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
