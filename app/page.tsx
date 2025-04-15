import ClientWrapper from "./components/ClieentWrapper";
import FeaturedEpisodes from "./components/FeaturedEpisode";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <div className="px-5 bg-white">

    <ClientWrapper>
      <HeroSection />
      <FeaturedEpisodes />
      {/* Other components */}
    </ClientWrapper>
    </div>
  );
}