import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SingleBlog";

import { QueryClient, QueryClientProvider } from "react-query";
import WritePost from "./components/Admin/WritePost";
import BlogPostForm from "./components/Admin/BlogPostForm";
const queryClient = new QueryClient();
// const BASE_URL = "https://amatechbackend-production.up.railway.app/";
const BASE_URL = "https://amatech-backend.onrender.com/";
// const BASE_URL = "http://localhost:3009/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/addpost",
        element: <WritePost />,
      },
      {
        path: "/addpostv2",
        element: <BlogPostForm />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => fetch(`${BASE_URL}api/v1/post/${params.id}`),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router && router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
