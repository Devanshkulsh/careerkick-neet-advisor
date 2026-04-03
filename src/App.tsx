import "./App.css";
import AchievementSection from "./components/AchievementSection";
import BottomBar from "./components/BottomBar";
import ContactFloat from "./components/ContactFloat";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Hero from "./components/Hero";
import NeetGuideTable from "./components/NeetGuideTable";
// import Stepper from "./components/Stepper";
import StepSection from "./components/StepSection";

function App() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <StepSection/>
        <AchievementSection/>
        <NeetGuideTable />
        <ContactSection />
        <CTASection />
        <ContactFloat />
      </main>
      <BottomBar />
    </>
  );
}

export default App;
