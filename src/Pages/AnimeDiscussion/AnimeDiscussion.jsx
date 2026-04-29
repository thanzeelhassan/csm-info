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
          Episode Discussion Index{" "}
        </h1>
        <br />
        <p className="ChainsawManSubreddit-paragraph">
          List of all episode discussions on r/ChainsawMan, r/Anime and
          r/csmanime.
        </p>
        <br />

        <br />
      </div>

      <div className="ChainsawManSubreddit-background-1 fade-in">
        <div>
          <h1 className="ChainsawManSubreddit-h2-class">Season 1</h1>
          <AnimeDiscussionTable data={season1Data} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDiscussion;
