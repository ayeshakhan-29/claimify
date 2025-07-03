"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import Image from "next/image";

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Medical Billing", href: "/services/medical-billing" },
  { name: "Billing Audits", href: "/services/billing-audits" },
  { name: "Revenue Cycle Management", href: "/services/revenue-cycle" },
  { name: "Provider Credentialing", href: "/services/credentialing" },
  { name: "Front Office Assistant", href: "/services/front-office" },
  { name: "Chronic Care Management", href: "/services/chronic-care" },
  { name: "Remote Patient Monitoring", href: "/services/remote-monitoring" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Claimify Logo"
            width={1400}
            height={1400}
            className="rounded-lg h-24 md:h-10 w-full object-cover"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-blue-600 transition-colors focus:outline-none">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {serviceLinks.map((service, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    href={service.href}
                    className="w-full px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <Link href="/get-started">
            <Button
              size="sm"
              className="bg-black cursor-pointer hover:bg-blue-700"
            >
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
