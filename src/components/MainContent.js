import Hero from "./Hero";
import Divider from "./Divider";
import LoveLetter from "./LoveLetter";
import CouplePhoto from "./CouplePhoto";
import MusicPlayer from "./MusicPlayer";
import Gallery from "./Gallery";
import Timeline from "./Timeline";
import Wishes from "./Wishes";
import Closing from "./Closing";

export default function MainContent({ visible }) {
  return (
    <main id="main-content" className={visible ? "visible" : ""}>
      <Hero />
      <Divider />
      <LoveLetter />
      <Divider />
      <CouplePhoto />
      <Divider />
      <MusicPlayer />
      <Divider />
      <Gallery />
      <Divider />
      <Timeline />
      <Divider />
      <Wishes />
      <Closing />
    </main>
  );
}
