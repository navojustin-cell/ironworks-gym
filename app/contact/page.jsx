import { Hero, Confirm } from "../ui";
import { biz, gym, combat, img } from "../content";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title="Contact"
        lede="Stop by for a tour or call during staffed hours. Members have 24/7 access, and we are happy to get you started."
        photo={img.exterior}
      />

      <section className="section section--dark">
        <div className="wrap">
          <div className="split">
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shot" src={img.exterior.src} alt={img.exterior.alt} />
              <figcaption>
                Look for the bulldog sign on South Auburn Street.
              </figcaption>
            </figure>
            <div>
              <div className="eyebrow">Finding us</div>
              <h2>Two addresses, one gym</h2>
              <p style={{ color: "#c4c4c4" }}>
                The weight room is downtown on South Auburn Street. Combat classes run out of
                Olympia Park Road, about five minutes away. One membership desk, one phone
                number, and staff at either who can sign you up for both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Both addresses on one page. On the old setup these lived on two different
          websites, so nobody could see the two locations side by side. */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid--2">
            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>The weight room</div>
              <h3>{gym.label}</h3>
              <p style={{ color: "#bdbdbd" }}>
                {gym.address}
                <br />
                {gym.city}
              </p>
              <p>
                <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>
                <br />
                <a href={`mailto:${biz.email}`} style={{ color: "#fff" }}>{biz.email}</a>
              </p>
              <table className="rate-table">
                <tbody>
                  {gym.hours.map(([label, value]) => (
                    <tr key={label}>
                      <td style={{ color: "#bdbdbd" }}>{label}</td>
                      <td style={{ fontSize: "1rem" }}>
                        {value}
                        {value.startsWith("CONFIRM") ? <Confirm /> : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a
                className="btn btn--ghost"
                style={{ marginTop: 16 }}
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  gym.address + ", " + gym.city
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>

            <div className="card">
              <div className="eyebrow" style={{ marginBottom: 6 }}>The fight gym</div>
              <h3>{combat.label}</h3>
              <p style={{ color: "#bdbdbd" }}>
                {combat.address}
                <br />
                {combat.city}
              </p>
              <p>
                <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>
              </p>
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
              <a
                className="btn btn--ghost"
                style={{ marginTop: 16 }}
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  combat.address + ", " + combat.city
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>

          <p className="note" style={{ marginTop: 32 }}>
            One number reaches both facilities:{" "}
            <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
