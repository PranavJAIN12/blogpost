"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className="bg-opacity-70 backdrop-blur border-b mb-9 top-0  shadow-md sticky z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Markdown Blog</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className=" hover:font-bold">
            Home
          </Link>
          <Link href="/about" className=" hover:font-bold">
            About
          </Link>
          <Link href="/blog" className=" hover:font-bold">
            Blogs
          </Link>
          <Link href="/contact" className=" hover:font-bold">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Login</Button>
          <Button variant="outline">Sign Up</Button>
          {/* <button
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            🌙
          </button> */}
          <ModeToggle/>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className=" hover:bg-gray-700" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold">Pranav Blog</SheetTitle>
                <SheetDescription>
                  <div className=" flex flex-col gap-6">
                    <Link
                      href="/"
                      className="block text-gray-200 hover:text-gray-400"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="block text-gray-200 hover:text-gray-400"
                    >
                      About
                    </Link>
                    <Link
                      href="/blogs"
                      className="block text-gray-200 hover:text-gray-400"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-gray-200 hover:text-gray-400"
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="mx-3">
                      Login
                    </Button>
                    <Button variant="outline" size="sm">
                      Sign Up
                    </Button>
                    <ModeToggle/>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
``;
