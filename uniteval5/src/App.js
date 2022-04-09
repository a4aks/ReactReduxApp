import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Employees } from './Pages/Employees';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path = "/" element = {<Home />} />
       <Route path = "/register" element = {<Register />} />
       <Route path = "/employee" element = {<Employees />} />
       <Route path = "/login" element = {<Login />} />
    </Routes>
    </div>
  );
}

export default App;
