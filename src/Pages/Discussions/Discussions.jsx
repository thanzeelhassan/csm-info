import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";

const Discussions = () => {
  return (
    <div className="colouredMangaPage-background fade-in">
      <Navbar />
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <a href="/csm-info/discussions/MangaDiscussion">
            <p className="colouredMangaPage-image-text">Manga discussions</p>
          </a>
        </div>
      </div>
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <a href="/csm-info/discussions/AnimeDiscussion">
            <p className="colouredMangaPage-image-text">Anime discussions</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
