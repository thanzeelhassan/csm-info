import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";
import Introduction_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import Bat_Devil_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/2. Bat Devil Arc.json";
import { useMemo } from "react";
import DiscussionTable from "../../Components/DiscussionTable/DiscussionTable"; // Import the new component

const Discussions = () => {
  const introductionArcData = useMemo(() => Introduction_Arc_Data, []);
  const batDevilArcData = useMemo(() => Bat_Devil_Arc_Data, []);

  return (
    <div className="discussion-background fade-in">
      <Navbar> </Navbar>
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
        The arc name/title and the distribution isn't official and is something
        that fans made over the course of serialisation of this series.
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
    </div>
  );
};

export default Discussions;
