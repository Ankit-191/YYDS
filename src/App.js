import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
