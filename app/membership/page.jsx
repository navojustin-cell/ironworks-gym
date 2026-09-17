import Link from "next/link";
import { Hero, ParkedNotice, CrossLink } from "../ui";
import { biz, gymRates, combatRates } from "../content";

export const metadata = { title: "Membership" };

export default function Membership() {
  return (
    <>
      <Hero
        eyebrow="Join the Ironworks family"
        title="Membership"
        lede="Simple plans, serious training. Pick the option that fits your schedule and your goals."
      />

      <section className="section section--light">
        <div className="wrap">
          <div className="eyebrow">153 South Auburn Street</div>
          <h2>Ironworks Gym</h2>

          <div className="grid grid--2" style={{ marginTop: 28, maxWidth: 760 }}>
            {gymRates.plans.map((p) => (
              <div className="card card--price" key={p.name}>
                <h3 style={{ marginBottom: 0 }}>{p.name}</h3>
                <div className="price">{p.price}</div>
                <div className="per">{p.per}</div>
                <div className="terms">{p.terms}</div>
              </div>
            ))}
          </div>

          <ParkedNotice items={gymRates.parked} />

          <p style={{ marginTop: 28 }}>
            Come in during staffed hours and we will get you signed up. Call{" "}
            <a href={biz.phoneHref} style={{ color: "#7a0f0f", fontWeight: 600 }}>
              {biz.phone}
            </a>{" "}
            with any questions.
          </p>
        </div>
      </section>

      {/* The combined offer is stated on the gym side and answered on the Combat side,
          instead of each facility selling as if the other did not exist. */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">158 Olympia Park Road</div>
          <h2>Combat Training Center</h2>
          <p style={{ maxWidth: 680, color: "#c9c9c9" }}>
            Classes are sold on their own packages, not bundled into the gym membership.
            Take one class or take everything we run. Your first class is free.
          </p>

          <div className="grid grid--2" style={{ marginTop: 30 }}>
            {combatRates.groups.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                {g.blurb ? (
                  <p style={{ color: "#a8a8a8", fontSize: ".95rem" }}>{g.blurb}</p>
                ) : null}
                <table className="rate-table">
                  <tbody>
                    {g.rows.map(([name, terms, price]) => (
                      <tr key={name}>
                        <td>
                          {name}
                          <span className="terms">{terms}</span>
                        </td>
                        <td>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <p className="note" style={{ marginTop: 26 }}>
            {combatRates.footnote}{" "}
            <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>
          </p>

          <ParkedNotice items={combatRates.parked} />

          <p style={{ marginTop: 26 }}>
            <Link href="/combat/schedule" className="btn">See the class schedule</Link>
          </p>
        </div>
      </section>

      <CrossLink
        title="First class free"
        body="Come in and take your first class at the Combat Training Center on the house. No sign-up, no commitment."
        href="/combat"
        cta="Visit the Combat Training Center"
      />
    </>
  );
}
