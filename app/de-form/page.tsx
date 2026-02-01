// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";

// export default function Page() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     university: "",
//     course: "",
//     gender: "",
//     is_last_year: "",
//     reason: "",
//     practical_knowledge: "",
//     mistakes: "",
//     agree_guidance: "",
//     agree_respect: "",
//     agree_review: "",
//     confirmation: false,
//     verification_document: null as File | null,
//     department_photo: null as File | null, // ✅ NEW FIELD
//   });

//   const UNIVERSITY_OPTIONS = {
//     UOA: "University of Allahabad",
//     // LU: "Lucknow University",
//   };

//   const COURSE_OPTIONS = {
//     BSC: "Bachelor of Science",
//     BA: "Bachelor of Arts",
//     BCA: "Bachelor of Computer Application",
//     MCA: "Master of Computer Application",
//     BFA: "Bachelor of Fine Arts",
//     MADS: "Defence and Strategic Studies",
//     MscMaths: "Masters in Science",
//     MA: "Master in Arts",
//     Law: "LL.B/LL.M/BA LLB",



//   };

//   const handleChange = (
//     name: string,
//     value: string | boolean | File | null
//   ) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const form = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value !== null) {
//         form.append(key, value as any);
//       }
//     });

//     const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


//     const res = await fetch(
//       `${API_BASE_URL}/api/department-expert/apply/`,
//       {
//         method: "POST",
//         body: form,
//       }
//     );

//     if (res.ok) {
//       alert("Application submitted successfully");
//     } else {
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
//       <Card className="w-full max-w-3xl bg-background text-foreground border border-border shadow-xl">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl">
//             Department Expert – HostelsKit
//           </CardTitle>
//           <CardDescription className="text-foreground/70">
//             Apply to guide juniors with honest and practical advice
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* Basic Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input
//                 className="bg-background text-foreground"
//                 placeholder="Name"
//                 required
//                 onChange={(e) => handleChange("name", e.target.value)}
//               />
//               <Input
//                 className="bg-background text-foreground"
//                 placeholder="Mobile Number"
//                 required
//                 onChange={(e) => handleChange("mobile", e.target.value)}
//               />
//             </div>

//             {/* University */}
//             <div className="space-y-2">
//               <Label>University</Label>
//               <Select onValueChange={(v) => handleChange("university", v)} required>
//                 <SelectTrigger className="w-full bg-background">
//                   <SelectValue placeholder="Select university" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Object.entries(UNIVERSITY_OPTIONS).map(([k, v]) => (
//                     <SelectItem key={k} value={k}>{v}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Course */}
//             <div className="space-y-2">
//               <Label>Course</Label>
//               <Select onValueChange={(v) => handleChange("course", v)} required>
//                 <SelectTrigger className="w-full bg-background">
//                   <SelectValue placeholder="Select course" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Object.entries(COURSE_OPTIONS).map(([k, v]) => (
//                     <SelectItem key={k} value={k}>{v}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Gender */}
//             <div className="space-y-2">
//               <Label>Gender</Label>
//               <Select onValueChange={(v) => handleChange("gender", v)} required>
//                 <SelectTrigger className="w-full bg-background">
//                   <SelectValue placeholder="Select gender" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Male">Male</SelectItem>
//                   <SelectItem value="Female">Female</SelectItem>
//                   <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Text Areas */}
//             <Textarea
//               className="bg-background text-foreground"
//               placeholder="Why do you want to become a Department Expert at Hostel Kit?"
//               onChange={(e) => handleChange("reason", e.target.value)}
//             />
//             <Textarea
//               className="bg-background text-foreground"
//               placeholder="What practical knowledge can you share with new students of your department?"
//               onChange={(e) => handleChange("practical_knowledge", e.target.value)}
//             />
//             <Textarea
//               className="bg-background text-foreground"
//               placeholder="What are the most common mistakes new students make in your department?"
//               onChange={(e) => handleChange("mistakes", e.target.value)}
//             />

//             {/* Yes / No */}
//             {[
//               ["Are you in last year?", "is_last_year"],
//               ["Do you agree to provide honest guidance and avoid misinformation?", "agree_guidance"],
//               ["Do you agree to maintain respectful and professional communication with students or parents?", "agree_respect"],
//               ["Do you agree that Hostel Kit may review and moniter interactions for quality and safety?", "agree_review"],
//             ].map(([label, key]) => (
//               <div key={key} className="space-y-2">
//                 <Label>{label}</Label>
//                 <Select onValueChange={(v) => handleChange(key, v)} required>
//                   <SelectTrigger className="w-full bg-background">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Yes">Yes</SelectItem>
//                     <SelectItem value="No">No</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             ))}

//             {/* Uploads */}
//             <div className="space-y-2">
//               <Label>Upload verification document(university ID card or any verified proof)</Label>
//               <Input
//                 type="file"
//                 accept="image/*,.pdf"
//                 required
//                 onChange={(e) =>
//                   handleChange("verification_document", e.target.files?.[0] || null)
//                 }
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>
//                 Upload your picture in front of your department
//               </Label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 required
//                 onChange={(e) =>
//                   handleChange("department_photo", e.target.files?.[0] || null)
//                 }
//               />
//             </div>

//             {/* Confirmation */}
//             <div className="flex items-center gap-2">
//               <Checkbox
//                 checked={formData.confirmation}
//                 onCheckedChange={(v) => handleChange("confirmation", !!v)}
//               />
//               <Label>I confirm that the information is accurate</Label>
//             </div>

//             <p className="text-sm text-foreground/70">
//               This form is an expression of interest. Submission does not guarantee selection.
//             </p>

//             <Button type="submit" className="w-full">
//               Submit Application
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


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
    mobile: "",
    university: "",
    course: "",
    subject: "", // ✅ NEW
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
    BFA: "Bachelor of Fine Arts",
    MCA: "Master of Computer Application",
    MCABCA: "Five Year Integrated BCA & MCA (Data Science)",
    MSC: "Master of Science",
    LAW: "Law",
    BCOM: "Bachelor of Commerce",
    BTECH: "B.TECH"
  };


  const SUBJECT_OPTIONS: Record<string, string[]> = {
    BSC: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Zoology",
      "Botany",
      "Statistics",
    ],
    BA: [
      "History",
      "Political Science",
      "Economics",
      "Sociology",
      "Hindi",
      "English",
    ],
   
    BTECH: [
      "Computer Sc. and Engineering",
      "Electronics and Comm. Engineering",
      
    ],
    MSC: [
      "Mathematics",
      "Physics",
      "Statistics",
      "Zoology",
      "Cognitive Science",
      "Materials Science",
      "Food Technology",
      "Bioinformatics",
      "Biotechnology",
      "Environmental Science",
      "Design and Innovation in Rural Technology",
      "Agricultural Zoology & Entomology",
      "Anthropology",
      "Geography",
      "Psychology",
      "Bio-Chemistry",
      "Botany",
      "Agricultural Botany",
      "Chemistry",
      "Agricultural Chemistry & Soil Science",
      "Defence Studies",
      "Applied Geology",
      "Computer Science",
      "Textile & Apparel Designing",
      "Food and Nutrition",
    ],
    MA: [
      "Philosophy",
      "Hindi",
      "Mass Communication",
      "Political Sc.",
      "Psychology",
      "Med. & Mod. History",
      "Anthropology",
      "(Music- Sitar/ Tabla/Voca",
      "Education",
      "English Litt.",
      "Geography",
    ],
    LAW: [
      "LLB",
      "BALLB",
      "LL.M.",
      "Ph.D. Law",
    ],
  };

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    name: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        form.append(key, value as any);
      }
    });

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const res = await fetch(
      `${API_BASE_URL}/api/department-expert/apply/`,
      {
        method: "POST",
        body: form,
      }
    );

    if (res.ok) {
      alert("Application submitted successfully");
    } else {
      alert("Something went wrong");
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-3xl bg-background text-foreground border border-border shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Department Expert – Hostel Kit
          </CardTitle>
          <CardDescription className="text-foreground/70">
            Apply to guide juniors with honest and practical advice
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                required
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <Input
                placeholder="Mobile Number"
                required
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
            </div>

            {/* University */}
            <div className="space-y-2">
              <Label>University</Label>
              <Select
                onValueChange={(v) => handleChange("university", v)}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(UNIVERSITY_OPTIONS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Course */}
            <div className="space-y-2">
              <Label>Course</Label>
              <Select
                onValueChange={(v) => {
                  handleChange("course", v);
                  handleChange("subject", ""); // ✅ reset subject
                }}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(COURSE_OPTIONS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subject (Dependent) */}
            {formData.course && (
              <div className="space-y-2">
                <Label>Subject</Label>
                <Select
                  onValueChange={(v) => handleChange("subject", v)}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECT_OPTIONS[formData.course]?.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Gender */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                onValueChange={(v) => handleChange("gender", v)}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Prefer not to say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Text Areas */}
            <Textarea
              placeholder="Why do you want to become a Department Expert at Hostel Kit?"
              onChange={(e) => handleChange("reason", e.target.value)}
            />
            <Textarea
              placeholder="What practical knowledge can you share with new students of your department?"
              onChange={(e) =>
                handleChange("practical_knowledge", e.target.value)
              }
            />
            <Textarea
              placeholder="What are the most common mistakes new students make in your department?"
              onChange={(e) => handleChange("mistakes", e.target.value)}
            />

            {/* Yes / No */}
            {[
              ["Are you in last year?", "is_last_year"],
              ["Do you agree to provide honest guidance and avoid misinformation?", "agree_guidance"],
              ["Do you agree to maintain respectful and professional communication with students or parents?", "agree_respect"],
              ["Do you agree that Hostel Kit may review and moniter interactions for quality and safety?", "agree_review"],
            ].map(([label, key]) => (
              <div key={key} className="space-y-2">
                <Label>{label}</Label>
                <Select
                  onValueChange={(v) => handleChange(key, v)}
                  required
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
            ))}

            {/* Uploads */}
            <div className="space-y-2">
              <Label>Verification Document</Label>
              <Input
                type="file"
                accept="image/*,.pdf"
                required
                onChange={(e) =>
                  handleChange(
                    "verification_document",
                    e.target.files?.[0] || null
                  )
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Department Photo</Label>
              <Input
                type="file"
                accept="image/*"
                required
                onChange={(e) =>
                  handleChange(
                    "department_photo",
                    e.target.files?.[0] || null
                  )
                }
              />
            </div>

            {/* Confirmation */}
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.confirmation}
                onCheckedChange={(v) =>
                  handleChange("confirmation", !!v)
                }
              />
              <Label>I confirm that the information is accurate</Label>
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
