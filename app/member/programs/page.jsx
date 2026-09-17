import { programs } from "../../member-data";

export const metadata = { title: "My Programs" };

export default function MemberPrograms() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow">Training</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>My Programs</h1>
          <p style={{ color: "#c4c4c4", maxWidth: 700 }}>
            Programs a coach has put you on, and where you are in each one. This is the piece
            that would live on the platform rather than on the website, because it is the
            only part here that is genuinely a database with content in it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid grid--2">
            {programs.map((p) => {
              const pct = Math.round((p.week / p.weeks) * 100);
              return (
                <div className="card" key={p.name}>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>
                    {p.done ? "Completed" : `Week ${p.week} of ${p.weeks}`}
                  </div>
                  <h3>{p.name}</h3>
                  <p style={{ color: "#bdbdbd" }}>{p.focus}</p>
                  <div className="bar" aria-hidden="true">
                    <span style={{ width: `${pct}%` }} />
                  </div>
                  <p style={{ color: "#8f8f8f", fontSize: ".9rem", margin: "10px 0 0" }}>
                    Coach: {p.coach} &middot; {pct}% through
                  </p>
                </div>
              );
            })}
          </div>

          <p className="note" style={{ marginTop: 30 }}>
            Open questions before this is real: who writes the programs, does a coach assign
            them per member or does a member pick from a library, and does anyone log their
            sets? A program nobody logs against is a PDF, and a PDF does not need a platform.
          </p>
        </div>
      </section>
    </>
  );
}
