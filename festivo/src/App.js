import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
      </Router>
  );
}

export default App;
