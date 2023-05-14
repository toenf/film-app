import React from "react";
import "./UtilBar.css";
import MemberInfo from "./MemberInfo/MemberInfo";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";

function UtilBar() {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div className="UtilBtns">
          <button>Chat Members</button>
          <button>Share Files</button>
        </div>
        <div
          style={{
            marginLeft: 20,
            marginTop: 32,
            marginBottom: 20,
            fontSize: "12px",
          }}
        >
          Members
        </div>
        <MemberInfo></MemberInfo>
        <MemberInfo></MemberInfo>

        <div
          style={{
            marginLeft: 20,
            marginTop: 32,
            marginBottom: 20,
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: 20,
          }}
        >
          Admins
          <IconSizeBigger
            className="fa-solid fa-pencil"
            size="12px"
          ></IconSizeBigger>
        </div>
        <MemberInfo></MemberInfo>
      </div>

      <div
        style={{
          marginLeft: 20,
          marginRight: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div className="OtherUtil">
          <h3>Customize Chat</h3>
        </div>
        <div className="OtherUtil">
          <h3>Policy and Support</h3>
        </div>
      </div>
    </div>
  );
}

export default UtilBar;
