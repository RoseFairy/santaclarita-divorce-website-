"use client";

import { useActionState } from "react";
import { submitConsultation, type FormState } from "@/app/(marketing)/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialState: FormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);

  return (
    <>
      {state.success ? (
        <div className="rounded-2xl border border-[#2E5A3C]/30 bg-[#F1F5F1] p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2E5A3C] text-white">
            ✓
          </div>
          <h3 className="font-serif text-2xl text-[#2E5A3C]">Thank You</h3>
          <p className="mt-4 text-[#2C2C2C] leading-relaxed max-w-md mx-auto">{state.message}</p>
          <p className="mt-6 text-sm text-[#5A5A5A]">
            In the meantime, you may reach us directly at <a href="tel:6617533534" className="underline">(661) 753-3534</a>.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          {/* Honeypot — hidden from users */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="form-label">Full Name *</Label>
              <Input id="name" name="name" required className="form-input" placeholder="Alex Rivera" />
              {state.errors?.name && <p className="text-xs text-red-700 mt-1.5">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className="form-label">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required className="form-input" placeholder="(661) 753-3534" />
              {state.errors?.phone && <p className="text-xs text-red-700 mt-1.5">{state.errors.phone[0]}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="form-label">Email Address *</Label>
            <Input id="email" name="email" type="email" required className="form-input" placeholder="you@example.com" />
            {state.errors?.email && <p className="text-xs text-red-700 mt-1.5">{state.errors.email[0]}</p>}
          </div>

          <div>
            <Label htmlFor="matterType" className="form-label">Type of Matter *</Label>
            <Select name="matterType" required>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select the primary issue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Divorce">Divorce / Dissolution</SelectItem>
                <SelectItem value="Child Custody">Child Custody &amp; Visitation</SelectItem>
                <SelectItem value="Spousal Support">Spousal Support / Alimony</SelectItem>
                <SelectItem value="Property Division">Property Division</SelectItem>
                <SelectItem value="Domestic Violence">Domestic Violence / Restraining Order</SelectItem>
                <SelectItem value="Other">Other Family Law Matter</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.matterType && <p className="text-xs text-red-700 mt-1.5">{state.errors.matterType[0]}</p>}
          </div>

          <div>
            <Label htmlFor="description" className="form-label">Brief Description of Your Situation *</Label>
            <Textarea
              id="description"
              name="description"
              required
              rows={5}
              className="form-input min-h-[128px] resize-y"
              placeholder="Please share a short summary of your situation. This helps us prepare for our conversation."
            />
            {state.errors?.description && <p className="text-xs text-red-700 mt-1.5">{state.errors.description[0]}</p>}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={pending}
              className="w-full sm:w-auto h-12 px-10 bg-[#5F7A9E] hover:bg-[#4A6280] text-[#F8F4ED] text-base disabled:opacity-70"
            >
              {pending ? "Sending Request..." : "Request Free Consultation"}
            </Button>
            <p className="text-xs text-[#5A5A5A] mt-3">We typically respond within 4 business hours during the week.</p>
          </div>

          {state.message && !state.success && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{state.message}</p>
          )}
        </form>
      )}
    </>
  );
}
