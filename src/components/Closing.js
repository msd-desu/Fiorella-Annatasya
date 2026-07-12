import { closing } from "@/data/content";

export default function Closing() {
  return (
    <section id="closing">
      <span className="closing-eyebrow">Penutup</span>
      <p className="closing-title">&ldquo;{closing.quote}&rdquo;</p>
      <p className="closing-signature">
        <span className="name">{closing.signature}</span>
        <br />
        {closing.from}
      </p>
    </section>
  );
}
