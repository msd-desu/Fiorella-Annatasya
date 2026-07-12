import RevealSection from "./RevealSection";
import { wishes } from "@/data/content";

function renderWishText(text, strong) {
  if (!strong || !text.includes(strong)) {
    return text;
  }
  const [before, after] = text.split(strong);
  return (
    <>
      {before}
      <strong>{strong}</strong>
      {after}
    </>
  );
}

export default function Wishes() {
  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Harapan &amp; Doa</span>
      <h3 className="section-title">Yang aku doakan untukmu</h3>

      <div className="wishes-list">
        {wishes.map((wish, i) => (
          <div key={i} className="wish-item">
            <span className="wish-mark">{String(i + 1).padStart(2, "0")}</span>
            <p className="wish-text">{renderWishText(wish.text, wish.strong)}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
