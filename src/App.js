import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photos from "./Components/Photos";
import Travel from "./Components/Travel";
import Registry from "./Components/Registry";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </Router>
  );
}

export default App;
