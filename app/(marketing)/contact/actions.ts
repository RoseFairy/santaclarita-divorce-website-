"use server";

import { z } from "zod";

// Server-side validation schema
const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  matterType: z.enum([
    "Divorce",
    "Child Custody",
    "Spousal Support",
    "Property Division",
    "Domestic Violence",
    "Other",
  ]),
  description: z.string().trim().min(10, "Please provide a brief description of your situation (at least 10 characters)."),
  honeypot: z.string().max(0, "Spam detected."), // Honeypot must be empty
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitConsultation(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot check (simple spam protection)
  const honeypot = formData.get("website")?.toString() || "";

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    matterType: formData.get("matterType"),
    description: formData.get("description"),
    honeypot,
  };

  const result = consultationSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, phone, email, matterType, description } = result.data;

  // In production: Send email via Resend, SendGrid, or similar here.
  // Example (commented):
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ ... });

  // For now we log (remove in production or keep for audit)
  console.log("=== NEW CONSULTATION REQUEST ===");
  console.log({ name, phone, email, matterType, description, receivedAt: new Date().toISOString() });

  // Simulate slight processing time for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    success: true,
    message: "Thank you. Your request has been received. Francisco M. Zavala, Esq. or a member of his team will contact you within 4 business hours to schedule your confidential consultation.",
  };
}
