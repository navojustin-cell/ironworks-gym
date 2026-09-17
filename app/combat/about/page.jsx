import Link from "next/link";
import { Hero, CrossLink } from "../../ui";
import { AutoCarousel } from "../../media";
import { biz, combat, combatMedia, combatGallery } from "../../content";

export const metadata = { title: "Our History" };

export default function CombatAbout() {
  return (
    <>
      <Hero
        eyebrow="Grass Valley since 1989"
        title="From T-5 to Combat"
        lede="Grass Valley combat sports with deep roots, from T-5 Boxing to the Ironworks Combat Training Center."
        photo={combatMedia.ring}
      />

      <section className="section">
        <div className="wrap" style={{ maxWidth: 980 }}>
          <div className="split" style={{ marginBottom: 20 }}>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shot" src={combatMedia.t5Ring.src} alt={combatMedia.t5Ring.alt} />
              <figcaption>The T-5 Boxing ring, Grass Valley since 1989.</figcaption>
            </figure>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shot" src={combatMedia.mural.src} alt={combatMedia.mural.alt} />
              <figcaption>The Combat Training Center mural, painted in-house.</figcaption>
            </figure>
          </div>
        </div>
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="eyebrow" style={{ marginTop: 30 }}>Our history</div>
          <h2>The T-5 lineage</h2>
          <p style={{ color: "#c4c4c4" }}>
            T-5 Boxing has been changing lives all over Grass Valley since it was established
            in 1989 by Rocky Twitchell Sr. Generations of fighters and first-timers have
            stepped through these doors to learn discipline, confidence, and the craft of
            combat sports.
          </p>
          <p style={{ color: "#c4c4c4" }}>
            At the beginning of 2024, Ironworks Gym had the privilege of taking over T-5
            Boxing and continuing to give back to our community here in Grass Valley,
            honoring the lineage while building what comes next.
          </p>

          <div className="eyebrow" style={{ marginTop: 44 }}>Today</div>
          <h2>The Combat Training Center</h2>
          <p style={{ color: "#c4c4c4" }}>
            Now nicknamed Combat, we believe that fitness is a way of life. We founded our gym
            to be a second home for our members. Whether you exercise every day or you have
            never stepped into a gym before, Ironworks can help shape the new you.
          </p>
          <p style={{ color: "#c4c4c4" }}>
            Through youth outreach and positive coaching, we strive to motivate all ages
            across Nevada County to live healthier lives, physically and mentally, through the
            friendships built here on the mat and in the ring.
          </p>

          <div className="grid grid--2" style={{ marginTop: 44 }}>
            <div className="card">
              <h3>Visit</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                {combat.label}
                <br />
                {combat.address}
                <br />
                {combat.city}
                <br />
                <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>
              </p>
            </div>
            <div className="card">
              <h3>Hours</h3>
              <table className="rate-table">
                <tbody>
                  {combat.hours.map(([label, value]) => (
                    <tr key={label}>
                      <td style={{ color: "#bdbdbd" }}>{label}</td>
                      <td style={{ fontSize: "1rem" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ marginTop: 32 }}>
            <Link href="/combat/coaches" className="btn">Meet the coaches</Link>
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className="eyebrow">Inside</div>
          <h2>Our training facility</h2>
          <div style={{ marginTop: 28 }}>
            <AutoCarousel shots={combatGallery} label="Combat Training Center photos" />
          </div>
        </div>
      </section>

      <CrossLink
        title="Part of Ironworks Gym"
        body="Combat is one of two Ironworks facilities in Grass Valley. The other is a 24-hour weight room on South Auburn Street, open since 2004."
        href="/about"
        cta="About Ironworks Gym"
      />
    </>
  );
}
