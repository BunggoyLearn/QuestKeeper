import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import CampaignPage from "./pages/Campaign";
import CreatePage from "./pages/Create";
import NewEnvironmentPage from "./pages/NewEnvironment";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NewCampaignPage from "./pages/NewCampaign";

// I think it might be better to change the /pages/Main.jsx into /pages/Login.jsx
// since we already have a /src/main.jsx file for the pages to populate in

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CampaignPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        // campaign id
        path: "/:id",
        element: <HomePage />,
      },
      {
        path: "/environment",
        element: <NewEnvironmentPage />,
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
      {
        path: "/campaign/",
        element: <NewCampaignPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// instead of <App />
