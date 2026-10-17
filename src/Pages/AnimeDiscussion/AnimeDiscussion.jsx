import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../styles/discussionPage.css";
import Season_1_Data from "../../assets/anime discussions/1. season_1.json";
import { useMemo } from "react";
import AnimeDiscussionTable from "../../Components/AnimeDiscussionTable/AnimeDiscussionTable";

const AnimeDiscussion = () => {
  const season1Data = useMemo(() => Season_1_Data, []);

  return (
    <div className="discussion-page">
      <Navbar />
      <div className="discussion-section fade-in">
        <h1 className="discussion-title">
          Episode Discussion Index
        </h1>
        <br />
        <p className="discussion-paragraph">
          List of all episode discussions on r/ChainsawMan, r/Anime and
          r/csmanime.
        </p>
        <br />

        <br />
      </div>

      <div className="discussion-section fade-in">
        <div>
          <h2 className="discussion-heading">Season 1</h2>
          <AnimeDiscussionTable data={season1Data} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDiscussion;
