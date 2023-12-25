import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import AppBody from "./AppBody";
import Contact from "./Contact";

const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout/>,
      children : [
        {
            path : '/about',
            element : <About />
        },
        {
            path: '/',
            element : <AppBody/>
        },
        {
          path : '/contact',
          element : <Contact />
      }
      ],
      errorElement : <Error/>
    },
    
  ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
