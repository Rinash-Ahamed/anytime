import deepTissueImage from "../../images/massage-deep-tissue.jpg";
import sportsRecoveryImage from "../../images/sports-recovery.jpg";
import maleFacialImage from "../../images/male-facial-treatment.jpg";
import maleShoulderImage from "../../images/male-shoulder-massage.jpg";
import maleFacialMaskImage from "../../images/male-facial-mask.jpg";
import spaInteriorImage from "../../images/spa-interior.jpg";
import maleWellnessImage from "../../images/male-wellness.jpg";
import spaCandlesImage from "../../images/spa-candles.jpg";
import spaDetailImage from "../../images/spa-detail.jpg";
import spaOilsImage from "../../images/spa-oils.jpg";
import wellnessStonesImage from "../../images/wellness-stones.jpg";

export const site = {
  brand: { name: "ANYTIME", descriptor: "Wellness" },
  contact: {
    whatsappNumber: "919788723059",
    phone: "+91 97887 23059",
    email: "",
    serviceArea: "Pollachi & Coimbatore",
    hours: []
  }
};

export const treatments = [
  { id: "full-body", number: "01", name: "Full Body Massage", description: "A slow, unhurried treatment to ease everyday tension and leave you feeling settled from head to toe.", duration: "1 hr 30 min", price: "₹1,600", image: maleShoulderImage, alt: "Man receiving a relaxing shoulder massage", brief: "Full body massage · linen · soft light", layout: "a", photoClass: "photo--tall" },
  { id: "deep-tissue", number: "02", name: "Deep Tissue Massage", description: "Focused, deliberate pressure on areas that hold tension, applied with close attention to how your body responds.", duration: "1 hr", price: "₹1,000", image: deepTissueImage, alt: "Hands applying focused pressure during a deep tissue treatment", brief: "Focused pressure · restorative care", layout: "b", photoClass: "photo--wide" },
  { id: "foot-massage", number: "03", name: "Foot Massage", description: "Focused care for tired feet to ease everyday pressure, encourage relaxation and leave each step feeling lighter.", duration: "30 min", price: "₹600", image: sportsRecoveryImage, alt: "Focused massage treatment on the foot and heel", brief: "Foot massage · restorative care", layout: "c", photoClass: "photo--square" },
  { id: "facial", number: "04", name: "Facial & De-Tan", description: "A considered skincare treatment that cleanses, refreshes and brings back an even, healthy-looking glow.", duration: "1 hr 30 min", price: "₹2,000", image: maleFacialImage, alt: "Man receiving a calming facial treatment", brief: "Facial · soft towels · natural skin", layout: "d", photoClass: "photo--portrait" }
];

export const experienceImages = [
  { src: maleWellnessImage, alt: "Man relaxing during a restorative back massage", position: "42% center" },
  { src: maleShoulderImage, alt: "Man receiving a therapeutic shoulder massage", position: "center" },
  { src: maleFacialImage, alt: "Man relaxing during a facial treatment", position: "center" },
  { src: sportsRecoveryImage, alt: "Focused sports recovery treatment", position: "center" }
];

export const gallery = [
  ["g1", "Man enjoying a refreshing facial mask treatment", "Facial care", maleFacialMaskImage],
  ["g2", "Towels, skincare and flowers prepared for a wellness treatment", "Treatment details", spaInteriorImage],
  ["g3", "Fresh green spa towels arranged in a calm room", "Fresh linens", spaCandlesImage],
  ["g4", "White towels with a candle and natural brush", "Quiet details", spaDetailImage],
  ["g5", "Neatly arranged spa towels in natural tones", "Prepared with care", spaOilsImage],
  ["g6", "Cooling cucumber facial with soft towels and flowers", "Restore & refresh", wellnessStonesImage]
];
