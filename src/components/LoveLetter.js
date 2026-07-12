import RevealSection from "./RevealSection";
import { loveLetter } from "@/data/content";

export default function LoveLetter() {
  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Sepucuk Pesan</span>
      <h3 className="section-title">Yang ingin aku bilang</h3>

      <div className="letter">
        {loveLetter.paragraphs.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "drop-cap" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>

      <p className="letter-signature">{loveLetter.signature}</p>
    </RevealSection>
  );
}
