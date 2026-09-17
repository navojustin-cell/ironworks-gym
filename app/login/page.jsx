import Link from "next/link";

export const metadata = { title: "Member Login" };

export default function Login() {
  return (
    <>
      <section
        style={{ background: "#f5c518", color: "#1b1b1b", padding: "22px 0" }}
      >
        <div className="wrap">
          <strong style={{ fontFamily: "var(--display)", letterSpacing: ".1em" }}>
            INTERNAL: PROTOTYPE LOGIN — NO ACCOUNTS, NO PASSWORDS, NOTHING STORED
          </strong>
          <p style={{ margin: "8px 0 0", fontSize: ".95rem" }}>
            These fields do nothing. There is no authentication and no database behind this
            yet, so the button below simply opens the member area so it can be reviewed.
            Deciding how members actually sign in is an open question, and it depends on
            what the platform ends up being.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 440 }}>
          <div className="eyebrow">Members</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Log In</h1>
          <p style={{ color: "#c4c4c4" }}>
            Book classes, follow your program, and check your membership.
          </p>

          {/* The inputs deliberately have no `name`. A GET form sends named fields in the
              URL, which would put a typed password into the address bar, history and server
              logs. Unnamed fields are never submitted, so the button just opens /member. */}
          <form className="form" action="/member">
            <label>
              Email
              <input type="email" autoComplete="off" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" autoComplete="off" placeholder="••••••••" />
            </label>
            <button type="submit" className="btn" style={{ width: "100%", marginTop: 6 }}>
              Open the member area
            </button>
          </form>

          <p className="note" style={{ marginTop: 28 }}>
            Not a member yet? <Link href="/membership" style={{ color: "#fff", textDecoration: "underline" }}>See membership options</Link>,
            or come in during staffed hours and the front desk will get you set up.
          </p>
        </div>
      </section>
    </>
  );
}
