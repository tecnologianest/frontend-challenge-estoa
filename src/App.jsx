import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./routes";
import { Header } from "./components/Header/index";
import "./App.css";

function App() {
   return (
      <Router>
         <Header />
         <AppRouter />
      </Router>
   );
}

export default App;
