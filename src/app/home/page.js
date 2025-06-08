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
    <div className="min-h-screen w-full bg-[#0a232f] text-white flex flex-col">
      <Navbar />
      <HeroSection />
      <ConversationProgress />
      <TalentsSection />
      <ConsultingCapabilities />
      <HowUltraWorks />
      <TeamSection />
      <FooterSection />
    </div>
  );
}
