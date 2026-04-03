import "./App.css";
import AchievementSection from "./components/AchievementSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Hero from "./components/Hero";
import NeetGuideTable from "./components/NeetGuideTable";
import Stepper from "./components/Stepper";

function App() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Stepper/>
        <AchievementSection/>
        <NeetGuideTable />
        <ContactSection />
        <CTASection />
      </main>
    </>
  );
}

export default App;
