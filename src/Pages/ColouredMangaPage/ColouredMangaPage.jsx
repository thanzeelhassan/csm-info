import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./ColouredMangaPage.css";
import chainsawman_image2 from "../../assets/images/1296717_800px.jpg";
import firepunch_image from "../../assets/images/firepunch1.jpg";
import github_icon from "../../assets/github-icon/github-mark-white.svg";

const ColouredMangaPage = () => {
  return (
    <div className="colouredMangaPage-background fade-in">
      <Navbar />
      <div className="colouredMangaPage-image-container">
        <div className="colouredMangaPage-image-wrapper">
          <p className="colouredMangaPage-image-text">Chainsaw Man</p>
          <a href="https://wayexit995.github.io/CSM/Manga/Index.html">
            <img
              src={chainsawman_image2}
              alt="Chainsaw Man"
              className="colouredMangaPage-image-class"
            />
          </a>
          <a
            href="https://github.com/wayexit995/CSM"
            target="_blank"
            rel="noopener noreferrer"
            className="colouredMangaPage-github-link"
          >
            <img src={github_icon} alt="GitHub" className="colouredMangaPage-github-icon" />
          </a>
        </div>
        <div className="colouredMangaPage-image-wrapper">
          <p className="colouredMangaPage-image-text">Fire Punch</p>
          <a href="https://wayexit995.github.io/Fire_Punch/">
            <img
              src={firepunch_image}
              alt="Fire Punch"
              className="colouredMangaPage-image-class"
            />
          </a>
          <a
            href="https://github.com/wayexit995/Fire_Punch"
            target="_blank"
            rel="noopener noreferrer"
            className="colouredMangaPage-github-link"
          >
            <img src={github_icon} alt="GitHub" className="colouredMangaPage-github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColouredMangaPage;
