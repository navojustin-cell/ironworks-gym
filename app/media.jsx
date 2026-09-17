"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Motion pieces carried over from the Combat demo: the video hero, the hover-to-colour
// program cards, and the click-through gallery carousel.

/**
 * Full-bleed looping background video. Same treatment as the demo: slightly desaturated,
 * darkened from the left and the bottom so the headline stays readable.
 * Visitors who ask their device for reduced motion get the still poster instead.
 */
export function VideoHero({ src, poster, logo, eyebrow, title, lede, children }) {
  return (
    <section className="vhero" style={{ backgroundImage: `url(${poster})` }}>
      <video
        className="vhero__video"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="vhero__shade vhero__shade--x" />
      <div className="vhero__shade vhero__shade--y" />
      <div className="wrap vhero__inner">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="vhero__logo" src={logo.src} alt={logo.alt} />
        ) : null}
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="vhero__title">{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children ? <div className="hero__cta">{children}</div> : null}
      </div>
    </section>
  );
}

/**
 * Program card. Black and white at rest. Point at it (or tab to it) and it comes up in
 * colour and its clip plays; cards without a clip slowly push in on the still instead.
 * On touch screens, where there is no hover, a clip plays while the card is on screen.
 * The whole card is a link. A stock photo says so in its corner.
 */
export function ProgramCard({ tag, name, blurb, shot, href = "/combat/schedule" }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => videoRef.current?.pause();

  useEffect(() => {
    if (!shot.clip) return;
    if (!window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? videoRef.current?.play().catch(() => {}) : stop()),
      { threshold: 0.6 }
    );
    io.observe(cardRef.current);
    return () => io.disconnect();
  }, [shot.clip]);

  return (
    <a
      ref={cardRef}
      href={href}
      className={shot.clip ? "pcard pcard--clip" : "pcard pcard--still"}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
    >
      <div className="pcard__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={shot.alt} loading="lazy" />
        {shot.clip ? (
          <video
            ref={videoRef}
            className="pcard__clip"
            src={shot.clip}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        ) : null}
        <span className="pcard__tag">{tag}</span>
        {shot.clip ? <span className="pcard__play" aria-hidden="true">&#9654;</span> : null}
        {shot.real ? null : <span className="pcard__stock">Stock photo</span>}
      </div>
      <div className="pcard__body">
        <h3>{name}</h3>
        <p>{blurb}</p>
        <span className="pcard__more">See class times &rarr;</span>
      </div>
    </a>
  );
}

/**
 * Centre-stage carousel. The active slide sits in the middle at full size; its neighbours
 * show dimmed at either side and are clickable. Arrows, dots, arrow keys and swipe all work.
 */
export function Carousel({ shots, label = "Photo gallery" }) {
  const n = shots.length;
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n]);

  // Shortest signed distance from the active slide, so the loop wraps both ways.
  const offset = (i) => {
    let d = i - index;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const onKey = (e) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}
      tabIndex={0} onKeyDown={onKey}>
      <div className="carousel__frame">
        <button type="button" className="carousel__nav" aria-label="Previous photo"
          onClick={() => go(index - 1)}>&#8249;</button>

        <div
          className="carousel__stage"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          {shots.map((s, i) => {
            const d = offset(i);
            const state = d === 0 ? "is-active" : Math.abs(d) === 1 ? "is-side" : "is-hidden";
            return (
              <figure
                key={s.src}
                className={`carousel__slide ${state}`}
                style={{ "--d": d }}
                onClick={() => d !== 0 && go(i)}
                aria-hidden={d !== 0}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} loading={Math.abs(d) <= 1 ? "eager" : "lazy"} />
              </figure>
            );
          })}
        </div>

        <button type="button" className="carousel__nav" aria-label="Next photo"
          onClick={() => go(index + 1)}>&#8250;</button>
      </div>

      <p className="carousel__caption" aria-live="polite">
        {index + 1} / {n} &middot; {shots[index].alt}
      </p>

      <div className="carousel__dots">
        {shots.map((s, i) => (
          <button key={s.src} type="button" aria-label={`Photo ${i + 1}`}
            className={i === index ? "carousel__dot is-active" : "carousel__dot"}
            onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}

/** Autoplay on a timer, paused while the pointer is over it. Wraps Carousel. */
export function AutoCarousel({ shots, every = 5000, label }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      ref.current?.querySelector('.carousel__nav[aria-label="Next photo"]')?.click();
    }, every);
    return () => clearInterval(t);
  }, [paused, every]);

  return (
    <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <Carousel shots={shots} label={label} />
    </div>
  );
}
