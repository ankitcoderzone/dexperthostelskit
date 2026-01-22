"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link href="/" className="text-lg font-semibold">
          Logo
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="https://hostelskit.com">About</Link>
          </Button>
          <Button variant="outline" asChild>
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

            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-6">
                <Link
                  href="https://hostelskit.com"
                  className="text-sm font-medium hover:underline"
                >
                  About
                </Link>
                <Link
                  href="https://hostelskit.com"
                  className="text-sm font-medium hover:underline"
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
