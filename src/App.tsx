import "./styles/main.scss";
import { HomePage } from "./pages/homePage";
import { Menu } from "./components/Menu";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterPage } from "./pages/characterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "character/:characterID",
    element: <CharacterPage />,
  },
]);

export const App = () => {
  return (
    <>
      <Menu />
      <RouterProvider router={router} />
    </>
  );
};
