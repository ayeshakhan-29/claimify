"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Claimify</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Button size="sm">Get Started</Button>
        </nav>

        {/* Add mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
