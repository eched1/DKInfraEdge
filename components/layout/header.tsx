"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "@/components/ui/icons";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-navy/80 backdrop-blur-lg">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="text-text-primary">DK</span>
            <span className="text-cyan">Infra Edge</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-surface-light text-cyan"
                        : "text-text-secondary hover:bg-surface-light hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2">
              <Button href="/contact" size="sm">
                Get in Touch
              </Button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-light md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border pb-4 md:hidden">
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
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-surface-light text-cyan"
                          : "text-text-secondary hover:bg-surface-light hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-3 pt-2">
                <Button href="/contact" size="sm" className="w-full">
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
