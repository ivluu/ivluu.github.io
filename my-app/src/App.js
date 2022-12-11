import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Work from "./Pages/Work/Work"
import Play from "./Pages/Play/Play"
import Mood from "./Pages/Mood/Mood"
import Navbar from "./Navbar/Navbar"

function App() {
  return (
    <Router>
      <header><Navbar/></header>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/mood" element={<Mood/>} />
      </Routes>
    </Router>
  );
}

export default App;
