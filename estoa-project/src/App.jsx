import { GlobalStyle } from "./globalStyles";
import Header from "./components/Header/header";
import Main from "./components/Main/content.jsx";
import Footer from "./components/Footer/footer";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
