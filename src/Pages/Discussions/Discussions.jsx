import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";

const Discussions = () => {
  return (
    <div className="colouredMangaPage-background fade-in">
      <Navbar />
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <Link to="/csm-info/discussions/MangaDiscussion">
            <p className="colouredMangaPage-image-text">Manga discussions</p>
          </Link>
        </div>
      </div>
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <Link to="/csm-info/discussions/AnimeDiscussion">
            <p className="colouredMangaPage-image-text">Anime discussions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
