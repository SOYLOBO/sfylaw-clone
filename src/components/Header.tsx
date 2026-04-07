"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// LogoWhite only accepts className prop — width is applied via wrapping element

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about", hasDropdown: true },
  { label: "PRACTICE AREAS", href: "/practice-areas", hasDropdown: true },
  { label: "OUR PUBLICATIONS", href: "/publications", hasDropdown: true },
  { label: "SUCCESSES", href: "/successes", hasDropdown: true },
  { label: "LAWYER OF LAST RESORT", href: "/lawyer-of-last-resort", hasDropdown: true },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#03204C" }}>
      {/* Top Bar */}
      <div style={{ padding: "20px 0 30px" }}>
        <div
          className="mx-auto flex items-center justify-between px-4"
          style={{ maxWidth: "1280px" }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <img src="/sfylaw-clone/images/logo-white.png" alt="The Law Offices of Sanford F. Young P.C." className="block w-[300px]" />
          </Link>

          {/* Phone Numbers */}
          <div className="hidden lg:flex flex-col gap-1 text-right">
            <div className="flex items-baseline gap-2">
              <span style={{ color: "#ffffff", fontSize: "18px" }}>
                New York Office:
              </span>
              <a
                href="tel:2122279755"
                style={{
                  color: "#FFD700",
                  fontSize: "24px",
                  fontWeight: "700",
                  textDecoration: "underline",
                }}
              >
                212-227-9755
              </a>
            </div>
            <div className="flex items-baseline gap-2">
              <span style={{ color: "#ffffff", fontSize: "18px" }}>
                New Jersey Office:
              </span>
              <a
                href="tel:9732850205"
                style={{
                  color: "#FFD700",
                  fontSize: "24px",
                  fontWeight: "700",
                  textDecoration: "underline",
                }}
              >
                973-285-0205
              </a>
            </div>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav
        className="hidden lg:block"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          padding: "8px 0",
        }}
      >
        <div
          className="mx-auto flex items-center px-4"
          style={{ maxWidth: "1280px" }}
        >
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "uppercase whitespace-nowrap no-underline transition-colors",
                "hover:text-[#FFD700]",
                index === 0
                  ? "text-[#FFD700]"
                  : "text-white"
              )}
              style={{
                fontFamily: "var(--font-sans, 'Noto Sans', sans-serif)",
                fontSize: "15px",
                padding: index === 0 ? "0 0 8px" : "0 20px 8px 0",
                textDecoration: "none",
              }}
            >
              {item.label}
              {item.hasDropdown && (
                <span
                  style={{ marginLeft: "4px", fontSize: "11px", opacity: 0.85 }}
                  aria-hidden="true"
                >
                  &#8964;
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            padding: "8px 0",
          }}
        >
          <div className="mx-auto flex flex-col px-4" style={{ maxWidth: "1280px" }}>
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "uppercase no-underline transition-colors py-3 border-b border-white/10",
                  "hover:text-[#FFD700]",
                  index === 0 ? "text-[#FFD700]" : "text-white"
                )}
                style={{
                  fontFamily: "var(--font-sans, 'Noto Sans', sans-serif)",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && (
                  <span
                    style={{ marginLeft: "4px", fontSize: "11px", opacity: 0.85 }}
                    aria-hidden="true"
                  >
                    &#8964;
                  </span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
