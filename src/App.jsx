import React from "react";
import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";

const App = () => {
  let heroData = [
    { text1: "Angel", text2: "Devil" },
    { text1: "Weapon", text2: "Hybrids" },
    { text1: "Makima", text2: "" },
  ];
  const [heroCount, setHeroCount] = useState(0);

  // Restart the 5s timer whenever the slide changes (including dot clicks),
  // and clear it on unmount so intervals don't pile up.
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [heroCount]);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
};

export default App;
