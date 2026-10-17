import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./MangaPage.css";
import chainsawman_image from "../../assets/images/1296717_800px.jpg";

const readingLinks = [
  {
    name: "VIZ Media",
    description: "Official English release. Latest chapters free to read.",
    url: "https://www.viz.com/shonenjump/chapters/chainsaw-man",
  },
  {
    name: "MANGA Plus",
    description: "Official Shueisha app. Read in English, Spanish and more.",
    url: "https://mangaplus.shueisha.co.jp/titles/100037",
  },
];

const MangaPage = () => {
  return (
    <div className="mangaPage-background fade-in">
      <Navbar />
      <div className="mangaPage-content">
        <h1 className="mangaPage-title">Read Chainsaw Man</h1>
        <img
          src={chainsawman_image}
          alt="Chainsaw Man"
          className="mangaPage-image"
          width="800"
          height="800"
        />
        <ul className="mangaPage-links">
          {readingLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mangaPage-link"
              >
                <span className="mangaPage-link-name">{link.name}</span>
                <span className="mangaPage-link-description">
                  {link.description}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Link to="/manga/coloured" className="mangaPage-coloured-link">
          Looking for the fan-coloured editions? →
        </Link>
      </div>
    </div>
  );
};

export default MangaPage;
