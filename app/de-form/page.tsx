"use client";

import { useState } from "react";
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

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    academicYear: "",
    mobile: "",
    reason: "",
    university: "",
    gender: "",
    city: "",
    practicalKnowledge: "",
    mistakes: "",
    agreeGuidance: "",
    agreeRespect: "",
    agreeReview: "",
    confirmation: false,
    file: null as File | null,
  });

  const handleChange = (
    name: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-background px-4">
      <Card className="w-full max-w-3xl bg-background text-foreground border-border shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Department Expert – HostelsKit
          </CardTitle>
          <CardDescription className="text-foreground/70">
            Apply to guide juniors with honest and practical advice
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input className="bg-background text-foreground" placeholder="Name" required onChange={(e) => handleChange("name", e.target.value)} />
              <Input className="bg-background text-foreground" placeholder="Course" required onChange={(e) => handleChange("course", e.target.value)} />
              <Input className="bg-background text-foreground" placeholder="Academic Year" required onChange={(e) => handleChange("academicYear", e.target.value)} />
              <Input className="bg-background text-foreground" placeholder="Mobile Number" required onChange={(e) => handleChange("mobile", e.target.value)} />
              <Input className="bg-background text-foreground" placeholder="University Name" required onChange={(e) => handleChange("university", e.target.value)} />
              <Input className="bg-background text-foreground" placeholder="City" required onChange={(e) => handleChange("city", e.target.value)} />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label className="text-foreground">Gender</Label>
              <Select onValueChange={(value) => handleChange("gender", value)} required>
                <SelectTrigger className="bg-background text-foreground">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-background text-foreground">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Text Areas */}
            <Textarea className="bg-background text-foreground" placeholder="Why do you want to become a Department Expert?" required onChange={(e) => handleChange("reason", e.target.value)} />
            <Textarea className="bg-background text-foreground" placeholder="What practical knowledge can you share?" required onChange={(e) => handleChange("practicalKnowledge", e.target.value)} />
            <Textarea className="bg-background text-foreground" placeholder="Common mistakes new students make" required onChange={(e) => handleChange("mistakes", e.target.value)} />

            {/* Agreements */}
            <div className="grid gap-4">
              {[
                { label: "Do you agree to provide honest guidance?", name: "agreeGuidance" },
                { label: "Maintain respectful communication?", name: "agreeRespect" },
                { label: "Allow HostelsKit to review interactions?", name: "agreeReview" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <Label className="text-foreground">{item.label}</Label>
                  <Select onValueChange={(value) => handleChange(item.name, value)} required>
                    <SelectTrigger className="bg-background text-foreground">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-background text-foreground">
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label className="text-foreground">Upload verification document</Label>
              <Input type="file" className="bg-background text-foreground" accept="image/*,.pdf" required />
            </div>

            {/* Confirmation */}
            <div className="flex items-center space-x-2">
              <Checkbox />
              <Label className="text-foreground">
                I confirm that the information provided is accurate
              </Label>
            </div>

            <p className="text-sm text-foreground/70">
              This form is an expression of interest. Submission does not guarantee selection.
            </p>

            <Button type="submit" className="w-full hover:bg-gray-300 text-black bg-white ">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
