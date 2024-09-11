import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DrawAutomaton from './pages/DrawAutomaton';
import ConstructAutomaton from './pages/ConstructAutomaton';

function App() {
  useEffect(() => {
    document.title = "AutomatonFun";
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Draw Automaton</Link></li>
            <li><Link to="/construct">Construct Automaton</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<DrawAutomaton />} />
          <Route path="/construct" element={<ConstructAutomaton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;