import { checkins } from "../../member-data";

export const metadata = { title: "Check-Ins" };

export default function MemberCheckins() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow">Door history</div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>Check-Ins</h1>
          <p style={{ color: "#c4c4c4", maxWidth: 680 }}>
            Every time your fob opened a door, at either building.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="day">
            <table>
              <tbody>
                {checkins.map(([when, time, where, klass], i) => (
                  <tr key={i}>
                    <td>{when}</td>
                    <td>
                      {where}
                      {klass ? <div className="ages">{klass}</div> : null}
                    </td>
                    <td style={{ textAlign: "right", color: "#8f8f8f" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="note" style={{ marginTop: 26 }}>
            This is the cheapest module here and the one most likely to get cut. It needs no
            new database, only a read from whatever runs the fob doors today, and it is
            useful to roughly nobody. Ask Curtis whether a single member has ever asked for
            it. Worth building only if the fob system exports easily.
          </p>
        </div>
      </section>
    </>
  );
}
