// PROTOTYPE DATA — none of this is real and none of it is stored anywhere.
//
// This file exists so the member area can be looked at and argued about before anyone
// builds a database. Every value here is invented placeholder content. The moment a real
// backend exists, this file is deleted and these shapes become queries.
//
// Kept separate from content.js on purpose: content.js holds real, sourced business facts
// (prices, addresses, hours). Nothing invented is allowed to leak into that file.

export const PROTOTYPE = true;

export const member = {
  firstName: "Sample",
  lastName: "Member",
  since: "March 2019",
  plan: "Monthly Membership",
  planPrice: "$50",
  status: "Active",
  nextBilling: "October 1",
  fobId: "IW-0442",
  combatPackage: "4 Class Package",
  combatPrice: "$125",
};

export const checkins = [
  ["Today", "5:42 AM", "South Auburn St"],
  ["Yesterday", "6:10 PM", "South Auburn St"],
  ["Sat", "12:04 PM", "Olympia Park Rd", "Adult Boxing"],
  ["Fri", "5:55 AM", "South Auburn St"],
  ["Thu", "6:02 PM", "Olympia Park Rd", "Adult MMA"],
  ["Wed", "5:48 AM", "South Auburn St"],
];

// Keyed day|time|class name, matching ScheduleTable.
export const booked = ["Tuesday|6:00pm|Adult MMA", "Thursday|7:00pm|Muay Thai"];

// The "programs" side. This is the piece that would sit on the friend's platform:
// a library of training programs a member is assigned to and works through.
export const programs = [
  {
    name: "Post-Rehab Shoulder Rebuild",
    coach: "Curtis Pracht",
    weeks: 8,
    week: 3,
    focus: "Rotator cuff, scapular control, pressing volume ramp",
  },
  {
    name: "Beginner Strength, 3 Day",
    coach: "Curtis Pracht",
    weeks: 12,
    week: 12,
    focus: "Squat, bench, deadlift, row. Linear progression.",
    done: true,
  },
  {
    name: "Fight Camp Conditioning",
    coach: "Nick Sperling",
    weeks: 6,
    week: 1,
    focus: "Anaerobic capacity, weight management, sparring load",
  },
];

// Every module in the member area, listed in one place so nothing is hidden during review.
// `verdict` is left null for Curtis and the friend to fill in: "keep", "cut", "later".
export const modules = [
  { href: "/member", name: "Dashboard",
    what: "Landing page after login. Today's classes, plan status, quick links.",
    needs: "Nothing new. Assembles what the other modules already hold.", verdict: null },
  { href: "/member/schedule", name: "Class Schedule & Booking",
    what: "The same schedule view as the public site, plus a seat-booking action.",
    needs: "Database: classes, capacity, bookings. This is the big one.", verdict: null },
  { href: "/member/programs", name: "Training Programs",
    what: "Programs a member is assigned to, with week-by-week progress.",
    needs: "Database: programs, assignments, progress. The friend's platform.", verdict: null },
  { href: "/member/membership", name: "Membership & Billing",
    what: "Current plan, price, next billing date, and the Combat package.",
    needs: "Database plus a payment processor. Biggest compliance question.", verdict: null },
  { href: "/member/checkins", name: "Check-In History",
    what: "Door fob history across both buildings.",
    needs: "Reading from the existing fob access system, if it can export.", verdict: null },
];
