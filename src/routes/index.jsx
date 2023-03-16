import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { KnowMore } from "../pages/KnowMore";

export const AppRouter = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/knowmore/:id" element={<KnowMore />} />
         <Route exact path="/knowmore/:id/:type" element={<KnowMore />} />
      </Routes>
   );
};
