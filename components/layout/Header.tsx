"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-2 ml-0.5">
          <Image
            src="/departmentexpert.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />

          <Link
            href="/"
            className="text-lg font-semibold whitespace-nowrap"
          >
            Department Expert
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          <Button  variant="ghost" asChild>
            <Link href="https://hostelskit.com">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="https://hostelskit.com">Contacts</Link>
          </Button>
        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="w-full">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col items-center justify-center gap-6 py-8">
                <Link
                  href="https://hostelskit.com"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="https://hostelskit.com"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contacts
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
