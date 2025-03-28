import React from "react";
import { BirthdayCard } from "./components/BirthdayCard";
import { HistoricMoments } from "./components/HistoricMoments";
import Photos from "./components/Photos";

const App: React.FC = () => {
  const handleExploreClick = () => {
    // Scroll to HistoricPlaces section
    const historicPlacesSection = document.querySelector(".historic-places");
    if (historicPlacesSection) {
      historicPlacesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreMeClick = () => {
    // Scroll to HistoricPlaces section
    const memoriesSection = document.querySelector(".photo-carousel");
    if (memoriesSection) {
      memoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="app">
      <BirthdayCard
        onExploreClick={handleExploreClick}
        onExploreMeClick={handleExploreMeClick}
      />
      <HistoricMoments />
      <Photos />
    </div>
  );
};

export default App;
