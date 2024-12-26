import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";

const Discussions = () => {
  return (
    <div className="colouredMangaPage-background fade-in">
      <Navbar />
      <h1 className="discussion-h1-class">Manga discussion </h1>
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <a href="/csm-info/discussions/ChainsawManSubreddit">
            <p className="colouredMangaPage-image-text">r/ChainSawMan</p>
          </a>
        </div>

        <div className="colouredMangaPage-image-wrapper">
          <a href="/csm-info/discussions/ChainsawFolkSubreddit">
            <p className="colouredMangaPage-image-text">r/ChainsawFolk</p>
          </a>
        </div>

        <div className="colouredMangaPage-image-wrapper">
          <a href="/csm-info/discussions/MangaSubreddit">
            <p className="colouredMangaPage-image-text">r/Manga</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
