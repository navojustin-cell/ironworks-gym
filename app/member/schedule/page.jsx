import Link from "next/link";
import ScheduleTable from "../../ScheduleTable";
import { schedule, combat, biz } from "../../content";
import { booked } from "../../member-data";

export const metadata = { title: "Book a Class" };

export default function MemberSchedule() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow">Combat Training Center</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>Book a Class</h1>
          <p style={{ color: "#c4c4c4", maxWidth: 680 }}>
            Classes marked with * are specialty classes. This is the identical layout to the{" "}
            <Link href="/combat/schedule" style={{ color: "#fff", textDecoration: "underline" }}>
              public schedule
            </Link>
            , rendered by the same component, with one column added.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ScheduleTable days={schedule} bookable initialBooked={booked} />

          <p className="note">
            Booking is prototype only. Nothing is reserved, no one is told, and the state
            resets on reload. A real version needs class capacity, a booking record per
            member, and a rule for cancellations. Today the honest answer is: call{" "}
            <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>. Posted hours:{" "}
            {combat.hours.map(([l, v]) => `${l} ${v}`).join(" · ")}
          </p>
        </div>
      </section>
    </>
  );
}
