import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import ContactList from "./ContactList/ContactList";
import MessageContainer from "./MessageContainer/MessageContainer";
import UtilBar from "./UtilBar/UtilBar";
import { useEffect } from "react";

function SS3() {
  const [sharedContacts, setSharedContacts] = useState([]);
  const [sharedContact, setSharedContact] = useState();

  const handleContactSelect = (contact) => {
    let index = sharedContacts.findIndex((x) => x.id === contact.id);
    if (index === -1) {
      setSharedContacts([contact]);
      setSharedContact(contact);
    } else {
      setSharedContacts([]);
      setSharedContact();
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundColor: "#e01585",
        color: "#fff",
      }}
    >
      <Sidebar></Sidebar>

      <div style={{ width: "90%" }}>
        <Header></Header>

        <div
          style={{
            height: "90%",
            display: "flex",
          }}
        >
          <ContactList onContactSelect={handleContactSelect}></ContactList>
          <MessageContainer sharedContact={sharedContact}></MessageContainer>
          <UtilBar></UtilBar>
        </div>
      </div>
    </div>
  );
}

export default SS3;
