
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PuppySection from "./components/PuppySection";
import PuppyMeetWays from "./components/PuppyMeetWays";
import PuppyJourney from "./components/PuppyJourney";
import PuppyTrust from "./components/PuppyTrust";
import HappyFamilies from "./components/HappyFamilies";
import PuppyCTA from "./components/PuppyCTA";
import TeddyPupsFooter from "./components/Teddypupsfooter";
import FAQ from "./components/FAQ";

import "./App.css";

function App() {
  const [showPuppyDetail, setShowPuppyDetail] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        {!showPuppyDetail && <Hero />}

        {/* Puppy listing and individual puppy details */}
        <PuppySection
          onDetailChange={setShowPuppyDetail}
        />

        {/* Homepage sections - hidden on puppy detail page */}
        {!showPuppyDetail && (
          <>
            <PuppyMeetWays />
            <PuppyJourney />
            <PuppyTrust />
            <HappyFamilies />
            <FAQ/>
            <PuppyCTA />
            <TeddyPupsFooter />
          </>
        )}
      </main>
    </>
  );
}

export default App;
