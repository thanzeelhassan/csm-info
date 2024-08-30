import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";
import DiscussionData from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import { useMemo } from "react";
import DiscussionTable from "../../Components/DiscussionTable/DiscussionTable"; // Import the new component

const Discussions = () => {
  const data = useMemo(() => DiscussionData, []);

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
      {/* Use the DiscussionTable component here */}
      <DiscussionTable data={data} />
    </div>
  );
};

export default Discussions;
