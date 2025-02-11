import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./ChainsawManSubreddit.css";
import Introduction_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import Bat_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/2. Bat Devil Arc.json";
import Eternity_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/3. Eternity Devil Arc.json";
import Katana_Man_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/4. Katana Man Arc.json";
import Bomb_Girl_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/5. Bomb Girl Arc.json";
import International_Assassins_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/6. International Assassins Arc.json";
import Gun_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/7. Gun Devil Arc.json";
import Control_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/8. Control Devil Arc.json";
import Justice_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/1. Justice Devil arc.json";
import Dating_Denji_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/2. Dating Denji arc.json";
import Falling_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/3. Falling Devil arc.json";
import Chainsaw_Man_Church_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/4. Chainsaw Man Church arc.json";
import Aging_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/5. Aging Devil arc.json";
import Current_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 2. Academy Saga/6. Current arc.json";

import { useMemo } from "react";
import DiscussionTable from "../../Components/DiscussionTable/DiscussionTable"; // Import the new component

const ChainsawManSubreddit = () => {
  const introductionArcData = useMemo(() => Introduction_Arc_Data, []);
  const batDevilArcData = useMemo(() => Bat_Devil_Arc_Data, []);
  const eternityDevilArcData = useMemo(() => Eternity_Devil_Arc_Data, []);
  const katanaManArcData = useMemo(() => Katana_Man_Arc_Data, []);
  const bombGirlArcData = useMemo(() => Bomb_Girl_Arc_Data, []);
  const internationalAssassinsArcData = useMemo(
    () => International_Assassins_Arc_Data,
    []
  );
  const gunDevilArcData = useMemo(() => Gun_Devil_Arc_Data, []);
  const controlDevilArcData = useMemo(() => Control_Devil_Arc_Data, []);
  const justiceDevilArcData = useMemo(() => Justice_Devil_Arc_Data, []);
  const datingDenjiArcData = useMemo(() => Dating_Denji_Arc_Data, []);
  const fallingDevilArcData = useMemo(() => Falling_Devil_Arc_Data, []);
  const chainsawManChurchArcData = useMemo(
    () => Chainsaw_Man_Church_Arc_Data,
    []
  );
  const AgingDevilArcData = useMemo(() => Aging_Devil_Arc_Data, []);
  const currentArcData = useMemo(() => Current_Arc_Data, []);

  return (
    <div>
      <Navbar> </Navbar>
      <div className="ChainsawManSubreddit-background-1 fade-in">
        <h1 className="ChainsawManSubreddit-h1-class">
          Chapter Discussion Index{" "}
        </h1>
        <br />
        <p className="ChainsawManSubreddit-paragraph">
          List of all chapter discussions on r/Chainsawman.
        </p>
        <br />
        <p className="ChainsawManSubreddit-paragraph">
          Chapters have been tabulated and divided into arcs for ease of access
          for readers.
        </p>
        <p className="ChainsawManSubreddit-paragraph">
          All the release dates are Japanese release dates.
        </p>
        <p className="ChainsawManSubreddit-paragraph">
          The arc name/title and the distribution isn't official and is
          something that fans made over the course of serialisation of this
          series.
        </p>
        <br />
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Introduction Arc </h1>
          <DiscussionTable data={introductionArcData} />
        </div>

        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Bat Devil Arc </h1>
          <DiscussionTable data={batDevilArcData} />
        </div>

        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Eternity Devil Arc</h1>
          <DiscussionTable data={eternityDevilArcData} />
        </div>

        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Katana Man Arc</h1>
          <DiscussionTable data={katanaManArcData} />
        </div>
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Bomb Girl Arc</h1>
          <DiscussionTable data={bombGirlArcData} />
        </div>
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">
            International Assassins Arc
          </h1>
          <DiscussionTable data={internationalAssassinsArcData} />
        </div>
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Gun Devil Arc</h1>
          <DiscussionTable data={gunDevilArcData} />
        </div>
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Control Devil Arc</h1>
          <DiscussionTable data={controlDevilArcData} />
        </div>
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Justice Devil Arc </h1>
          <DiscussionTable data={justiceDevilArcData} />
        </div>
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Dating Denji Arc </h1>
          <DiscussionTable data={datingDenjiArcData} />
        </div>
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Falling Devil Arc </h1>
          <DiscussionTable data={fallingDevilArcData} />
        </div>
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">
            Chainsaw Man Church Arc{" "}
          </h1>
          <DiscussionTable data={chainsawManChurchArcData} />
        </div>
      </div>
      <div className="ChainsawFolkSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawFolkSubreddit-h2-class"> Aging Devil Arc </h1>
          <DiscussionTable data={AgingDevilArcData} />
        </div>
      </div>
      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class"> Current Arc </h1>
          <DiscussionTable data={currentArcData} />
        </div>
      </div>
    </div>
  );
};

export default ChainsawManSubreddit;
