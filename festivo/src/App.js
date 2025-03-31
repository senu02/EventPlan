import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from './component/Home';
import CreateEvent from "./component/CreateEvent";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create-event" element={<CreateEvent />} />
      

      </Routes>
      </Router>
  );
}

export default App;
