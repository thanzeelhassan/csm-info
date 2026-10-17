import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/csm-info/manga/",
    element: <MangaPage />,
  },
  {
    path: "/csm-info/discussions/MangaDiscussion",
    element: <MangaDiscussion />,
  },
  {
    path: "/csm-info/discussions/AnimeDiscussion",
    element: <AnimeDiscussion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
