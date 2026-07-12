import Image from "next/image";
import RevealSection from "./RevealSection";
import PlaceholderIcon from "./PlaceholderIcon";
import { galleryPhotos } from "@/data/content";

export default function Gallery() {
  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Galeri</span>
      <h3 className="section-title">Potongan-potongan cerita kita</h3>

      <div className="gallery-grid">
        {galleryPhotos.map((photo, i) => {
          const hasPhoto = Boolean(photo.url);
          return (
            <div
              key={i}
              className={`gallery-item${i === 0 ? " tall" : ""}`}
              style={{ position: "relative" }}
            >
              {hasPhoto ? (
                <Image
                  src={photo.url}
                  alt={photo.alt || `Galeri foto ${i + 1}`}
                  fill
                  sizes="(max-width: 600px) 50vw, 240px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="photo-placeholder">
                  <PlaceholderIcon size={20} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </RevealSection>
  );
}
