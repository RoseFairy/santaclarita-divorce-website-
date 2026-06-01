"use client";

import { useActionState } from "react";
import { submitConsultation, type FormState } from "./actions";
import { Section } from "@/components/section";
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
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const initialState: FormState = {
  success: false,
  message: "",
};

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);

  // Show success toast when form succeeds
  if (state.success && state.message) {
    // Use effect-like pattern via key or just show inline success below
  }

  return (
    <>
      <div className="bg-white border-b border-[#D4CFC4] py-12">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[2.5px] text-[#5F7A9E]">CONFIDENTIAL CONSULTATION</div>
            <h1 className="heading-serif text-[#334155] mt-2">Contact Your Santa Clarita Divorce Attorney</h1>
            <p className="mt-4 text-lg text-[#5A5A5A]">
              Take the first step toward clarity and protection for your family. All consultations are private and without obligation.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
          {/* Form */}
          <div className="lg:col-span-7">
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
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D4CFC4] rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-[#334155]">Santa Clarita Office – The F.M. Zavala Law Firm</h3>

              <div className="mt-8 space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Office</div>
                    <div className="text-[#5A5A5A] mt-0.5 leading-tight">
                      28494 Westinghouse Place, Suite 205<br />
                      Santa Clarita, CA 91355
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Phone</div>
                    <a href="tel:6617533534" className="text-[#5F7A9E] hover:underline">(661) 753-3534</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Email</div>
                    <a href="mailto:Divorce@santaclaritadivorceattorney.com" className="text-[#5F7A9E] hover:underline">Divorce@santaclaritadivorceattorney.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 mt-0.5 text-[#5F7A9E] shrink-0" />
                  <div>
                    <div className="font-medium text-[#334155]">Office Hours</div>
                    <div className="text-[#5A5A5A] mt-0.5">Monday – Friday, 8:30am – 5:00pm<br />Evenings and weekends by appointment</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D4CFC4] text-xs text-[#5A5A5A] leading-relaxed">
                Free initial consultations are available by appointment. We serve clients throughout the Santa Clarita Valley, including Valencia, Newhall, Canyon Country, Stevenson Ranch, and surrounding communities.
              </div>
            </div>

            <div className="mt-6 text-[11px] text-[#8A877F] px-1">
              This form is secure. Your information is kept strictly confidential and is never shared.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
