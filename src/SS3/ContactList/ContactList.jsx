import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";
import ContactCard from "./ContactCard";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function ContactList({ onContactSelect }) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://64565c055f9a4f236141cc94.mockapi.io/contact-list")
      .then((respone) => respone.json())
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        setContacts(result);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddContact = () => {
    const newContact = {
      id: uuidv4(),
      name: name,
      img: "https://cdn-icons-png.flaticon.com/512/5087/5087579.pn",
      mess: message,
    };
    setContacts([...contacts, newContact]);
    setName("");
    setMessage("");
    setShowModal(false);
  };

  return (
    <div
      style={{
        width: "30%",
        borderRight: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between ",
        paddingTop: 12,
      }}
    >
      <div style={{ height: "100%", overflowY: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <h2>Chats</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: 20,
            }}
          >
            <SearchBar />
            <button
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 10,
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "#fff",
              }}
              onClick={() => setShowModal(true)}
            >
              <IconSizeBigger
                className="fa-solid fa-plus"
                size="20px"
                color="#fff"
              />
            </button>
          </div>
        </div>

        <div>
          {showModal && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: 16,
                padding: 16,
                width: "50%",
                margin: "0 auto",
                border: "1px solid #ccc",
                borderRadius: 8,
              }}
            >
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                placeholder="Enter Message"
                value={message}
                onChange={handleMessageChange}
              />
              <div
                style={{
                  display: "flex",
                  gap: 12,
                }}
              >
                <button
                  style={{
                    padding: 8,
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                  onClick={handleAddContact}
                >
                  Add
                </button>
                <button
                  style={{
                    padding: 8,
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            contacts.map((contacts, index) => (
              <ContactCard
                id={contacts.id}
                key={index}
                name={contacts.name}
                img={contacts.img}
                mess={contacts.mess}
                onContactSelect={onContactSelect}
              />
            ))
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <input type="text" className="Feedback" placeholder="Submit Feedback" />
      </div>
    </div>
  );
}

export default ContactList;
