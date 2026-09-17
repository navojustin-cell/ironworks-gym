import Link from "next/link";
import ScheduleTable from "../ScheduleTable";
import { schedule, biz } from "../content";
import { member, programs, modules, booked } from "../member-data";

export default function MemberDashboard() {
  const today = schedule[1]; // Tuesday, standing in for "today"
  const active = programs.filter((p) => !p.done);

  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Welcome back</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
            {member.firstName} {member.lastName}
          </h1>
          <p style={{ color: "#c4c4c4" }}>
            Member since {member.since} &middot; {member.plan} &middot;{" "}
            <span style={{ color: "#4ade80" }}>{member.status}</span> &middot; fob{" "}
            {member.fobId}
          </p>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>Gym</div>
              <h3>{member.plan}</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                {member.planPrice} per month. Next billing {member.nextBilling}.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>Combat</div>
              <h3>{member.combatPackage}</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                {member.combatPrice} per month. Any 4 classes a week.
              </p>
            </div>
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>In progress</div>
              <h3>{active.length} programs</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                {active.map((p) => p.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Today</div>
          <h2>{today.day}&rsquo;s classes</h2>
          <p style={{ color: "#a8a8a8" }}>
            The same schedule the public site shows, with a seat you can claim.
          </p>
          <div style={{ marginTop: 22, maxWidth: 720 }}>
            <ScheduleTable days={[today]} bookable initialBooked={booked} />
          </div>
          <p style={{ marginTop: 18 }}>
            <Link href="/member/schedule" className="btn">Full week</Link>
          </p>
        </div>
      </section>

      {/* The triage table. Everything the member area could hold is listed here, including
          the parts that may get cut, so the review happens against a complete picture. */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">For review</div>
          <h2>What is in here, and what it costs to build</h2>
          <p style={{ color: "#c4c4c4", maxWidth: 720 }}>
            Nothing below is hidden or half-built into a corner. Each module is reachable and
            clickable so it can be judged on sight. The right-hand column is the honest cost:
            what has to exist behind it before it is real.
          </p>

          <table className="modules">
            <thead>
              <tr>
                <th>Module</th>
                <th>What it does</th>
                <th>What it needs</th>
                <th>Keep?</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.href}>
                  <td>
                    <Link href={m.href} style={{ color: "#fff", textDecoration: "underline" }}>
                      {m.name}
                    </Link>
                  </td>
                  <td>{m.what}</td>
                  <td>{m.needs}</td>
                  <td className="modules__verdict">{m.verdict ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="note" style={{ marginTop: 26 }}>
            Questions for Curtis: does a member ever need to do any of this from a phone at
            5am, or is the front desk faster? Anything the front desk does better should
            probably not be built. Call {biz.phone} beats a login screen for most of it.
          </p>
        </div>
      </section>
    </>
  );
}
