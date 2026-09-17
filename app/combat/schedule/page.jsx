import { Hero } from "../../ui";
import ScheduleTable from "../../ScheduleTable";
import { biz, combat, schedule } from "../../content";

export const metadata = { title: "Class Schedule" };

// Classes starting before the posted 4:30 PM weekday opening. Surfaced rather than
// silently published, because the hours block and the schedule cannot both be right.
const OPENS = { Monday: 16.5, Tuesday: 16.5, Wednesday: 16.5, Thursday: 16.5 };

function startHour(time) {
  const m = time.match(/^(\d+):(\d+)(am|pm)/);
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3] === "pm") h += 12;
  return h + Number(m[2]) / 60;
}

export default function Schedule() {
  const conflicts = [];
  for (const { day, classes } of schedule) {
    const opens = OPENS[day];
    if (!opens) continue;
    for (const [time, name] of classes) {
      const h = startHour(time);
      if (h !== null && h < opens) conflicts.push(`${day} ${time}, ${name}`);
    }
  }

  return (
    <>
      <Hero
        eyebrow="Six days a week"
        title="Class Schedule"
        lede="Classes marked with * are specialty classes. Your first class is free."
      />

      {conflicts.length > 0 ? (
        <section style={{ background: "#f5c518", color: "#1b1b1b", padding: "22px 0" }}>
          <div className="wrap">
            <strong style={{ fontFamily: "var(--display)", letterSpacing: ".1em" }}>
              INTERNAL: {conflicts.length} CLASSES START BEFORE THE POSTED OPENING TIME
            </strong>
            <p style={{ margin: "8px 0 0", fontSize: ".95rem" }}>
              The posted weekday hours are 4:30 PM to 8:30 PM, but these run earlier:{" "}
              {conflicts.join("; ")}. Either the hours or the schedule is wrong. Remove this
              banner once the owner confirms which.
            </p>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap">
          {/* Same component the member area uses, with booking switched off. */}
          <ScheduleTable days={schedule} />

          <p className="note">
            Call <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a> for more
            schedule details. Posted hours: {combat.hours.map(([l, v]) => `${l} ${v}`).join(" · ")}
          </p>
        </div>
      </section>
    </>
  );
}
