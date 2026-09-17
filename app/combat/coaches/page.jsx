import Link from "next/link";
import { Hero, Confirm } from "../../ui";
import { coaches, combatMedia } from "../../content";

export const metadata = { title: "Coaches" };

export default function Coaches() {
  return (
    <>
      <Hero
        eyebrow="Meet the team"
        title="Coaches"
        lede="Active competitors and veteran instructors, the team behind every class on the schedule."
        photo={combatMedia.bagsWide}
      />

      <section className="section">
        <div className="wrap" style={{ maxWidth: 980 }}>
          {coaches.map((c, i) => {
            const shot = combatMedia.coaches[c.name];
            return (
              <article key={c.name} className={i % 2 ? "coach coach--flip" : "coach"}>
                {shot ? (
                  <div className="coach__photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                  </div>
                ) : null}
                <div>
                  <div className="eyebrow" style={{ marginBottom: 4 }}>{c.role}</div>
                  <h2 style={{ marginBottom: ".4em" }}>
                    {c.name}
                    {c.sourced ? null : <Confirm>Bio unverified</Confirm>}
                  </h2>
                  {c.bio.map((para, j) => (
                    <p key={j} style={{ color: "#c4c4c4" }}>{para}</p>
                  ))}
                </div>
              </article>
            );
          })}

          <p>
            <Link href="/combat/membership" className="btn">Train with the team</Link>
          </p>
        </div>
      </section>
    </>
  );
}
