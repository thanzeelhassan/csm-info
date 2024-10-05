import React from "react";
import { useMemo } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DiscussionTable from "../../Components/DiscussionTable/DiscussionTable";
import Introduction_Arc_Data from "../../assets/discussions/Chainsawman Subreddit/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import "./Test.css";

const Test = () => {
  const introductionArcData = useMemo(() => Introduction_Arc_Data, []);

  return (
    <div>
      <Navbar />
      <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        Link
      </a>
      <DiscussionTable data={introductionArcData} />
      <div className="discussion-background-2 fade-in">
        <br />
        <div>
          <h1 className="discussion-h2-class">Introduction Arc </h1>
          <DiscussionTable data={introductionArcData} />
        </div>
      </div>
    </div>
  );
};

export default Test;
