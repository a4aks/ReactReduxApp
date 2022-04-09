import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Employees } from './Pages/Employees';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path = "/" element = {<Home />} />
       <Route path = "about" element = {<Register />} />
       <Route path = "contact" element = {<Employees />} />
       <Route path = "login" element = {<Login />} />
    </Routes>
    </div>
  );
}

export default App;
