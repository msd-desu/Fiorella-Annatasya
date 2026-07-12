import RevealSection from "./RevealSection";
import { music } from "@/data/content";

export default function MusicPlayer() {
  const hasMusic = Boolean(music.spotifyEmbedUrl);

  return (
    <RevealSection className="section">
      <span className="section-eyebrow">Lagu Kita</span>
      <h3 className="section-title">Yang selalu mengingatkanku padamu</h3>

      <div className="music-box">
        <div className="music-box-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z" />
          </svg>
          Sedang diputar
        </div>

        <div className="music-embed-wrap">
          {hasMusic ? (
            <iframe
              src={music.spotifyEmbedUrl}
              width="100%"
              height="152"
              style={{ borderRadius: "8px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Lagu kita"
            />
          ) : (
            <p className="music-placeholder">
              Tempel embed Spotify atau YouTube di sini
            </p>
          )}
        </div>

        <p className="music-note">{music.note}</p>
      </div>
    </RevealSection>
  );
}
