

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

interface Props {
    expertId: number
    name: string
    course: string
    subject: string
}

function ContactNow(props: Props) {
    const { expertId, name } = props

    const [open, setOpen] = useState(false)

    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [message, setMessage] = useState("")
    const [time, setTime] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!time) {
            toast.error("Please select a preferred time")
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(
                `${API_BASE_URL}/api/contact-expert/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        expert_id: expertId,
                        user_name: userName,
                        phone: phone,
                        city: city,
                        message: message,
                        preferred_time: time,
                    }),
                }
            )

            if (!response.ok) {
                const errorText = await response.text()
                console.error("Server error:", errorText)
                throw new Error("Failed to send request")
            }

            toast.success("Request sent successfully!")
            setOpen(false)

            // Reset form
            setUserName("")
            setPhone("")
            setCity("")
            setMessage("")
            setTime("")

        } catch (error) {
            console.error(error)
            toast.error("Something went wrong. Please try again.")
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

                <form onSubmit={handleSubmit} className="grid gap-4 py-4">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Name</Label>
                        <Input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Phone</Label>
                        <Input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">City</Label>
                        <Input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Preferred Time</Label>
                        <Select value={time} onValueChange={setTime}>
                            <SelectTrigger className="col-span-3 w-full">
                                <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1 PM - 2 PM">
                                    1 PM - 2 PM
                                </SelectItem>
                                <SelectItem value="6 PM - 9 PM">
                                    6 PM - 9 PM
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label className="text-right mt-2">Why?</Label>
                        <Textarea
                            placeholder="Briefly describe what you want to discuss"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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
