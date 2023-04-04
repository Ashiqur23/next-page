import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./copmponents/Home";
import About from "./copmponents/About";
import Books from "./copmponents/Books";
import BookDetails from "./copmponents/BookDetails";
import LoadingSpinner from "./copmponents/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "*",
        element: "404 No Data Found",
      },
    ],
  },
  {
    path: "/about",
    element: <p>About pages</p>,
  },
  {
    path: "/loader",
    element: <LoadingSpinner></LoadingSpinner>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
