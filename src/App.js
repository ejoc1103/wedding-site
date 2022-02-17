import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Photos from "./Components/Photos";
import Travel from "./Components/Travel";
import Registry from "./Components/Registry";
import Home from "./Components/Home";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
