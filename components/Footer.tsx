// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Github,
//   Dribbble,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t border">
//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 gap-10 sm:flex sm:justify-between">

//           {/* BRAND */}
//           <div>
//             <Link href="/" className="flex items-center gap-3">
//               {/* <Image
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 alt="Logo"
//                 width={32}
//                 height={32}
//                 priority
//               /> */}
//               <span className="text-lg font-semibold">department expert </span>
//             </Link>
//           </div>

//           {/* LINKS */}
//           <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

//             {/* ABOUT */}
//             <div>
//               <h3 className="mb-4 text-sm font-semibold uppercase text-black">
//                 About
//               </h3>
//               <ul className="space-y-2 text-sm">
        
//                 <li>
//                   <Link href="#" className="hover:underline  ">
//                     Home
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* FOLLOW */}
//             <div>
//               <h3 className="mb-4 text-sm font-semibold uppercase text-black">
//                 Follow us
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="#" className="hover:underline">
//                     GitHub
//                   </Link>
//                 </li>
            
//               </ul>
//             </div>

//             {/* LEGAL */}
//             <div>
//               <h3 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">
//                 Legal
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="#" className="hover:underline">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:underline">
//                     Terms & Conditions
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* DIVIDER */}
//         <div className="my-8 h-px w-full " />

//         {/* BOTTOM SECTION */}
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

//           {/* COPYRIGHT */}
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()}{" "}
//             <Link href="#" className="hover:underline">
//               Flowbite™
//             </Link>
//             . All Rights Reserved.
//           </p>

//           {/* SOCIAL ICONS */}
//           <div className="flex space-x-6 text-muted-foreground">
//             <Link href="#"><Facebook className="h-5 w-5 hover:text-foreground" /></Link>
//             <Link href="#"><Instagram className="h-5 w-5 hover:text-foreground" /></Link>
//             <Link href="#"><Twitter className="h-5 w-5 hover:text-foreground" /></Link>
//             <Link href="#"><Github className="h-5 w-5 hover:text-foreground" /></Link>
//             <Link href="#"><Dribbble className="h-5 w-5 hover:text-foreground" /></Link>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-6">
        
        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
          <Link href="http://www.hostelskit.com" className="hover:underline">Hostel kit</Link>
          <Link href="#" className="hover:underline">About</Link>
          <Link href="http://www.hostelskit.com/blog" className="hover:underline">Blog</Link>
          <Link href="mailto:ankit.algoskool@gmail.com" className="hover:underline">Help</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Locations</Link>
          <Link href="https://www.instagram.com/hostelskit" className="hover:underline">Instagram</Link>
        </div>

        {/* LANGUAGE + COPYRIGHT */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span>English</span>
          <span>© {new Date().getFullYear()} Department Expert | Hostel Kit</span>
        </div>

      </div>
    </footer>
  );
}
