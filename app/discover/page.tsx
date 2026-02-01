// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";

// export default function DiscoverDepartmentExpert() {
//   const [university, setUniversity] = useState("");
//   const [course, setCourse] = useState("");
//   const [showResults, setShowResults] = useState(false);
//    const [formData, setFormData] = useState({
//     course: "",
//     university: "",
//   });

//   const experts = [
//     {
//       id: 1,
//       name: "Rahul Sharma",
//       course: "Computer Science",
//       image: "/experts/an.jpg",
//     },
//     {
//       id: 2,
//       name: "Ananya Verma",
//       course: "Information Technology",
//       image: "/experts/ank.jpg",
//     },
//   ];
//    const UNIVERSITY_OPTIONS = {
//     UoA: "University of Allahabad",
//     LU: "Lucknow University",
//   };
//     const handleChange = (
//     name: string,
//     value: string | boolean | File | null
//   ) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const COURSE_OPTIONS = {
//     BSC: "Bachelor of Science",
//     BA: "Bachelor of Arts",
//     BCA: "Bachelor of Computer Application",
//     BFA: "Bachelor of Fine Arts"


//   }

//   const handleSearch = () => {
//     if (!university || !course) return;
//     setShowResults(true);
//   };

//   return (
//     <div className="min-h-screen bg-background px-4 py-12 text-foreground">
//       <div className="mx-auto max-w-5xl">

//         {/* HEADER */}
//         <h1 className="mb-2 text-center text-3xl font-semibold">
//           Discover Department Expert
//         </h1>
//         <p className="mb-10 text-center text-sm text-foreground/70">
//           Find experts by university and course
//         </p>

//         {/* SEARCH FORM */}
//         <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-4 rounded-xl border border-border bg-background p-6 shadow-lg sm:grid-cols-3">
//           {/* <input
//             type="text"
//             placeholder="University Name"
//             value={university}
//             onChange={(e) => setUniversity(e.target.value)}
//             className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/40"
//           />

//           <input
//             type="text"
//             placeholder="Course Name"
//             value={course}
//             onChange={(e) => setCourse(e.target.value)}
//             className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/40"
//           /> */}

//            <div className="space-y-2">
//                 <Label className="text-foreground">University</Label>
//                 <Select
//                   onValueChange={(value) => handleChange("university", value)}
//                   required
//                 >
//                   <SelectTrigger className="w-full bg-background text-foreground">
//                     <SelectValue placeholder="Select university" />
//                   </SelectTrigger>

//                   <SelectContent className="bg-background text-foreground">
//                     {Object.entries(UNIVERSITY_OPTIONS).map(([key, label]) => (
//                       <SelectItem key={key} value={key}>
//                         {label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             <div className="space-y-2">
//                 <Label className="text-foreground">Course</Label>
//                 <Select
//                   onValueChange={(value) => handleChange("course", value)}
//                   required
//                 >
//                   <SelectTrigger className="w-full bg-background text-foreground">
//                     <SelectValue placeholder="Select course" />
//                   </SelectTrigger>

//                   <SelectContent className="bg-background text-foreground">
//                     {Object.entries(COURSE_OPTIONS).map(([key, label]) => (
//                       <SelectItem key={key} value={key}>
//                         {label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//           <button
//             onClick={handleSearch}
//             className="rounded-lg bg-foreground px-6 py-2 text-sm font-medium text-background transition hover:opacity-90"
//           >
//             Search
//           </button>
//         </div>

//         {/* RESULTS */}
//         {showResults && (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//             {experts.map((expert) => (
//               <div
//                 key={expert.id}
//                 className="flex flex-col items-center rounded-xl border border-border bg-background p-6 shadow-md transition hover:shadow-lg"
//               >
//                 {/* OVAL IMAGE */}
//                 <div className="relative mb-4 h-28 w-28">
//                   <Image
//                     src={expert.image}
//                     alt={expert.name}
//                     fill
//                     className="rounded-full object-cover"
//                   />
//                 </div>

//                 {/* NAME */}
//                 <h3 className="text-lg font-semibold">
//                   {expert.name}
//                 </h3>

//                 {/* COURSE */}
//                 <p className="mb-4 text-sm text-foreground/70">
//                   {expert.course}
//                 </p>

//                 {/* CONTACT BUTTON */}
//                 <button className="rounded-lg border border-border px-5 py-2 text-sm font-medium transition hover:bg-foreground hover:text-background">
//                   Contact Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function DiscoverDepartmentExpert() {
    const [formData, setFormData] = useState({
        university: "",
        course: "",
    });

    const [experts, setExperts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const UNIVERSITY_OPTIONS = {
        UOA: "University of Allahabad",
        // LU: "Lucknow University",
    };

    const COURSE_OPTIONS = {
    BSC: "Bachelor of Science",
    BA: "Bachelor of Arts",
    BCA: "Bachelor of Computer Application",
    MCA: "Master of Computer Application",
    BFA: "Bachelor of Fine Arts",
    MADS: "Defence and Strategic Studies",
    MscMaths: "Masters in Science",
    MA: "Master in Arts",
    Law: "LL.B/LL.M/BA LLB",



  };

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const getImageUrl = (path?: string) => {
        if (!path) return "/placeholder-avatar.png";
        if (path.startsWith("http")) return path;
        return `${API_BASE_URL}${path}`;
    };


    const handleSearch = async () => {
        if (!formData.university || !formData.course) return;

        setLoading(true);
        setShowResults(false);

        try {
            // 👇 SAFE query builder
            const params = new URLSearchParams({
                university: formData.university,
                course: formData.course,
            });

            const res = await fetch(
                `${API_BASE_URL}/api/approved-experts/?${params.toString()}`
            );

            if (!res.ok) {
                throw new Error(`API error: ${res.status}`);
            }

            const data = await res.json();

            setExperts(Array.isArray(data.results) ? data.results : []);
            setShowResults(true);
        } catch (error) {
            console.error(error);
            setExperts([]);
            setShowResults(true);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-background px-4 py-12 text-foreground">
            <div className="mx-auto max-w-5xl">

                {/* HEADER */}
                <h1 className="mb-2 text-center text-3xl font-semibold">
                    Discover Department Expert
                </h1>
                <p className="mb-10 text-center text-sm text-foreground/70">
                    Find experts by university and course
                </p>

                {/* SEARCH FORM */}
                <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-4 rounded-xl border border-border bg-background p-6 shadow-lg sm:grid-cols-3">
                    <div className="space-y-2">
                        <Label>University</Label>
                        <Select onValueChange={(v) => handleChange("university", v)}>
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

                    <div className="space-y-2">
                        <Label>Course</Label>
                        <Select onValueChange={(v) => handleChange("course", v)}>
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

                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="rounded-lg bg-foreground px-6 py-2 text-sm font-medium text-background disabled:opacity-50"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                {/* RESULTS */}
                {loading && <p className="text-center">Loading...</p>}

                {showResults && !loading && experts.length === 0 && (
                    <p className="text-center text-foreground/60">
                        No experts found for this selection.
                    </p>
                )}

                {showResults && experts.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="flex flex-col items-center rounded-xl border border-border bg-background p-6 shadow-md"
                            >
                                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full">
                                    <Image
                                        src={getImageUrl(expert.department_photo)}
                                        alt={expert.name}
                                        fill
                                        sizes="112px"

                                        className="object-cover"
                                    />
                                </div>


                                <h3 className="text-lg font-semibold">{expert.name}</h3>
                                <p className="mb-4 text-sm text-foreground/70">
                                    {expert.course_name}
                                </p>

                                <button className="rounded-lg border border-border px-5 py-2 text-sm transition hover:bg-foreground hover:text-background">
                                    Contact Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

