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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const navRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        //path: "home",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={navRouter} />
  </React.StrictMode>
);
