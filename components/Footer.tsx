

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-6">
        
        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
          <Link href="http://www.hostelskit.com" className="hover:underline">Hostel kit</Link>
          <Link href="/about-department-expert" className="hover:underline">About</Link>
          <Link href="http://www.hostelskit.com/blog" className="hover:underline">Blog</Link>
          <Link href="mailto:ankit.algoskool@gmail.com" className="hover:underline">Help</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Locations</Link>
          <Link href="https://www.instagram.com/departmentexpert" className="hover:underline">Instagram</Link>
          <Link href="https://www.youtube.com/channel/UCGX4Mn4DO8REg0xvhN-OtEw" className="hover:underline">Youtube</Link>
        </div>

        {/* LANGUAGE + COPYRIGHT */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span>English</span>
          <span>© {new Date().getFullYear()} Department Expert</span>
        </div>

      </div>
    </footer>
  );
}
