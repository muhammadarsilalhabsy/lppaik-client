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
import CreateKegiatan from "./pages/CreateKegiatan";
import UpdateKegiatan from "./pages/UpdateKegiatan";

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
        path: "/kegiatan/:id",
        element: <DetailKegiatan />,
      },
      {
        path: "/kegiatan/create",
        element: <CreateKegiatan />,
      },
      {
        path: "/kegiatan/:id/update",
        element: <UpdateKegiatan />,
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
