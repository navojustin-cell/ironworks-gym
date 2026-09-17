import Link from "next/link";
import { Hero, CrossLink } from "./ui";
import { AutoCarousel, ProgramCard } from "./media";
import { biz, gymRates, programs, img, gallery, combatMedia } from "./content";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={`Est. ${biz.est} • Grass Valley, CA`}
        title="Ironworks Gym"
        lede={biz.tagline}
        photo={img.heroMural}
      >
        <Link href="/membership" className="btn">Join Now</Link>
        <Link href="/combat" className="btn btn--ghost">Combat Training Center</Link>
      </Hero>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="eyebrow">Est. 2004</div>
              <h2>Built on iron. Driven by purpose.</h2>
              <p style={{ fontSize: "1.08rem" }}>
                Ironworks Gym was not created to be another health club. Since 2004 we have
                built a community where beginners, competitors, powerlifters, athletes and
                everyday people train together with one goal: becoming stronger than
                yesterday.
              </p>
              <p>
                <Link href="/about" className="btn btn--ghost">Our story</Link>
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="shot" src={img.dumbbellsBW.src} alt={img.dumbbellsBW.alt} />
          </div>

          <div className="grid grid--3" style={{ marginTop: 52 }}>
            <div className="card">
              <h3>Strength</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                Train with equipment built for serious progress.
              </p>
            </div>
            <div className="card">
              <h3>Community</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                No egos. No judgment. Just people chasing improvement.
              </p>
            </div>
            <div className="card">
              <h3>Results</h3>
              <p style={{ color: "#bdbdbd", margin: 0 }}>
                From post-rehab clients to professional athletes, we help people move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="wrap">
          <div className="eyebrow">Join the Ironworks family</div>
          <h2>Membership</h2>
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
          <p style={{ marginTop: 26 }}>
            <Link href="/membership" className="btn">See all options</Link>
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <div className="eyebrow">The floor</div>
          <h2>Take a look around</h2>
          <div style={{ marginTop: 28 }}>
            <AutoCarousel shots={gallery} label="Ironworks Gym photos" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="eyebrow">Combat Training Center</div>
              <h2>And a fight gym down the road</h2>
              <p style={{ color: "#c9c9c9" }}>
                Ironworks also runs the Combat Training Center on Olympia Park Road, carrying
                on the T-5 Boxing lineage that started in 1989. Boxing, MMA, jiu-jitsu, Muay
                Thai, youth and women&rsquo;s classes, six days a week. First class free.
              </p>
              <p>
                <Link href="/combat" className="btn">Enter Combat</Link>
              </p>
            </div>
            {/* The Combat promo, playing on the front page. Labelled, because it is filmed at
                Olympia Park Road, not in the weight room this page is about. */}
            <figure className="figure">
              <video
                className="shot"
                src={combatMedia.promo}
                poster={combatMedia.ring.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ aspectRatio: "16 / 9" }}
              />
              <figcaption>Filmed at the Combat Training Center, 158 Olympia Park Road.</figcaption>
            </figure>
          </div>

          <div className="grid grid--programs" style={{ marginTop: 44 }}>
            {programs.map(([tag, name, blurb]) => (
              <ProgramCard key={name} tag={tag} name={name} blurb={blurb}
                shot={combatMedia.programs[name]} />
            ))}
          </div>
        </div>
      </section>

      <CrossLink
        title="Two facilities. One Ironworks."
        body="Lift on South Auburn Street. Train to fight on Olympia Park Road. Same name, same people, one phone number."
        href="/combat"
        cta="Visit the Combat Training Center"
      />
    </>
  );
}
