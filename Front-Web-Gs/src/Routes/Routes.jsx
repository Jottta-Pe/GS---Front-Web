import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Layouts from "../pages/Layouts";
import Suporte from "../pages/Suporte";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'Sobre', element: <Sobre />},
      { path: 'Suporte', element: <Suporte />}
    ],
  },
]);

