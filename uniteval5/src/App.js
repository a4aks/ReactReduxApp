import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path = "/" element = {<Home />} />
       <Route path = "about" element = {<About />} />
       <Route path = "contact" element = {<Contact />} />
       <Route path = "login" element = {<Login />} />
    </Routes>
    </div>
  );
}

export default App;
