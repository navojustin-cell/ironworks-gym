import Link from "next/link";
import { Hero, ParkedNotice, CrossLink } from "../../ui";
import { biz, combatRates } from "../../content";

export const metadata = { title: "Rates" };

export default function CombatMembership() {
  return (
    <>
      <Hero
        eyebrow="First class free"
        title="Combat Rates"
        lede="Review each package and pick the one that fits your needs. Any questions about rates or about joining, just ask."
      />

      <section className="section section--light">
        <div className="wrap">
          <div className="grid grid--2">
            {combatRates.groups.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                {g.blurb ? (
                  <p style={{ color: "#5f5f5f", fontSize: ".95rem" }}>{g.blurb}</p>
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

          <p style={{ marginTop: 28, color: "#5f5f5f" }}>
            {combatRates.footnote}{" "}
            <a href={biz.phoneHref} style={{ color: "#7a0f0f", fontWeight: 600 }}>
              {biz.phone}
            </a>
          </p>

          <ParkedNotice items={combatRates.parked} />

          <p style={{ marginTop: 26 }}>
            <Link href="/combat/schedule" className="btn">See what runs each day</Link>
          </p>
        </div>
      </section>

      <CrossLink
        title="Want the weight room too?"
        body="Combat packages cover classes at Olympia Park Road. Gym membership covers the 24-hour floor on South Auburn Street. Ask at either desk about running both."
        href="/membership"
        cta="See gym membership"
      />
    </>
  );
}
