import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="gradient-bg-welcome ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
