import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import Icon from "../Shared/Icon";
import Login from "../Login/Login";

function Header() {
  return (
    <div
      className="NavBar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "12",
      }}
    >
      <div className="LeftNav">
        <ul style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png"
            alt=""
          />
          <a href="" style={{ textDecoration: "none" }}>
            Home
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            TV Shows
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            Movies
          </a>
        </ul>
      </div>
      <div className="RightNav">
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
          style={{ height: "20" }}
        />
        <button>
          <Icon>
            <i class="fa-regular fa-bell"></i>
          </Icon>
        </button>
        <NavLink to="/login" href="" style={{ textDecoration: "none" }}>
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
