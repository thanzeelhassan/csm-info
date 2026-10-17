import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound-page fade-in">
      <Navbar />
      <main className="notFound-content">
        <p className="notFound-code">404</p>
        <h1 className="notFound-title">This page got sliced up</h1>
        <p className="notFound-text">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="notFound-links">
          <Link to="/" className="notFound-link">
            Go home
          </Link>
          <Link to="/discussions" className="notFound-link">
            Browse discussions
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
