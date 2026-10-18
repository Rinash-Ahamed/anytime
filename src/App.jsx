import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import { Gallery, Philosophy, Standards } from "./components/Experience";
import JourneyFaq from "./components/JourneyFaq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  const [solidHeader, setSolidHeader] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  useEffect(() => {
    document.body.classList.add("is-ready");
    const onScroll = () => {
      setSolidHeader(window.scrollY > 40);
      const progress = document.querySelector(".progress");
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${maximum > 0 ? window.scrollY / maximum : 0})`;
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-in"); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px" });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const hashTimer = window.setTimeout(() => {
      const hash = window.location.hash.slice(1);
      const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    }, 0);
    return () => { window.clearTimeout(hashTimer); observer.disconnect(); window.removeEventListener("scroll", onScroll); document.body.classList.remove("is-ready"); };
  }, []);

  return (
    <>
      <div className="liquid-site-bg" aria-hidden="true" />
      <a className="skip" href="#main">Skip to content</a><div className="progress" aria-hidden="true" />
      <Header solid={solidHeader} />
      <main id="main"><Hero /><Treatments onSelect={setSelectedTreatment} /><JourneyFaq type="journey" /><Philosophy /><Gallery /><Standards /><JourneyFaq type="faq" /><Booking selected={selectedTreatment} onSelected={setSelectedTreatment} /></main>
      <Footer />
    </>
  );
}
