import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discussions from "./Pages/Discussions/Discussions";
import ColouredMangaPage from "./Pages/ColouredMangaPage/ColouredMangaPage";
import ChainsawManSubreddit from "./Pages/ChainsawManSubreddit/ChainsawManSubreddit";
import ChainsawFolkSubreddit from "./Pages/ChainsawFolkSubreddit/ChainsawFolkSubreddit";
import MangaSubreddit from "./Pages/MangaSubreddit/MangaSubreddit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/csm-info/",
    element: <App />,
  },
  {
    path: "/csm-info/discussions/",
    element: <Discussions />,
  },
  {
    path: "/csm-info/colouredmanga/",
    element: <ColouredMangaPage />,
  },
  {
    path: "/csm-info/discussions/ChainsawManSubreddit",
    element: <ChainsawManSubreddit />,
  },
  {
    path: "/csm-info/discussions/ChainsawFolkSubreddit",
    element: <ChainsawFolkSubreddit />,
  },
  {
    path: "/csm-info/discussions/MangaSubreddit",
    element: <MangaSubreddit />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
