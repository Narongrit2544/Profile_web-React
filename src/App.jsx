import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contract from './pages/Contract'

function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>

    </Router>
  );
}

export default App;
