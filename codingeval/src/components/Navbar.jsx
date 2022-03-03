import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../Redux/auth/auth.action";
export const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();
  
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "20px",
      }}
    >
      <NavLink to="/">Users</NavLink>
      <NavLink to="/post">Post</NavLink>

      {isUserLoggedIn && (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
};
