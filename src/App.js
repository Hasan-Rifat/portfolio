import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Details from "./Components/Details/Details";
import Project1 from "./Components/PortfolioPages/Project1";
import Project2 from "./Components/PortfolioPages/Project2";
import Project3 from "./Components/PortfolioPages/Project3";

function App() {
  return (
    <div className="gradient-bg-welcome ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
