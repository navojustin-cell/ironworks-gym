"use client";

import { useState } from "react";

// ONE schedule component, two places.
//
//   /combat/schedule  -> public, read-only, the layout Curtis likes
//   /member/schedule  -> same layout, plus a Book action
//
// The layout lives here so the two can never drift apart. If the public schedule
// changes shape, the member one changes with it, and vice versa.

export default function ScheduleTable({ days, bookable = false, initialBooked = [] }) {
  const [booked, setBooked] = useState(new Set(initialBooked));

  // Day and time alone are not unique: Tuesday and Thursday both run two classes at 5:00pm.
  // The class name has to be part of the key or booking one books both.
  const key = (day, time, name) => `${day}|${time}|${name}`;

  const toggle = (k) => {
    setBooked((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  };

  return (
    <>
      {days.map(({ day, classes }) => (
        <div className="day" key={day}>
          <h3>{day}</h3>
          <table>
            <tbody>
              {classes.map(([time, name, ages, specialty]) => {
                const k = key(day, time, name);
                const isBooked = booked.has(k);
                return (
                  <tr key={time + name}>
                    <td>{time}</td>
                    <td>
                      {name} {specialty ? <span className="star">*</span> : null}
                      {ages ? <div className="ages">{ages}</div> : null}
                    </td>
                    {bookable ? (
                      <td className="day__action">
                        <button
                          type="button"
                          className={isBooked ? "chip chip--on" : "chip"}
                          onClick={() => toggle(k)}
                        >
                          {isBooked ? "Booked" : "Book"}
                        </button>
                      </td>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
