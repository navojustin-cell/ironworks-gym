import Link from "next/link";
import { Hero } from "../ui";
import { amenities, img } from "../content";

export const metadata = { title: "Amenities" };

export default function Amenities() {
  return (
    <>
      <Hero
        eyebrow="The arsenal"
        title="Amenities & Equipment"
        lede="Professional-grade iron for serious training. Everything you need to get stronger, available 24 hours a day to members."
        photo={img.machinesRow}
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2">
            {amenities.map(({ name, detail, shot, id }, i) => (
              <div className="card card--shot" key={name} id={id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="shot" src={shot.src} alt={shot.alt} loading="lazy" />
                <div className="card__body">
                  <div className="eyebrow" style={{ marginBottom: 6 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{name}</h3>
                  <p style={{ color: "#bdbdbd", margin: 0 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 34 }}>
            Want a walkthrough? Come see the floor during staffed hours.{" "}
          </p>
          <p>
            <Link href="/contact" className="btn">Visit us</Link>
          </p>
        </div>
      </section>
    </>
  );
}
