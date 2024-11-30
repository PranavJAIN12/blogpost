"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
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
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [loading, setLoading] = useState(0);
  const pathName = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    
    setLoading(30);
    setTimeout(() => {
      setLoading(70);
    }, 400);
    setTimeout(() => {
      setLoading(100);
    }, 800);
  }, [pathName]);

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(0);
    }, 1000);
  }, []);

  return (
    <nav className="bg-opacity-70 backdrop-blur border-b mb-9 top-0 shadow-md sticky z-50">
    <LoadingBar color="#f11946" progress={loading} ref={ref} />
    <div className="container mx-auto px-4 py-4 relative flex items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">BlogVerse</Link>
      </div>
  
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="hover:font-bold">Home</Link>
        <Link href="/about" className="hover:font-bold">About</Link>
        <Link href="/blog" className="hover:font-bold">Blogs</Link>
        <Link href="/contact" className="hover:font-bold">Contact</Link>
      </div>
  
      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <Button variant="outline">Login</Button>
        <Button variant="outline">Sign Up</Button>
        <ModeToggle />
      </div>
  
      {/* Mobile Hamburger Menu */}
      <div className="block md:hidden ml-auto">
        <Sheet>
          <SheetTrigger>
            <Menu className="hover:bg-gray-700" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold">Pranav Blog</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-6">
                  <Link href="/" className="block text-gray-200 hover:text-gray-400">Home</Link>
                  <Link href="/about" className="block text-gray-200 hover:text-gray-400">About</Link>
                  <Link href="/blog" className="block text-gray-200 hover:text-gray-400">Blogs</Link>
                  <Link href="/contact" className="block text-gray-200 hover:text-gray-400">Contact</Link>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="mx-3">Login</Button>
                  <Button variant="outline" size="sm">Sign Up</Button>
                  <ModeToggle />
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
