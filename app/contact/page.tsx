"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: connect to API
    alert("Your message has been submitted.");
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about admissions or Department Expert?
            We are here to guide you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
              <p className="text-gray-300">
                Reach out for course guidance, admission queries.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              {/* <div>
                <p className="font-medium text-white">Email</p>
                <p>support@hostelskit.com</p>
              </div> */}

              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+91 7317629594</p>
              </div>

              <div>
                <p className="font-medium text-white">Office Hours</p>
                <p>Monday – Saturday</p>
                <p>10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </section>
    </main>
  );
}
