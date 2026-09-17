import Link from "next/link";

export function Hero({ eyebrow, title, lede, photo, children }) {
  // A photo replaces the woven default background. The scrim is heavy on purpose:
  // every one of these interiors is bright, and the display type has to stay readable.
  const style = photo
    ? {
        backgroundImage:
          `linear-gradient(rgba(10,10,10,.74), rgba(10,10,10,.88)), url(${photo.src})`,
      }
    : undefined;

  return (
    <section className={photo ? "hero hero--photo" : "hero"} style={style}>
      <div className="wrap">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children ? <div className="hero__cta">{children}</div> : null}
      </div>
    </section>
  );
}


/** Yellow chip marking a value nobody has confirmed yet. It is deliberately loud. */
export function Confirm({ children = "Confirm" }) {
  return <span className="todo">{children}</span>;
}

/** The band that carries a visitor between the two facilities, in both directions. */
export function CrossLink({ title, body, href, cta }) {
  return (
    <section className="crosslink">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero__cta">
          <Link href={href} className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,.7)" }}>
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ParkedNotice({ items, heading = "Parked until confirmed" }) {
  if (!items?.length) return null;
  return (
    <div className="note" style={{ marginTop: 28 }}>
      <strong style={{ color: "#f5c518" }}>{heading}</strong>
      <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
        {items.map((it) => (
          <li key={it.name} style={{ marginBottom: 4 }}>
            <strong>{it.name}</strong> ({it.was}) &mdash; {it.question}
          </li>
        ))}
      </ul>
    </div>
  );
}
