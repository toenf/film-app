import React from "react";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";

function Sidebar() {
  return (
    <div
      style={{
        width: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 32px",
        justifyContent: "space-between",
        borderRight: "1px solid #ccc",
      }}
    >
      <IconSizeBigger className="fa-solid fa-bars" size="40px"></IconSizeBigger>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 60,
          marginBottom: 40,
        }}
      >
        <IconSizeBigger
          className="fa-solid fa-wallet"
          size="20px"
        ></IconSizeBigger>
        <IconSizeBigger
          className="fa-solid fa-comment"
          size="20px"
        ></IconSizeBigger>
        <IconSizeBigger
          className="fa-solid fa-folder"
          size="20px"
        ></IconSizeBigger>
      </div>
    </div>
  );
}

export default Sidebar;
