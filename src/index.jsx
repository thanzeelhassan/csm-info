import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Inner pages are split into their own chunks so the home page doesn't have
// to download every discussion table's data before it can render.
const Discussions = lazy(() => import("./Pages/Discussions/Discussions"));
const ColouredMangaPage = lazy(() =>
  import("./Pages/ColouredMangaPage/ColouredMangaPage")
);
const MangaDiscussion = lazy(() =>
  import("./Pages/MangaDiscussion/MangaDiscussion")
);
const AnimeDiscussion = lazy(() =>
  import("./Pages/AnimeDiscussion/AnimeDiscussion")
);
const MangaPage = lazy(() => import("./Pages/MangaPage/MangaPage"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/discussions", element: <Discussions /> },
  { path: "/discussions/manga", element: <MangaDiscussion /> },
  { path: "/discussions/anime", element: <AnimeDiscussion /> },
  { path: "/manga", element: <MangaPage /> },
  { path: "/manga/coloured", element: <ColouredMangaPage /> },

  // Old GitHub Pages-era URLs, kept so existing links and bookmarks work.
  ...Object.entries({
    "/csm-info": "/",
    "/csm-info/discussions": "/discussions",
    "/csm-info/discussions/MangaDiscussion": "/discussions/manga",
    "/csm-info/discussions/AnimeDiscussion": "/discussions/anime",
    "/csm-info/manga": "/manga",
    "/csm-info/colouredmanga": "/manga/coloured",
  }).map(([from, to]) => ({
    path: from,
    element: <Navigate to={to} replace />,
  })),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
