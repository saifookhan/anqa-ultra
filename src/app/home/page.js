import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ConversationProgress from "./components/ConversationProgress";
import TalentsSection from "./components/TalentsSection";
import ConsultingCapabilities from "./components/ConsultingCapabilities";
import HowUltraWorks from "./components/HowUltraWorks";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";

export default function HomePage() {
  return (
    <div className="w-full bg-[#01121B]">
      <div className="min-h-screen max-w-[1440px] mx-auto w-full text-white flex flex-col">
        <Navbar />
        <HeroSection />
        <ConversationProgress />
        <TalentsSection />
        <ConsultingCapabilities />
        <HowUltraWorks />
        <TeamSection />
        <FooterSection />
      </div>
    </div>
  );
}
