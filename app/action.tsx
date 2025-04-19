"use server"

import { z } from "zod"
import emailjs from "@emailjs/nodejs"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function sendContactForm(formData: unknown) {
  const validatedFields = formSchema.safeParse(formData)

  if (!validatedFields.success) {
    throw new Error("Invalid form data")
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // Initialize EmailJS with your public key and private key
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
      privateKey: process.env.EMAILJS_PRIVATE_KEY || "",
    })

    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: "Ankush Singh Bhadauriya",
      reply_to: email,
    }

    // Send the email using EmailJS
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      templateParams,
    )

    if (response.status === 200) {
      return { success: true }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
