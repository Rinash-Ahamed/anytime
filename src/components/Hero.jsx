import { useEffect, useRef, useState } from "react";
import heroVideo from "../../brand/alltime-upscaled.mp4";
import heroPoster from "../../brand/alltime-hero-poster.jpg";

export default function Hero({ onReady }) {
  const videoRef = useRef(null);
  const onReadyRef = useRef(onReady);
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterOnly, setPosterOnly] = useState(() => window.matchMedia("(max-width: 760px)").matches);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const syncPosterMode = () => setPosterOnly(mobileQuery.matches);
    syncPosterMode();
    mobileQuery.addEventListener?.("change", syncPosterMode);
    return () => mobileQuery.removeEventListener?.("change", syncPosterMode);
  }, []);

  useEffect(() => {
    if (posterOnly) {
      onReadyRef.current?.();
      return undefined;
    }
    const video = videoRef.current;
    if (!video) return undefined;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = true;
    const syncPlayback = () => {
      if (motionQuery.matches || !isVisible) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.05 });

    observer.observe(video);
    syncPlayback();
    motionQuery.addEventListener?.("change", syncPlayback);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener?.("change", syncPlayback);
    };
  }, [posterOnly]);

  return (
    <section className={`hero hero--cinematic${videoFailed ? " video-unavailable" : ""}`} id="top">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      >
        {!videoFailed && !posterOnly && (
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
            onCanPlay={() => onReadyRef.current?.()}
            onError={() => {
              setVideoFailed(true);
              onReadyRef.current?.();
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">Feel restored, <em>right where you are.</em></h1>
        <p className="hero__lead">Professional massage, facial and recovery treatments, thoughtfully delivered to your home across Pollachi and Coimbatore.</p>
        <div className="hero__cta">
          <a className="btn hero__primary" href="#book">Book Your Experience</a>
          <a className="btn hero__secondary" href="#treatments">Explore Treatments</a>
        </div>
      </div>

      <div className="hero__details" aria-label="Wellness services and locations">
        <span>Massage / Facial / Recovery</span>
        <span>Pollachi &amp; Coimbatore</span>
      </div>

    </section>
  );
}
