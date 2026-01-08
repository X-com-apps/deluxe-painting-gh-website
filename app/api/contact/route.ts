import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "The name, email, and message fields are required." },
        { status: 400 }
      );
    }

    // Préparer le contenu de l'email
    const emailSubject = `New contact message - ${name}`;
    const emailContent = `
New contact message from the Deluxe Painting website

Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email}
Project Type: ${projectType || "Not specified"}

Message:
${message}

---
This message was sent from the contact form on the Deluxe Painting website.
    `.trim();

    // Envoyer l'email via EmailJS API
    // Note: Vous devez créer un compte EmailJS gratuit sur https://www.emailjs.com/
    // et configurer les variables d'environnement suivantes:
    // - NEXT_PUBLIC_EMAILJS_SERVICE_ID
    // - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    // - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
      // Envoyer via EmailJS
      const emailjsResponse = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsPublicKey,
            template_params: {
              to_email: "sittisam2@gmail.com",
              from_name: name,
              from_email: email,
              phone: phone || "Non fourni",
              project_type: projectType || "Non spécifié",
              message: message,
              subject: emailSubject,
            },
          }),
        }
      );

      if (!emailjsResponse.ok) {
        throw new Error("Error sending via EmailJS");
      }
    } else {
      // Fallback: Log pour développement
      console.log("Email à envoyer à sittisam2@gmail.com:", {
        subject: emailSubject,
        content: emailContent,
      });
      console.warn(
        "EmailJS non configuré. Configurez les variables d'environnement pour activer l'envoi d'emails."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully. We will respond as soon as possible.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          "An error occurred while sending the message. Please try again.",
      },
      { status: 500 }
    );
  }
}
