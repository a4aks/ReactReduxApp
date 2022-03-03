import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "20px",
      }}
    >
      <NavLink to="/">Users</NavLink>
      <NavLink to="/about">Post</NavLink>

      {/* {isUserLoggedIn && (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )} */}
    </div>
  )
}
