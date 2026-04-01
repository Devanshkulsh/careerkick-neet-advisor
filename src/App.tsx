import "./App.css";
import AchievementSection from "./components/AchievementSection";
import Stepper from "./components/Stepper";

function App() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        {/* <Hero /> */}
        <Stepper/>
        <AchievementSection/>
      </main>
    </>
  );
}

export default App;
