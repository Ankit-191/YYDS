import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import CommunityDriven from "./components/CommunityDriven";
import Roadmap from "./components/Roadmap";
import TokenMetrics from "./components/TokenMetrics";
import Introducing from "./components/Introducing";

function App() {
  return (
    <div className="bg-[url(/src/assets/images/webp/bg-image.webp)] bg-[#F7F5F0]">
      <Hero />
      <Introducing />
      <TokenMetrics />
      <Roadmap />
      <CommunityDriven />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
