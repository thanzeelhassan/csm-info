import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";
import Introduction_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import Bat_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/2. Bat Devil Arc.json";
import Eternity_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/3. Eternity Devil Arc.json";
import Katana_Man_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/4. Katana Man Arc.json";
import Bomb_Girl_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/5. Bomb Girl Arc.json";
import International_Assassins_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/6. International Assassins Arc.json";
import Gun_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/7. Gun Devil Arc.json";
import Control_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/8. Control Devil Arc.json";

import { useMemo } from "react";
import DiscussionTable from "../../Components/DiscussionTable/DiscussionTable"; // Import the new component

const Discussions = () => {
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

  return (
    <div>
      <Navbar> </Navbar>
      <div className="discussion-background-1 fade-in">
        <h1 className="discussion-h1-class">Chapter Discussion Index </h1>
        <br />
        <p className="paragraph">
          List of all chapter discussions on r/Chainsawman.
        </p>
        <br />
        <p className="paragraph">
          Chapters have been tabulated and divided into arcs for ease of access
          for readers.
        </p>
        <p className="paragraph">
          All the release dates are Japanese release dates.
        </p>
        <p className="paragraph">
          The arc name/title and the distribution isn't official and is
          something that fans made over the course of serialisation of this
          series.
        </p>
        <br />
        <div>
          <h1 className="discussion-h2-class">Introduction Arc </h1>
          <DiscussionTable data={introductionArcData} />
        </div>

        <div>
          <h1 className="discussion-h2-class">Bat Devil Arc </h1>
          <DiscussionTable data={batDevilArcData} />
        </div>

        <div>
          <h1 className="discussion-h2-class">Eternity Devil Arc</h1>
          <DiscussionTable data={eternityDevilArcData} />
        </div>

        <div>
          <h1 className="discussion-h2-class">Katana Man Arc</h1>
          <DiscussionTable data={katanaManArcData} />
        </div>
        <div>
          <h1 className="discussion-h2-class">Bomb Girl Arc</h1>
          <DiscussionTable data={bombGirlArcData} />
        </div>
        <div>
          <h1 className="discussion-h2-class">International Assassins Arc</h1>
          <DiscussionTable data={internationalAssassinsArcData} />
        </div>
        <div>
          <h1 className="discussion-h2-class">Gun Devil Arc</h1>
          <DiscussionTable data={gunDevilArcData} />
        </div>
        <div>
          <h1 className="discussion-h2-class">Control Devil Arc</h1>
          <DiscussionTable data={controlDevilArcData} />
        </div>
      </div>
    </div>
  );
};

export default Discussions;
