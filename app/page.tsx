


import ButtonNavigationClient from "@/components/home/ButtonNavigationClient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-black">

      {/* ---------- HERO ---------- */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-28 flex flex-col items-center text-center gap-8">

        {/* Logo */}
        <Image
          src="/hostelskit.png"
          alt="Hostel Kit logo"
          width={140}
          height={140}
          className="rounded-full border border-black"
        />

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Department Expert by Hostel Kit
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg sm:text-xl leading-relaxed">
          Connect with verified seniors to get honest guidance about
          <strong> courses, hostels, universities, and campus life</strong> —
          before making important decisions.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <ButtonNavigationClient />
        </div>
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

      {/* ---------- FINAL CTA ---------- */}
      <section className="border-t border-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Make confident decisions about your future
          </h2>
          <p className="text-lg leading-relaxed">
            Hostel Kit helps students bridge the gap between confusion and
            clarity through trusted department experts.
          </p>
          <ButtonNavigationClient />
        </div>
      </section>

    </main>
  );
}

