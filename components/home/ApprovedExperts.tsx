import Image from "next/image";

export const dynamic = "force-static";   // ⬅️ important
export const revalidate = 3600;          // ⬅️ ISR at page level

type Expert = {
  id: number;
  name: string;
  course_name: string;
  subject: string;
  university: string;
  department_photo?: string;
};

async function getExperts(): Promise<Expert[]> {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!BASE_URL) {
    console.error("API base URL missing");
    return [];
  }

  const res = await fetch(`${BASE_URL}/api/approved-experts/`, {
    cache: "force-cache",   
  });

  if (!res.ok) {
    console.error("Failed to fetch experts");
    return [];
  }

  const data = await res.json();

  if (Array.isArray(data.results)) return data.results;
  if (Array.isArray(data)) return data;

  return [];
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => 0.5 - Math.random()); // no mutation
}

export default async function ApprovedExperts() {
  const experts = await getExperts();

  const randomExperts = shuffleArray(experts).slice(0, 4);

  if (!randomExperts.length) return null;

  return (
    <section className="w-full max-w-6xl mx-auto pt-24 pb-20 px-4">
      
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold tracking-tight">
          Approved Department Experts
        </h3>
        <p className="text-gray-500 mt-3">
          Connect with verified seniors from top Universities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {randomExperts.map((expert) => (
          <div
            key={expert.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative w-20 h-20 mx-auto mb-5">
              {expert.department_photo && (
                <Image
                  src={expert.department_photo}
                  alt={expert.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover w-full h-full border-2 border-white shadow"
                />
              )}

              <div className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] px-2 py-0.5 rounded-full">
                ✔
              </div>
            </div>

            <div className="text-center space-y-1">
              <h4 className="font-semibold text-lg">{expert.name}</h4>
              <p className="text-sm text-gray-600">{expert.course_name}</p>
              <p className="text-sm text-gray-500">{expert.subject}</p>
              <p className="text-xs text-gray-400">{expert.university}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/discover"
          className="inline-block px-10 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Discover All Department Experts →
        </a>
      </div>
    </section>
  );
}
