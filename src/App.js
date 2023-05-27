import React from "react";
import FilmApp from "./FilmApp/FilmApp";
import { Route, Routes } from "react-router-dom";
import Login from "./FilmApp/Login/Login";
import SignUp from "./FilmApp/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FilmApp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
