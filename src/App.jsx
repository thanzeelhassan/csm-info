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

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

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
