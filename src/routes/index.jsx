import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { KnowMore } from "../pages/KnowMore";

export const AppRouter = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/knowmore" element={<KnowMore />} />
      </Routes>
   );
};
