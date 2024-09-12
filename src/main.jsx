import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import CampaignPage from "./pages/Campaign";
import CreatePage from "./pages/Create";
import EnvironmentPage from "./pages/Environment";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MainPage from "./pages/MainPage";

// TODO: Create the related files in a 'pages' folder

// TODO: Include all the routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Campaign />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        // campaign id
        path: "/home/:id",
        element: <HomePage />,
      },
      {
        path: "/environment",
        element: <EnvironmentPage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        // User id
        path: "/campaign/:id",
        element: <CampaignPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// instead of <App />
