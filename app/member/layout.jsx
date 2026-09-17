import MemberNav from "./MemberNav";

export const metadata = {
  title: { default: "Member Area", template: "%s — Member Area — Ironworks Gym" },
};

export default function MemberLayout({ children }) {
  // The member area keeps the public Ironworks masthead above it, exactly like Combat
  // does. Signing in changes what you can do, not what site you are on.
  return (
    <>
      <MemberNav />
      <section
        style={{ background: "#f5c518", color: "#1b1b1b", padding: "16px 0" }}
      >
        <div className="wrap">
          <strong style={{ fontFamily: "var(--display)", letterSpacing: ".08em", fontSize: ".82rem" }}>
            INTERNAL: PROTOTYPE — EVERY NUMBER AND NAME BELOW IS INVENTED, NOTHING IS SAVED
          </strong>
        </div>
      </section>
      {children}
    </>
  );
}
