import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "20px",
        justifyContent:"center",
        width:"100%",
        height:"50px",
        border:"1px solid black",
        backgroundColor:"gray",
        alignItems:"center"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/employee">Employee</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
