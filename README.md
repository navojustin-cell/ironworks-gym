# Ironworks Gym, merged site

Local preview of the two Ironworks sites merged into one, under the gym as the parent brand.

```bash
npm install
npm run dev     # http://localhost:3100
```

## What this proves

The old setup was two separate WordPress installs on two domains. The gym linked out to
Combat; Combat linked back nowhere, so crossing over was a dead end.

Here, `app/layout.jsx` renders one masthead and one footer around every page, Combat
included. `app/combat/layout.jsx` adds Combat's own red sub-nav *underneath* that shared
masthead. That is the whole difference between a section and a separate website, and it
cannot regress: every Combat page carries 8 links back to the gym side because the layout
puts them there.

Old GoDaddy URLs are redirected in `next.config.js` so they do not 404 on launch.

## The member area (prototype)

The gym is the front door. `Log In` in the masthead goes to `/login`, and from there into
`/member`, which keeps the same Ironworks masthead above it and adds a green bar. Signing in
changes what you can do, not what site you are on.

**Nothing behind it is real.** There is no authentication, no database, no payment anything.
`app/member-data.js` holds invented placeholder data and is the only file allowed to contain
made-up values. `app/content.js` stays clean, holding real sourced business facts, so a
member and a walk-in can never be quoted different prices.

`/member` ends with a triage table listing every module, what it does, what has to exist
before it is real, and an empty Keep? column for Curtis and the friend to fill in. Every
module is reachable and clickable, including the ones likely to get cut, so the review
happens against a complete picture rather than a curated one.

**`app/ScheduleTable.jsx` is the merge made literal.** One component renders the schedule on
both `/combat/schedule` (read-only, the layout Curtis likes) and `/member/schedule` (same
layout plus a Book column). They cannot drift apart.

## Where the numbers live

**`app/content.js` is the single source of truth.** Every price, phone number, address and
hour on the site comes from that file, and no page hardcodes any of them. Fix a number
there and it is fixed everywhere.

Each value carries a source comment:

- `[live]` published on ironworksgym247.com, verified 2026-09-15
- `[owner]` given by the owner, 2026-09-15
- `[UNCONFIRMED]` carried from the InstaWP demo with no traceable source

Anything unconfirmed renders with a yellow chip on the page so it cannot ship by accident.
The class schedule page computes its own warning banner: six classes start before the
posted 4:30 PM opening, so the hours and the schedule disagree and one of them is wrong.

Full background, conflicts and open questions: `IRONWORKS-MERGE-PLAN.md` in Downloads.

## Images

All 19 originals were pulled from the GoDaddy CDN into `public/images/`, and every one was
opened and described by eye rather than guessed from its filename. The catalogue is the
`img` export in `app/content.js`. Two entries in the old manifest turned out to be wrong:
`blob-6efd83c` is the Muscle Shop logo, not a background photo, and the `9Z8A` set is not
generic "gym interior" but a room-by-room series.

14 of the 19 are placed. The other 5 are near-duplicates of shots already in use, kept as
spares. The bulldog badge is black line art on transparent, so the masthead inverts it to
white in CSS rather than carrying a second file.

Those 19 are all the weight room on South Auburn Street. Combat's media came separately.

### Combat media (`public/combat/`)

Pulled from the Combat InstaWP demo's theme folder, every file opened and checked. The
catalogue is `combatMedia` in `app/content.js`.

- **Promo video**, 30.6s, 1920x1080, 5.4MB. Bag work and pad work, filmed in front of the
  COMBAT / TRAINING CENTER stripe, so it is the real room. It plays behind the `/combat`
  hero and inline on the home page, where it is captioned as Olympia Park Road so nobody
  mistakes it for the weight room. Reduced-motion visitors get a still instead.
- **7 gallery shots + 2 history shots**: all the real facility, including the ring, the
  bag line, the grappling room, and the original T-5 ring.
- **5 coach photos**: all real, all the named people.
- **Program card images: 3 of 4 are stock photos of other gyms** (a white cage with
  non-English signage, a white-walled room, a curtained studio). They carry a yellow
  "Stock photo" tag on the page. Boxing and Women's Combat use real photos instead.

**Program card clips** (`public/combat/clips/`). The cards used to click through and play a
short clip, but those clips are gone from the demo server (315 likely filenames probed,
none found). Two replacements were cut from the promo with `bash scripts/cut-clips.sh`, which
uses the ffmpeg bundled by the `ffmpeg-static` dev dependency: MMA (guard, then a front kick)
and Boxing & Muay Thai (pad work ending on a roundhouse). About 220KB each, silent, looped,
played on hover, or while on screen on a phone. The promo has no grappling, kids or women's
footage, so those three cards slowly push in on their still photo instead. No clip was
invented for a class that was never filmed. Every card links to the schedule.

Effects carried over from the demo: the video hero, program cards that stay black and white
until pointed at, and a centre-stage carousel (arrows, dots, click a side photo, swipe, arrow
keys; autoplays and pauses on hover). All live in `app/media.jsx`.

## Not done yet

- **No hamburger on mobile.** The nav wraps to three rows under 860px. Works, but it should
  collapse.
- **Images are full-resolution JPEGs**, 280KB to 880KB each. Fine locally; they want
  resizing and WebP before launch.
- **No contact form.** Addresses and phone only.
- **No reviews section.** Deliberate. The demos used reviews with no attribution and no link
  back to Google, and one Combat review may be from a coach's own family. Real Google
  reviews with names and links, or none.
- **Gym staffed hours** are a CONFIRM placeholder. The demo's copy expired in September.
