import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Kegiatan,
  DetailKegiatan,
  NotFound,
  SharedPage,
  Login,
} from "./pages";
import Exp from "./pages/Exp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <SharedPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/kegiatan",
        element: <Kegiatan />,
      },
      {
        path: "/detail",
        element: <DetailKegiatan />,
      },
      {
        path: "/exp",
        element: <Exp />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
