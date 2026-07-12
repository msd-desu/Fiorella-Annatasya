import { site } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero">
      <span className="hero-eyebrow">Selamat Ulang Tahun</span>
      <h2 className="hero-title">
        Untuk <span className="accent-word">kamu</span>,
      </h2>
      <div className="hero-name">{site.herName}</div>
      <p className="hero-date">Semoga hari ini terasa seistimewa dirimu</p>

      <div className="scroll-cue">
        <span>Gulir</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  );
}
