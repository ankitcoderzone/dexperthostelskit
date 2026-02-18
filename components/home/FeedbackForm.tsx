'use client'

import { useState } from 'react'

export default function FeedbackForm() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/feedback/`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, message }),
                }
            )

            if (!res.ok) throw new Error()

            setSuccess(true)
            setEmail('')
            setMessage('')
        } catch {
            setError('Failed to submit feedback. Please try again.')
        }

        setLoading(false)
    }

    return (
        <section className="border-t border-black py-28 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">
                        Built for Students. Improved by Students.
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Department Expert is already connecting students with verified seniors
                        across universities. Our platform is fully functional and continuously
                        expanding with new departments and experts.
                    </p>

                    <p className="text-lg leading-relaxed">
                        We believe the best platforms are shaped by real users. Your feedback
                        helps us refine features, improve guidance quality, and build tools
                        that genuinely solve student problems.
                    </p>

                    <div className="border border-black p-4 text-sm bg-white">
                        ✔ Verified department experts available
                        <br />
                        ✔ Secure & moderated interactions
                        <br />
                        ✔ Continuous feature improvements
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-black p-8 space-y-6 shadow-sm"
                >

                    <h3 className="text-xl font-semibold">
                        Share Your Experience
                    </h3>

                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-black px-4 py-3 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            How can we improve your experience?
                        </label>
                        <textarea
                            rows={4}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us what you would like to see improved..."
                            className="w-full border border-black px-4 py-3 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm">
                            Thank you for helping us improve Department Expert.
                        </p>
                    )}

                    {error && (
                        <p className="text-red-600 text-sm">
                            {error}
                        </p>
                    )}
                </form>

            </div>
        </section>
    )
}
