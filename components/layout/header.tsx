"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-navy/70 backdrop-blur-xl backdrop-saturate-150">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1.5 text-lg font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-cyan text-sm font-black text-white shadow-lg shadow-teal/20">
              DK
            </span>
            <span className="text-text-primary">Infra</span>
            <span className="text-gradient">Edge</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 md:flex" role="list">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-cyan"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-[calc(0.5rem+1px)] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-cyan" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="ml-3">
              <Button href="/contact" size="sm" className="btn-glow">
                Get in Touch
              </Button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-light hover:text-text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border/50 pb-4 md:hidden">
            <ul className="mt-2 space-y-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan/10 text-cyan"
                          : "text-text-secondary hover:bg-surface-light hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-3 pt-2">
                <Button href="/contact" size="sm" className="w-full btn-glow">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
