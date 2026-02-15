"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const TOTAL_STEPS = 5;


export default function Page() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    university: "",
    course: "",
    subject: null as string | null,
    gender: "",
    is_last_year: "",
    reason: "",
    practical_knowledge: "",
    mistakes: "",
    agree_guidance: "",
    agree_respect: "",
    agree_review: "",
    confirmation: false,
    verification_document: null as File | null,
    department_photo: null as File | null,
  });

  /* ---------------- OPTIONS ---------------- */

  const UNIVERSITY_OPTIONS = {
    UOA: "University of Allahabad",
  };

  const COURSE_OPTIONS = {
    BSC: "Bachelor of Science",
    BA: "Bachelor of Arts",
    BCA: "Bachelor of Computer Application",
    BVoc: "Bachelor of Vocational Education",
    BFA: "Bachelor of Fine Arts",
    MA: "Master of Arts",
    MCA: "Master of Computer Application",
    MCABCA: "Five Year Integrated BCA & MCA (Data Science)",
    MSC: "Master of Science",
    LAW: "Law",
    BCOM: "Bachelor of Commerce",
    BTECH: "B.TECH",
  };

  const SUBJECT_OPTIONS: Record<string, string[]> = {
    BSC: ["Mathematics", "Physics", "Chemistry", "Zoology", "Botany", "Statistics"],
    BA: ["History", "Political Science", "Economics", "Sociology", "Hindi", "English"],
    BTECH: ["Computer Sc. and Engineering", "Electronics and Comm. Engineering"],
    BVoc:  ["Software Development", "Food Processing and Technology", "Media Production"],
    MSC: [
      "Mathematics", "Physics", "Statistics", "Zoology", "Cognitive Science",
      "Materials Science", "Food Technology", "Bioinformatics", "Biotechnology",
      "Environmental Science", "Design and Innovation in Rural Technology",
      "Agricultural Zoology & Entomology", "Anthropology", "Geography", "Psychology",
      "Bio-Chemistry", "Botany", "Agricultural Botany", "Chemistry",
      "Agricultural Chemistry & Soil Science", "Defence Studies", "Applied Geology",
      "Computer Science", "Textile & Apparel Designing", "Food and Nutrition",
    ],
    MA: [
      "Philosophy", "Hindi", "Mass Communication", "Political Sc.", "Psychology",
      "Med. & Mod. History", "Anthropology", "(Music- Sitar/ Tabla/Voca", "Education",
      "English Litt.", "Geography",
    ],
    LAW: ["LLB", "BALLB", "LL.M.", "Ph.D. Law"],
  };

  /* ---------------- HELPERS ---------------- */

  const hasSubjects =
    formData.course &&
    SUBJECT_OPTIONS[formData.course] &&
    SUBJECT_OPTIONS[formData.course].length > 0;

  const handleChange = (
    name: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ---------------- STEP VALIDATION ---------------- */

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) return toast.error("Name is required"), false;
        if (!/^\d{10}$/.test(formData.mobile))
          return toast.error("Mobile number must be exactly 10 digits"), false;
        if (!formData.gender) return toast.error("Select gender"), false;
        return true;

      case 2:
        if (!formData.university) return toast.error("Select university"), false;
        if (!formData.course) return toast.error("Select course"), false;
        if (hasSubjects && !formData.subject)
          return toast.error("Select subject"), false;
        if (!formData.is_last_year) return toast.error("Select last year status"), false;
        return true;

      case 3:
        // Text areas are optional
        return true;

      case 4:
        if (!formData.agree_guidance)
          return toast.error("Answer guidance question"), false;
        if (!formData.agree_respect)
          return toast.error("Answer respect question"), false;
        if (!formData.agree_review)
          return toast.error("Answer review question"), false;
        return true;

      case 5:
        if (!formData.verification_document)
          return toast.error("Verification document is required"), false;
        if (!formData.department_photo)
          return toast.error("Profile image is required"), false;
        if (!formData.confirmation)
          return toast.error("You must confirm the information"), false;
        return true;

      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async () => {
    if (submitting) return;
    if (!validateStep(5)) return;

    setSubmitting(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "" && value !== false) {
        form.append(key, value as any);
      }
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/department-expert/apply/`,
        {
          method: "POST",
          body: form,
        }
      );

      if (res.ok) {
        toast.success("Application submitted successfully");
        setSubmitting(true);
        return;
      } else {
        const err = await res.text();
        toast.error(err || "Something went wrong");
        setSubmitting(false);
      }
    } catch {
      toast.error("Network error");
      setSubmitting(false);
    }
  };

  /* ---------------- STEP TITLES ---------------- */

  const stepTitles = [
    "Personal Info",
    "Academic Details",
    "Experience",
    "Agreements",
    "Documents",
  ];

  /* ---------------- STEP CONTENT ---------------- */

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Mobile Number</Label>
              <Input
                placeholder="10-digit mobile number"
                value={formData.mobile}
                type="number"
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                value={formData.gender}
                onValueChange={(v) => handleChange("gender", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>University</Label>
              <Select
                value={formData.university}
                onValueChange={(v) => handleChange("university", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(UNIVERSITY_OPTIONS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Course</Label>
              <Select
                value={formData.course}
                onValueChange={(v) => {
                  handleChange("course", v);
                  handleChange("subject", null);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(COURSE_OPTIONS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {hasSubjects && (
              <div className="space-y-2">
                <Label>Subject</Label>
                <Select
                  value={formData.subject || ""}
                  onValueChange={(v) => handleChange("subject", v)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECT_OPTIONS[formData.course].map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="space-y-2">
              <Label>Are you in last year?</Label>
              <Select
                value={formData.is_last_year}
                onValueChange={(v) => handleChange("is_last_year", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Why do you want to become a Department Expert?</Label>
              <Textarea
                placeholder="Share your motivation..."
                value={formData.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>What practical knowledge can you share?</Label>
              <Textarea
                placeholder="Describe what you can teach..."
                value={formData.practical_knowledge}
                onChange={(e) => handleChange("practical_knowledge", e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Common mistakes new students make?</Label>
              <Textarea
                placeholder="Help juniors avoid common pitfalls..."
                value={formData.mistakes}
                onChange={(e) => handleChange("mistakes", e.target.value)}
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Do you agree to provide honest guidance?</Label>
              <Select
                value={formData.agree_guidance}
                onValueChange={(v) => handleChange("agree_guidance", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Do you agree to maintain respectful communication?</Label>
              <Select
                value={formData.agree_respect}
                onValueChange={(v) => handleChange("agree_respect", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Do you agree Hostel Kit may review interactions?</Label>
              <Select
                value={formData.agree_review}
                onValueChange={(v) => handleChange("agree_review", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Upload any valid ID of your university (for verification)</Label>
              <Input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) =>
                  handleChange("verification_document", e.target.files?.[0] || null)
                }
              />
              {formData.verification_document && (
                <p className="text-xs text-foreground/60">
                  Selected: {formData.verification_document.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Your Profile Image(Image taken inside University)</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleChange("department_photo", e.target.files?.[0] || null)
                }
              />
              {formData.department_photo && (
                <p className="text-xs text-foreground/60">
                  Selected: {formData.department_photo.name}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Checkbox
                checked={formData.confirmation}
                onCheckedChange={(v) => handleChange("confirmation", !!v)}
              />
              <Label className="cursor-pointer">
                I confirm that the information is accurate
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg bg-background text-foreground border border-border shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Department Expert – Hostel Kit
          </CardTitle>
          <CardDescription className="text-foreground/70">
            Step {step} of {TOTAL_STEPS}: {stepTitles[step - 1]}
          </CardDescription>
        </CardHeader>

        {/* PROGRESS BAR */}
        <div className="px-6 pb-4">
          <div className="flex gap-1">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  i < step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <CardContent>
          {/* STEP CONTENT */}
          <div className="min-h-[280px]">{renderStep()}</div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between mt-6 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="flex-1"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            {step < TOTAL_STEPS ? (
              <Button type="button" onClick={nextStep} className="flex-1">
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1"
              >
                {submitting ? "Submitting…" : "Submit"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
