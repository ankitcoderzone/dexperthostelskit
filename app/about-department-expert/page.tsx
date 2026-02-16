export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Department Expert
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Transforming the university admission experience through structured,
            digital-first guidance and real-time support.
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            Digital media and social media have become significant components
            of educational institutions and universities' promotional strategies.
            In today’s competitive world, they serve as the most effective platforms
            to reach a global audience.
          </p>

          <p>
            Student admission is one of the most important processes in higher
            education. It requires fast, accurate, and well-organized information.
            To make this process more flexible and efficient, we introduces
            <span className="font-semibold text-white"> Department Expert </span>
            for every course at the university level.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            CUET entrance exams are considered among the most competitive exams
            for enrollment in prestigious universities across India. While many
            students join coaching institutes, they often lack updated and
            subject-specific admission information tailored to their interests.
          </p>
        </div>

        {/* Problem */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              In many universities, the admission process is still handled
              manually or through WhatsApp messaging by administrators. This
              leads to delays, repeated inquiries, and difficulty managing
              registration documents.
            </p>

            <p>
              Paper-based processes create confusion regarding document uploads,
              fee receipts, form submissions, and tracking admission status.
            </p>

            <p>
              Additionally, YouTube channels and informal platforms struggle to
              manage large volumes of student inquiries effectively.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Department Expert is designed to create a modern, centralized
              admission information system. It accelerates the registration
              process, reduces administrative workload, and digitizes document
              management.
            </p>

            <p>
              A Department Expert does <span className="font-semibold text-white">not guarantee admission</span>.
              Instead, they provide real-time updates, reduce stress during the
              admission journey, and resolve queries over calls to ensure a smooth
              experience.
            </p>

            <p>
              The system enhances student confidence and improves decision-making quality.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            How Department Expert Helps
          </h2>

          <ul className="space-y-4 text-gray-300 text-lg list-disc list-inside">
            <li>Comprehensive details about courses</li>
            <li>Information on departments, fee structures, facilities, and infrastructure</li>
            <li>List of required admission documents</li>
            <li>
              Guidance on how academic percentages, preparation methods,
              family background, board type, drop cases, and financial aid
              influence admission outcomes — along with strategies to improve
              admission chances.
            </li>
            <li>
              Step-by-step support throughout the admission process for both
              students and parents.
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
}
