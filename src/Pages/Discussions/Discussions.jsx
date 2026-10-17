import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Discussions.css";

const discussionLinks = [
  {
    to: "/discussions/manga",
    title: "Manga Discussions",
    description: "Every chapter thread on r/ChainsawMan, r/manga and r/Chainsawfolk",
  },
  {
    to: "/discussions/anime",
    title: "Anime Discussions",
    description: "Every episode thread on r/ChainsawMan, r/anime and r/csmanime",
  },
];

const Discussions = () => {
  return (
    <div className="discussions-page fade-in">
      <Navbar />
      <div className="discussions-links">
        {discussionLinks.map((link) => (
          <Link key={link.to} to={link.to} className="discussions-card">
            <span className="discussions-card-title">{link.title}</span>
            <span className="discussions-card-description">
              {link.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discussions;
