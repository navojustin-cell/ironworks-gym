import Link from "next/link";
import { CrossLink } from "../ui";
import { VideoHero, ProgramCard, AutoCarousel } from "../media";
import { biz, combat, programs, schedule, combatMedia, combatGallery } from "../content";

export default function CombatHome() {
  const today = schedule[1]; // Tuesday, matching the demo's sample day

  return (
    <>
      <VideoHero
        src={combatMedia.promo}
        poster={combatMedia.ring.src}
        logo={combatMedia.logo}
        eyebrow={`Est. ${combat.est} • Formerly T-5 Boxing`}
        title="Forge Your Legacy"
        lede="Elite combat training in the heart of Grass Valley, and part of Ironworks Gym. Join a community of champions and unlock your true potential."
      >
        <Link href="/combat/membership" className="btn">View Rates</Link>
        <Link href="/combat/schedule" className="btn btn--ghost">View Schedule</Link>
      </VideoHero>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">Training programs</div>
          <h2>Choose your discipline</h2>
          <p style={{ color: "#a8a8a8", maxWidth: 640 }}>
            Point at a card to bring it to life.
          </p>
          <div className="grid grid--programs" style={{ marginTop: 28 }}>
            {programs.map(([tag, name, blurb]) => (
              <ProgramCard key={name} tag={tag} name={name} blurb={blurb}
                shot={combatMedia.programs[name]} />
            ))}
          </div>
          <p style={{ marginTop: 28, color: "#a8a8a8" }}>
            We offer Boxing, MMA, American and Brazilian Jiu-Jitsu, Muay Thai, Youth and
            Women&rsquo;s Combat classes. See the{" "}
            <Link href="/combat/schedule" style={{ color: "#fff", textDecoration: "underline" }}>
              class schedule
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className="eyebrow">Inside Olympia Park Road</div>
          <h2>Our training facility</h2>
          <div style={{ marginTop: 28 }}>
            <AutoCarousel shots={combatGallery} label="Combat Training Center photos" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">A sample day</div>
          <h2>{today.day} at Combat</h2>
          <div className="day" style={{ maxWidth: 680, marginTop: 20 }}>
            <table>
              <tbody>
                {today.classes.map(([time, name, ages, specialty]) => (
                  <tr key={time + name}>
                    <td>{time}</td>
                    <td>
                      {name} {specialty ? <span className="star">*</span> : null}
                      {ages ? <div className="ages">{ages}</div> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 22 }}>
            <Link href="/combat/schedule" className="btn">Full weekly schedule</Link>
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className="eyebrow">Come see us</div>
          <h2>First class free</h2>
          <div className="grid grid--2" style={{ marginTop: 26, maxWidth: 860 }}>
            <div className="card">
              <h3>{combat.label}</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
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
        </div>
      </section>

      <CrossLink
        title="Also a 24-hour gym"
        body="Your Combat classes run out of Olympia Park Road. The main Ironworks floor on South Auburn Street is open to members around the clock."
        href="/membership"
        cta="See gym membership"
      />
    </>
  );
}
