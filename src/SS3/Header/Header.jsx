import React from "react";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <div
      style={{
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconSizeBigger
          className="fa-solid fa-comment"
          size="20px"
        ></IconSizeBigger>
        <p style={{ marginLeft: 20, fontSize: 24 }}>Messaging</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <SearchBar></SearchBar>
        <IconSizeBigger
          className="fa-sharp fa-regular fa-bell"
          size="24px"
        ></IconSizeBigger>
        <div className="AccBtn">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
