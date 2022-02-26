import React from "react";
import { Todos } from "../components/Todos.jsx";
import { Counter } from "../components/Counter.jsx";

export const Home = () => {
  return (
    <div>
      <Counter />
      <Todos />
    </div>
  );
};
