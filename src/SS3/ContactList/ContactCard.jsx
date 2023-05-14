import React from "react";

function ContactItem(props) {
  const { id, img, name, mess, onContactSelect } = props;

  const handleClick = () => {
    onContactSelect(props);
  };

  return (
    <div
      style={{
        display: "flex",
        columnGap: 16,
        padding: 12,
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
        width="16%"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: 12,
        }}
      >
        <h2>{name}</h2>
        <div>You: {mess}</div>
      </div>
    </div>
  );
}

export default ContactItem;
