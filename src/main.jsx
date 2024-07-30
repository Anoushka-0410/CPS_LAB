import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PresentMembers from "./pages/PresentMembers";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const navRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'research',
        element: <Research />
      },
      {
        path: 'contactus',
        element: <ContactUs />
      },
      {
        path: 'presentmembers',
        element: <PresentMembers />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={navRouter} />
  </React.StrictMode>
);
