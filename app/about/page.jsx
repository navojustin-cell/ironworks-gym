import Link from "next/link";
import { Hero, CrossLink } from "../ui";
import { biz, img } from "../content";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <Hero
        eyebrow={`Est. ${biz.est} • Grass Valley, CA`}
        title="About Ironworks"
        lede="A 24-hour gym for Grass Valley locals who train hard and want real progress. The space, the iron, and the community to get stronger."
        photo={img.cableMural}
      />

      <section className="section">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="eyebrow">Our history</div>
          <h2>Built out of necessity</h2>
          <p style={{ color: "#c4c4c4" }}>
            Opening in 2004, we were built out of necessity. Starting life as an Anytime
            Fitness, this was the first 24-hour facility in Grass Valley. In 2009 the name
            changed to Ironworks Gym, we dropped the preppy feel, and became the go-to for
            true fitness enthusiasts. We were Nevada County&rsquo;s first 24-hour health club.
          </p>
          <p style={{ color: "#c4c4c4" }}>
            Today we stay focused on consistency and helping members meet their goals. We
            encourage goals that are achievable, not beyond their capabilities, and we point
            members in the right direction to get there.
          </p>

          <div className="eyebrow" style={{ marginTop: 44 }}>Why come here</div>
          <h2>Real goals. Real work.</h2>
          <p style={{ color: "#c4c4c4" }}>
            If you have real goals, this is the gym for you. Whether you are getting past
            basic rehab, working on your general health, or pushing hard to go pro, this is
            the club with the history and the knowledge to get you there.
          </p>
          <p style={{ color: "#c4c4c4" }}>
            From day one we have focused on getting everyone to their next level. We are
            diverse enough to get you through post-rehab while building real pro athletes. We
            have been home to every local who has gone pro: football players, world-class
            powerlifters, and IndyCar drivers. We built them here.
          </p>
          <p style={{ color: "#c4c4c4" }}>
            You can always do your own thing in here with no judgment. But if you want a
            push, you will get it, either from the supportive locals on the floor or from the
            owner, who seems to get pure joy from helping people break through barriers they
            never thought possible.
          </p>

          <div className="eyebrow" style={{ marginTop: 44 }}>Owner &amp; trainer</div>
          <h2>{biz.owner}</h2>
          <p style={{ color: "#c4c4c4" }}>
            Curtis purchased the gym from the founder in December 2017. He is a longtime local
            personal trainer who has worked with every type of client, from people just trying
            to get fit to bodybuilding competitors and local legend Alexander Rossi. He also
            has a major focus on post-rehab and loves getting everyone back into the game.
          </p>

          <p style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn">Come by for a tour</Link>
          </p>
        </div>
      </section>

      <CrossLink
        title="And since 2024, a fight gym"
        body="Ironworks took over T-5 Boxing, established 1989, and runs it as the Combat Training Center on Olympia Park Road."
        href="/combat/about"
        cta="Read the Combat history"
      />
    </>
  );
}
