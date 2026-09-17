"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  ["/", "Home"],
  ["/amenities", "Amenities"],
  ["/membership", "Membership"],
  ["/combat", "Combat"],
  ["/shop", "Shop"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Masthead() {
  const path = usePathname();

  const active = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/blob-73269b4.png" alt="" aria-hidden="true" />
          <span className="brand__text">
            Ironworks <span>Gym</span>
          </span>
        </Link>
        <nav className="nav">
          {NAV.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={active(href) ? "is-active" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="masthead__actions">
          <Link
            href="/login"
            className={path.startsWith("/login") || path.startsWith("/member") ? "masthead__login is-active" : "masthead__login"}
          >
            Log In
          </Link>
          <Link href="/membership" className="btn">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
