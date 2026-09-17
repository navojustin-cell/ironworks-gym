"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SUB = [
  ["/combat", "Overview"],
  ["/combat/schedule", "Schedule"],
  ["/combat/coaches", "Coaches"],
  ["/combat/membership", "Rates"],
  ["/combat/about", "Our History"],
];

export default function SubNav() {
  const path = usePathname();

  return (
    <div className="subnav">
      <div className="wrap subnav__inner">
        <span className="subnav__label">Combat Training Center</span>
        {SUB.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={path === href ? "is-active" : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
