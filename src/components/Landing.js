"use client";

import { useEffect, useRef, useState } from "react";

const NO_MESSAGES = [
  "yakin nih?",
  "coba lagi deh",
  "masa gitu sih",
  "ih jangan gitu",
  "sini dulu",
  "jauh amat larinya",
  "ayo dong sekali ini aja",
];

export default function Landing({ onProceed }) {
  const btnNoRef = useRef(null);
  const [escaping, setEscaping] = useState(false);
  const [noPos, setNoPos] = useState(null);
  const [hint, setHint] = useState("");
  const [leaving, setLeaving] = useState(false);
  const clickCountRef = useRef(0);

  const moveButtonRandomly = () => {
    const btn = btnNoRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const margin = 16;
    const maxX = window.innerWidth - rect.width - margin;
    const maxY = window.innerHeight - rect.height - margin;
    const randomX = Math.max(margin, Math.random() * maxX);
    const randomY = Math.max(margin, Math.random() * maxY);

    setEscaping(true);
    setNoPos({ top: randomY, left: randomX });
  };

  const handleNoInteraction = () => {
    clickCountRef.current += 1;
    moveButtonRandomly();
    const msg =
      NO_MESSAGES[Math.min(clickCountRef.current - 1, NO_MESSAGES.length - 1)];
    setHint(msg);
  };

  const handleNoTouch = (e) => {
    e.preventDefault();
    handleNoInteraction();
  };

  const handleNoHover = () => {
    if (clickCountRef.current > 0) moveButtonRandomly();
  };

  useEffect(() => {
    const onResize = () => {
      if (escaping) moveButtonRandomly();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [escaping]);

  const handleYes = () => {
    setLeaving(true);
    setTimeout(() => {
      onProceed();
    }, 600);
  };

  return (
    <section
      id="landing"
      style={{ opacity: leaving ? 0 : 1, transition: "opacity 0.6s ease" }}
    >
      <DotField />

      <span className="landing-eyebrow">Untuk Fiorella Anatasya</span>
      <h1 className="landing-title">
        Ada sesuatu buat kamu,
        <br />
        mau <em>lihat</em>?
      </h1>
      <p className="landing-sub">
        Sebelum lanjut, aku cuma mau nanya satu hal dulu.
      </p>

      <div className="landing-actions">
        <button
          ref={btnNoRef}
          type="button"
          className={`btn btn-no${escaping ? " escaping" : ""}`}
          style={
            noPos
              ? { top: `${noPos.top}px`, left: `${noPos.left}px` }
              : undefined
          }
          onClick={handleNoInteraction}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoTouch}
        >
          gak mau
        </button>
        <button type="button" className="btn btn-yes" onClick={handleYes}>
          ayo
        </button>
      </div>

      <p className="landing-hint">{hint}</p>
    </section>
  );
}

function DotField() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const count = 14;
    const generated = Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: (0.3 + Math.random() * 0.4).toFixed(2),
    }));
    setDots(generated);
  }, []);

  return (
    <div className="dot-field">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="dot"
          style={{ left: dot.left, top: dot.top, opacity: dot.opacity }}
        />
      ))}
    </div>
  );
}
