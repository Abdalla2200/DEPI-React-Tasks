import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About/About.jsx";
import Affairs from "./components/Affairs/Affairs.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "about", element: <About /> },
  { path: "affairs", element: <Affairs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
