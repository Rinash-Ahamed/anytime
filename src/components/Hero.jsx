import { useEffect, useRef, useState } from "react";
import heroVideo from "../../brand/alltime-hero.mp4";
import heroPoster from "../../brand/alltime-hero-poster.jpg";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (!videoRef.current) return;
      if (motionQuery.matches) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    syncPlayback();
    motionQuery.addEventListener?.("change", syncPlayback);
    return () => motionQuery.removeEventListener?.("change", syncPlayback);
  }, []);

  return (
    <section className={`hero hero--cinematic${videoFailed ? " video-unavailable" : ""}`} id="top">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      >
        {!videoFailed && (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            tabIndex="-1"
            onError={() => setVideoFailed(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">Reconnect with your <em>natural balance.</em></h1>
        <p className="hero__lead">Thoughtful wellness treatments, delivered to your doorstep.</p>
        <div className="hero__cta">
          <a className="btn hero__primary" href="#book">Book Your Experience</a>
          <a className="btn hero__secondary" href="#treatments">Explore Treatments</a>
        </div>
      </div>

      <div className="hero__details" aria-label="Wellness services and locations">
        <span>Massage · Facial · Recovery</span>
        <span>Pollachi &amp; Coimbatore</span>
      </div>

      <a className="scrollcue" href="#treatments" aria-label="Scroll to explore treatments">
        <span aria-hidden="true" />
        <small>Scroll</small>
      </a>
    </section>
  );
}
