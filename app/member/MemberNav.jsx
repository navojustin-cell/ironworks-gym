"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { member } from "../member-data";

const NAV = [
  ["/member", "Dashboard"],
  ["/member/schedule", "Book a Class"],
  ["/member/programs", "My Programs"],
  ["/member/membership", "Membership"],
  ["/member/checkins", "Check-Ins"],
];

export default function MemberNav() {
  const path = usePathname();

  return (
    <div className="subnav subnav--member">
      <div className="wrap subnav__inner">
        <span className="subnav__label">
          {member.firstName} {member.lastName}
        </span>
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} className={path === href ? "is-active" : undefined}>
            {label}
          </Link>
        ))}
        <Link href="/" className="subnav__out">
          Log out
        </Link>
      </div>
    </div>
  );
}
