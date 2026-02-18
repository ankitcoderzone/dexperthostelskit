'use client'

import { useState } from 'react'
import ButtonNavigationClient from "@/components/home/ButtonNavigationClient";
import ApprovedExperts from "@/components/home/ApprovedExperts";
import Image from "next/image";

export default function Home() {

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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            message,
          }),
        }
      )

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      setSuccess(true)
      setEmail('')
      setMessage('')
    } catch (err) {
      setError('Failed to submit feedback. Please try again.')
    }

    setLoading(false)
  }

  return (
    <main className="w-full min-h-screen bg-white text-black">

      {/* ---------- HERO ---------- */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-28 flex flex-col items-center text-center gap-8">

        <Image
          src="/departmentexpert.png"
          alt="department expert logo"
          width={140}
          height={140}
          className="rounded-full border border-black"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Department Expert
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl leading-relaxed">
          Connect with verified seniors to get honest guidance about
          <strong> courses, hostels, universities, and campus life</strong> —
          before making important decisions.
        </p>

        <div className="pt-4">
          <ButtonNavigationClient />
        </div>

        <ApprovedExperts />
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="max-w-6xl mx-auto px-4 pb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why choose Department Experts?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-black p-8">
            <h3 className="text-xl font-semibold mb-3">
              Verified Seniors
            </h3>
            <p className="leading-relaxed">
              Guidance comes only from approved seniors with real experience in
              your department and university.
            </p>
          </div>

          <div className="border border-black p-8">
            <h3 className="text-xl font-semibold mb-3">
              Honest & Practical Advice
            </h3>
            <p className="leading-relaxed">
              No marketing or exaggeration — just real insights about courses,
              hostels, exams, and campus life.
            </p>
          </div>

          <div className="border border-black p-8">
            <h3 className="text-xl font-semibold mb-3">
              Safe & Moderated
            </h3>
            <p className="leading-relaxed">
              Every interaction is reviewed to ensure respectful, accurate, and
              helpful communication.
            </p>
          </div>

        </div>
      </section>

      {/* ---------- VALIDATION / FEEDBACK SECTION ---------- */}
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


      {/* ---------- FINAL CTA ---------- */}
      <section className="border-t border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Make confident decisions about your future
          </h2>
          <p className="text-lg leading-relaxed">
            Department Expert helps students bridge the gap between confusion and
            clarity through trusted department experts.
          </p>
          <ButtonNavigationClient />
        </div>
      </section>

    </main>
  );
}
