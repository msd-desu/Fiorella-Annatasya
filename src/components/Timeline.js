import RevealSection from "./RevealSection";
import { timeline } from "@/data/content";

export default function Timeline() {
  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Perjalanan Kita</span>
      <h3 className="section-title">Dari situ, sampai sini</h3>

      <div className="timeline">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={`timeline-item${item.filled ? " filled" : ""}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">{item.eyebrow}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
