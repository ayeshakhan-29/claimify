"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors py-2">
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-4">
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block text-gray-500 hover:text-blue-600 transition-colors py-1 text-sm"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Link
                href="/about"
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/get-started">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
