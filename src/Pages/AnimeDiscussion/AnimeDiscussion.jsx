import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./AnimeDiscussion.css";
import Season_1_Data from "../../assets/anime discussions/1. season_1.json";
import { useMemo } from "react";
import AnimeDiscussionTable from "../../Components/AnimeDiscussionTable/AnimeDiscussionTable";

const AnimeDiscussion = () => {
  const season1Data = useMemo(() => Season_1_Data, []);

  return (
    <div>
      <Navbar> </Navbar>
      <div className="ChainsawManSubreddit-background-1 fade-in">
        <h1 className="ChainsawManSubreddit-h1-class">
          Chapter Discussion Index{" "}
        </h1>
        <br />
        <p className="ChainsawManSubreddit-paragraph">
          List of all chapter discussions on r/ChainsawMan, r/Manga and
          r/ChainsawFolk.
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
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Introduction Arc </h1>
          <AnimeDiscussionTable data={season1Data} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDiscussion;
