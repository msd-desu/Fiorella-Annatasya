import Image from "next/image";
import RevealSection from "./RevealSection";
import PlaceholderIcon from "./PlaceholderIcon";
import { couplePhoto } from "@/data/content";

export default function CouplePhoto() {
  const hasPhoto = Boolean(couplePhoto.url);

  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Kita Berdua</span>
      <h3 className="section-title">Foto favoritku</h3>

      <div className="photo-frame">
        {hasPhoto ? (
          <Image
            src={couplePhoto.url}
            alt="Foto berdua"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="photo-placeholder">
            <PlaceholderIcon />
            <span className="photo-placeholder-label">
             
            </span>
          </div>
        )}
      </div>
      <p className="photo-caption">{couplePhoto.caption}</p>
    </RevealSection>
  );
}
