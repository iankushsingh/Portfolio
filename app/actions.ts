"use server"

import { z } from "zod"

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

  // In a real application, you would send an email here
  // For example, using a service like Nodemailer, SendGrid, or EmailJS

  // For demonstration purposes, we'll just log the data and return a success
  console.log("Form data received:", validatedFields.data)

  // Simulate a delay to mimic sending an email
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
