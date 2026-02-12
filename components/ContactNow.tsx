"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

interface Props {
    name: string,
    course: string,
    subject: string
}

interface userInfo {
    UserName: string,
    No: number,
    city: string,
    why: string,
    time: string
}

function ContactNow(props: Props) {
    const { name, course, subject } = props

    const [open, setOpen] = useState(false)

    // Individual state hooks for each field in userInfo
    const [userName, setUserName] = useState("")
    const [no, setNo] = useState<number | "">("")
    const [city, setCity] = useState("")
    const [why, setWhy] = useState("")
    const [time, setTime] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleOneclick = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const body = {
                UserName: userName,
                No: no,
                city: city,
                why: why,
                time: time,
                // Including context from props if needed by the backend
                expertName: name,
                expertCourse: course,
                expertSubject: subject
            }

            // Example of sending via body (assuming endpoint exists or for user to see pattern)
            console.log("Sending data via body:", body)

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            toast.success("Request sent successfully!")
            setOpen(false)

            // Reset fields
            setUserName("")
            setNo("")
            setCity("")
            setWhy("")
            setTime("")

        } catch (error) {
            toast.error("something went wrong ")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    Contact Now
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact {name}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleOneclick} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="userName" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="no" className="text-right">
                            Phone
                        </Label>
                        <Input
                            id="no"
                            type="number"
                            value={no}
                            onChange={(e) => setNo(e.target.value === "" ? "" : Number(e.target.value))}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">
                            City
                        </Label>
                        <Input
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                            Preferred Time
                        </Label>
                        <Input
                            id="time"
                            placeholder="e.g. 5 PM - 7 PM"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="why" className="text-right mt-2">
                            Why?
                        </Label>
                        <Textarea
                            id="why"
                            placeholder="Briefly describe what you want to discuss"
                            value={why}
                            onChange={(e) => setWhy(e.target.value)}
                            className="col-span-3 min-h-[80px]"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit Request"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ContactNow

