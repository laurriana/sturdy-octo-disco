import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./page/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/articles",
    element: <ArticlesList />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
};

export default App;
