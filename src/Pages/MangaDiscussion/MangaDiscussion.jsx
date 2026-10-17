import React, { useMemo, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../styles/discussionPage.css";
import "./MangaDiscussion.css";
import Introduction_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/1. Introduction_Arc.json";
import Bat_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/2. Bat Devil Arc.json";
import Eternity_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/3. Eternity Devil Arc.json";
import Katana_Man_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/4. Katana Man Arc.json";
import Bomb_Girl_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/5. Bomb Girl Arc.json";
import International_Assassins_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/6. International Assassins Arc.json";
import Gun_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/7. Gun Devil Arc.json";
import Control_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 1. Public Safety Saga/8. Control Devil Arc.json";
import Justice_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/1. Justice Devil arc.json";
import Dating_Denji_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/2. Dating Denji arc.json";
import Falling_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/3. Falling Devil arc.json";
import Chainsaw_Man_Church_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/4. Chainsaw Man Church arc.json";
import Aging_Devil_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/5. Aging Devil arc.json";
import Current_Arc_Data from "../../assets/discussions/Discussion links for all subs/Part 2. Academy Saga/6. War Devil arc.json";
import MangaDiscussionTable from "../../Components/MangaDiscussionTable/MangaDiscussionTable";

const parts = [
  {
    name: "Part 1: Public Safety Saga",
    arcs: [
      { name: "Introduction Arc", data: Introduction_Arc_Data },
      { name: "Bat Devil Arc", data: Bat_Devil_Arc_Data },
      { name: "Eternity Devil Arc", data: Eternity_Devil_Arc_Data },
      { name: "Katana Man Arc", data: Katana_Man_Arc_Data },
      { name: "Bomb Girl Arc", data: Bomb_Girl_Arc_Data },
      {
        name: "International Assassins Arc",
        data: International_Assassins_Arc_Data,
      },
      { name: "Gun Devil Arc", data: Gun_Devil_Arc_Data },
      { name: "Control Devil Arc", data: Control_Devil_Arc_Data },
    ],
  },
  {
    name: "Part 2: Academy Saga",
    arcs: [
      { name: "Justice Devil Arc", data: Justice_Devil_Arc_Data },
      { name: "Dating Denji Arc", data: Dating_Denji_Arc_Data },
      { name: "Falling Devil Arc", data: Falling_Devil_Arc_Data },
      { name: "Chainsaw Man Church Arc", data: Chainsaw_Man_Church_Arc_Data },
      { name: "Aging Devil Arc", data: Aging_Devil_Arc_Data },
      { name: "War Devil Arc", data: Current_Arc_Data },
    ],
  },
];

const arcId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const allChapters = parts.flatMap((part) =>
  part.arcs.flatMap((arc) => arc.data)
);

// A number matches that chapter exactly; anything else matches the title.
const searchChapters = (query) => {
  const trimmed = query.trim();
  if (/^\d+$/.test(trimmed)) {
    return allChapters.filter(
      (chapter) => Number(chapter["chapter number"]) === Number(trimmed)
    );
  }
  const lower = trimmed.toLowerCase();
  return allChapters.filter((chapter) =>
    String(chapter["chapter title"]).toLowerCase().includes(lower)
  );
};

const MangaDiscussion = () => {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () => (query.trim() ? searchChapters(query) : null),
    [query]
  );

  return (
    <div className="discussion-page">
      <Navbar />
      <div className="discussion-section fade-in">
        <h1 className="discussion-title">
          Chapter Discussion Index
        </h1>
        <br />
        <p className="discussion-paragraph">
          List of all chapter discussions on r/ChainsawMan, r/Manga and
          r/ChainsawFolk.
        </p>
        <br />
        <p className="discussion-paragraph">
          Chapters have been tabulated and divided into arcs for ease of access
          for readers.
        </p>
        <p className="discussion-paragraph">
          All the release dates are Japanese release dates.
        </p>
        <p className="discussion-paragraph">
          The arc name/title and the distribution isn't official and is
          something that fans made over the course of serialisation of this
          series.
        </p>
        <p className="discussion-paragraph discussion-source">
          Source:{" "}
          <a
            href="https://www.reddit.com/r/ChainsawMan/wiki/chapter-discussions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/ChainsawMan chapter discussions wiki
          </a>
        </p>

        <div className="mangaDiscussion-toolbar">
          <label htmlFor="chapter-search" className="mangaDiscussion-search-label">
            Find a chapter
          </label>
          <input
            id="chapter-search"
            type="search"
            className="mangaDiscussion-search"
            placeholder="Chapter number or title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {!results && (
            <nav aria-label="Jump to arc" className="mangaDiscussion-arc-nav">
              {parts.map((part) => (
                <div key={part.name} className="mangaDiscussion-arc-group">
                  <p className="mangaDiscussion-arc-group-name">{part.name}</p>
                  <ul>
                    {part.arcs.map((arc) => (
                      <li key={arc.name}>
                        <a href={`#${arcId(arc.name)}`}>{arc.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>

      {results ? (
        <div className="discussion-section">
          <h2 className="discussion-heading">
            {results.length === 1
              ? "1 chapter found"
              : `${results.length} chapters found`}
          </h2>
          {results.length > 0 && <MangaDiscussionTable data={results} />}
        </div>
      ) : (
        parts.map((part) => (
          <div key={part.name} className="discussion-section">
            {part.arcs.map((arc) => (
              <section
                key={arc.name}
                id={arcId(arc.name)}
                className="mangaDiscussion-arc"
              >
                <h2 className="discussion-heading">{arc.name}</h2>
                <MangaDiscussionTable data={arc.data} />
                <a href="#top" className="mangaDiscussion-back-to-top">
                  Back to top
                </a>
              </section>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MangaDiscussion;
