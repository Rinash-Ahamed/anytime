import { useEffect, useRef, useState } from "react";
import brandMark from "../../brand/onlylogo-alltime.png";

export default function InitialLoader({ ready }) {
  const startedAt = useRef(window.performance.now());
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    let removeTimer;
    const elapsed = window.performance.now() - startedAt.current;
    const delay = ready ? Math.max(0, 900 - elapsed) : 5500;
    const exitTimer = window.setTimeout(() => {
      setPhase("leaving");
      removeTimer = window.setTimeout(() => setPhase("hidden"), 650);
    }, delay);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [ready]);

  useEffect(() => {
    const loading = phase !== "hidden";
    document.body.classList.toggle("site-loading", loading);
    return () => document.body.classList.remove("site-loading");
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div className={`initial-loader${phase === "leaving" ? " is-leaving" : ""}`} role="status" aria-live="polite">
      <div className="initial-loader__content">
        <span className="initial-loader__halo" aria-hidden="true">
          <img className="initial-loader__logo" src={brandMark} alt="" fetchPriority="high" />
        </span>
        <span className="initial-loader__line" aria-hidden="true" />
        <span className="sr-only">Loading Alltime Wellness</span>
      </div>
    </div>
  );
}
