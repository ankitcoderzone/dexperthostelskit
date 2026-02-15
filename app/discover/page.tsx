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
import { toast } from "sonner";
import ContactNow from "@/components/ContactNow";

export default function DiscoverDepartmentExpert() {
    const [formData, setFormData] = useState({
        university: "",
        course: "",
        subject: "",
    });

    const [experts, setExperts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // ✅ ERROR STATES (ONLY ADDITIONS)
    const [universityError, setUniversityError] = useState(false);
    const [courseError, setCourseError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);

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
        LAW: ["LLB", "BALLB", "LL.M.", "Ph.D. Law"],
    };

    /* ---------------- HELPERS ---------------- */

    const hasSubjects =
        formData.course &&
        SUBJECT_OPTIONS[formData.course] &&
        SUBJECT_OPTIONS[formData.course].length > 0;

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    // const getImageUrl = (path?: string) => {
    //     if (!path) return "/placeholder-avatar.png";
    //     return path; // Cloudinary already returns full URL
    // };


    /* ---------------- SEARCH ---------------- */

    const handleSearch = async () => {
        let hasError = false;

        if (!formData.university) {
            setUniversityError(true);
            toast.error("Please select a university");
            hasError = true;
        }

        if (!formData.course) {
            setCourseError(true);
            toast.error("Please select a course");
            hasError = true;
        }

        if (hasSubjects && !formData.subject) {
            setSubjectError(true);
            toast.error("Please select a subject");
            hasError = true;
        }

        if (hasError) return;

        setLoading(true);
        setShowResults(false);

        try {
            const params = new URLSearchParams({
                university: formData.university,
                course: formData.course,
            });

            if (hasSubjects) {
                params.append("subject", formData.subject);
            }

            const res = await fetch(
                `${API_BASE_URL}/api/approved-experts/?${params.toString()}`
            );

            const data = await res.json();
            setExperts(Array.isArray(data.results) ? data.results : []);
            setShowResults(true);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch experts. Please try again later.");
            setExperts([]);
            setShowResults(true);
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- UI ---------------- */

    return (
        <div className="min-h-screen bg-background px-4 py-12 text-foreground">
            <div className="mx-auto max-w-5xl">

                <h1 className="mb-2 text-center text-3xl font-semibold">
                    Discover Department Expert
                </h1>
                <p className="mb-10 text-center text-sm text-foreground/70">
                    Find experts by university, course, and subject
                </p>

                <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-4 rounded-xl border border-border bg-background p-6 shadow-lg sm:grid-cols-4">

                    {/* University */}
                    <div className="space-y-2">
                        <Label>
                            University
                            {universityError && (
                                <span className="ml-2 text-xs text-red-500">
                                    Select university
                                </span>
                            )}
                        </Label>
                        <Select
                            onValueChange={(v) => {
                                handleChange("university", v);
                                setUniversityError(false);
                            }}
                        >
                            <SelectTrigger
                                className={`w-full ${universityError ? "border-red-500" : ""}`}
                            >
                                <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(UNIVERSITY_OPTIONS).map(([k, v]) => (
                                    <SelectItem key={k} value={k}>{v}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Course */}
                    <div className="space-y-2">
                        <Label>
                            Course
                            {courseError && (
                                <span className="ml-2 text-xs text-red-500">
                                    Select course
                                </span>
                            )}
                        </Label>
                        <Select
                            onValueChange={(v) => {
                                handleChange("course", v);
                                handleChange("subject", "");
                                setCourseError(false);
                                setSubjectError(false);
                            }}
                        >
                            <SelectTrigger
                                className={`w-full ${courseError ? "border-red-500" : ""}`}
                            >
                                <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(COURSE_OPTIONS).map(([k, v]) => (
                                    <SelectItem key={k} value={k}>{v}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Subject */}
                    {hasSubjects && (
                        <div className="space-y-2">
                            <Label>
                                Subject
                                {subjectError && (
                                    <span className="ml-2 text-xs text-red-500">
                                        Select subject
                                    </span>
                                )}
                            </Label>
                            <Select
                                onValueChange={(v) => {
                                    handleChange("subject", v);
                                    setSubjectError(false);
                                }}
                            >
                                <SelectTrigger
                                    className={`w-full ${subjectError ? "border-red-500" : ""}`}
                                >
                                    <SelectValue placeholder="Select subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {SUBJECT_OPTIONS[formData.course].map((subject) => (
                                        <SelectItem key={subject} value={subject}>
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="rounded-lg bg-foreground px-6 py-2 text-sm font-medium text-background disabled:opacity-50"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

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
                                        src={expert.department_photo}
                                        alt={expert.name}
                                        fill
                                        sizes="112px"
                                        className="object-cover"
                                        unoptimized
                                    />

                                </div>

                                <h3 className="text-lg font-semibold">{expert.name}</h3>
                                <p className="mb-1 text-sm text-foreground/70">
                                    {expert.course_name}
                                </p>
                                <p className="mb-4 text-xs text-foreground/60">
                                    {expert.subject}
                                </p>

                                {/* <ContactNow name={expert.name}  course={expert.course_name} subject={expert.subject}   /> */}
                                <ContactNow
                                    expertId={expert.id}
                                    name={expert.name}
                                    course={expert.course}
                                    subject={expert.subject}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

