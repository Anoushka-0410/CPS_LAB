import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PresentMembers from "./pages/PresentMembers";
import Home from "./pages/Home";
import Research from "./pages/Research";
import JoinUs from "./pages/JoinUs";
import ContactUs from "./pages/ContactUs";
import Publications from "./pages/Publications";
import AIHealthcare from "./pages/AIHealthcare.jsx";
import HumanCenteredSystems from "./pages/HumanCenteredSystems.jsx";
import Cybersecurity from "./pages/Cybersecurity.jsx";
import Wearables from "./pages/Wearables.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const navRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "research",
        element: <Research />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "joinus",
        element: <JoinUs />,
      },
      {
        path: "presentmembers",
        element: <PresentMembers />,
      },
      {
        path: "publications",
        element: <Publications />,
      },
      {
        path: "healthcare",
        element: <AIHealthcare />,
      },
      {
        path: "humansystems",
        element: <HumanCenteredSystems />,
      },
      {
        path: "cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "wearables",
        element: <Wearables />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={navRouter} />
  </React.StrictMode>
);
