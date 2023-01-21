import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Utilities/Header';
import Nav from './Components/Utilities/Nav';
import Footer from './Components/Utilities/Footer';
import Photos from './Components/MainPages/Photos';
import Travel from './Components/MainPages/Travel';
import Registry from './Components/MainPages/Registry';
import Home from './Components/MainPages/Home';
import RSVP from './Components/MainPages/RSVP';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/registry' element={<Registry />} />
          {/* <Route path='/rsvp' element={<RSVP />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
