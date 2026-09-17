import { Hero } from "../ui";
import { biz, img } from "../content";

export const metadata = { title: "The Muscle Shop" };

const MERCH = [
  ["Ironworks Gym T-Shirt", "Classic bulldog logo tee. Unisex sizing."],
  ["Ironworks Gym Hoodie", "Heavyweight hoodie with front logo. Built for warm-ups and cold mornings."],
  ["Tank Top", "Muscle Shop branding on the back."],
  ["Muscle Shop Tee", "Est. 2004 bodybuilder logo graphic. Limited runs."],
  ["Gym Hat", "Structured cap with embroidered Ironworks mark."],
  ["Lifting Accessories", "Straps, wraps, chalk and training belts. Ask staff for current stock."],
];

const SUPPS = [
  ["Whey Protein", "Fast-digesting protein for post-workout recovery. Multiple flavors when in stock."],
  ["Pre-Workout", "Energy and focus for heavy sessions."],
  ["BCAAs & EAAs", "Intra-workout aminos to support endurance and recovery."],
  ["Creatine", "Staple for strength and power output."],
  ["Multivitamins", "Daily support for hard-training athletes."],
  ["Protein Bars & Snacks", "Grab-and-go fuel between sessions. Selection rotates."],
];

export default function Shop() {
  return (
    <>
      <Hero
        eyebrow="Front desk only"
        title="The Muscle Shop"
        lede="Ironworks merch and supplements, available for purchase at the front desk. Selection rotates, so ask staff what is in stock today."
      />

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <div>
              <div className="eyebrow">Gym merch</div>
              <h2>Rep the bulldog</h2>
              <p style={{ color: "#c4c4c4" }}>
                Shirts, hoodies and hats carrying the Ironworks bulldog and the Muscle Shop
                mark, plus the straps, wraps and chalk you forgot at home.
              </p>
            </div>
            {/* The Muscle Shop mark is already white artwork, so it needs no inverting. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.shopLogo.src}
              alt={img.shopLogo.alt}
              style={{ width: "100%", maxWidth: 320, margin: "0 auto", display: "block" }}
            />
          </div>
          <div className="grid grid--3" style={{ marginTop: 26 }}>
            {MERCH.map(([name, blurb]) => (
              <div className="card" key={name}>
                <h3>{name}</h3>
                <p style={{ color: "#bdbdbd", margin: 0 }}>{blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className="eyebrow">Supplements</div>
          <h2>Fuel recovery</h2>
          <div className="grid grid--3" style={{ marginTop: 26 }}>
            {SUPPS.map(([name, blurb]) => (
              <div className="card" key={name}>
                <h3>{name}</h3>
                <p style={{ color: "#bdbdbd", margin: 0 }}>{blurb}</p>
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: 30 }}>
            This is a catalogue, not a store. Nothing here has a listed price and there is no
            cart, by design. Call{" "}
            <a href={biz.phoneHref} style={{ color: "#fff" }}>{biz.phone}</a> to check stock.
          </p>
        </div>
      </section>
    </>
  );
}
