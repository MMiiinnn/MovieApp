import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import MovieDetailPage from "./components/pages/MovieDetailPage";
import VideoPlayer from "./components/organisms/VideoPlayer";
import SearchPage from "./components/pages/SearchPage";
import WatchlistPage from "./components/pages/WatchlistPage";
import AboutPage from "./components/pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetailPage />,
        children: [{ path: "watch", element: <VideoPlayer /> }],
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "watchlist",
        element: <WatchlistPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
