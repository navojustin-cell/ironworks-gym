import Link from "next/link";
import { biz, gymRates, combatRates } from "../../content";
import { member } from "../../member-data";

export const metadata = { title: "Membership" };

export default function MemberMembership() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow">Your account</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>Membership</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid grid--2">
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>153 South Auburn St</div>
              <h3>{member.plan}</h3>
              <table className="rate-table">
                <tbody>
                  <tr><td style={{ color: "#bdbdbd" }}>Price</td><td>{member.planPrice}/mo</td></tr>
                  <tr><td style={{ color: "#bdbdbd" }}>Status</td><td style={{ color: "#4ade80" }}>{member.status}</td></tr>
                  <tr><td style={{ color: "#bdbdbd" }}>Next billing</td><td style={{ fontSize: "1rem" }}>{member.nextBilling}</td></tr>
                  <tr><td style={{ color: "#bdbdbd" }}>Key fob</td><td style={{ fontSize: "1rem" }}>{member.fobId}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>158 Olympia Park Rd</div>
              <h3>{member.combatPackage}</h3>
              <table className="rate-table">
                <tbody>
                  <tr><td style={{ color: "#bdbdbd" }}>Price</td><td>{member.combatPrice}/mo</td></tr>
                  <tr><td style={{ color: "#bdbdbd" }}>Includes</td><td style={{ fontSize: "1rem" }}>Any 4/wk</td></tr>
                  <tr><td style={{ color: "#bdbdbd" }}>Jiu-Jitsu</td><td style={{ fontSize: "1rem" }}>Not included</td></tr>
                </tbody>
              </table>
              <p style={{ color: "#8f8f8f", fontSize: ".9rem", marginTop: 12 }}>
                Jiu-Jitsu runs on separate packages. See{" "}
                <Link href="/combat/membership" style={{ color: "#fff", textDecoration: "underline" }}>
                  Combat rates
                </Link>.
              </p>
            </div>
          </div>

          <p className="note" style={{ marginTop: 30 }}>
            Rates shown here come from the same file as the public pages, so a member and a
            walk-in can never be quoted different numbers. Gym {gymRates.plans[0].price}/mo,
            Combat 4-class {combatRates.groups[0].rows[1][2]}/mo.
          </p>

          <div className="note" style={{ marginTop: 20 }}>
            <strong style={{ color: "#f5c518" }}>Biggest open question on this page.</strong>
            <p style={{ margin: "8px 0 0" }}>
              Showing a plan is easy. Letting someone change, pause, or cancel it, or putting
              a card on file, means a payment processor and the rules that come with it. That
              is a different size of project than the rest of this put together. Worth asking
              whether the front desk already handles it fine. Call{" "}
              <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
