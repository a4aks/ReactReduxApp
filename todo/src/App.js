import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { Login } from "./pages/Login";
import { useEffect } from "react";
import { login } from "./Redux/action";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() =>{
    if(isUserLoggedIn){
      if(pathname === "/login")  navigate("/");
      else navigate(pathname);
    }
    else{
      navigate("/login")
    }
  },[navigate, isUserLoggedIn, pathname])
  return (
    <div className="App">
    <Navbar/>
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
