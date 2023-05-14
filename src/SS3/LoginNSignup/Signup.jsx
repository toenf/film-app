import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email === "" || !email.includes("@")) {
      alert("Ivalid email!");
    } else if (password === "" || password.length < 8) {
      alert("Invalid password!");
    } else if (password !== confirmPassword) {
      alert("Your password does not match!");
      const user = { email, password };
      fetch("https://64565c055f9a4f236141cc94.mockapi.io/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Sign up successful (^_^)");
        })
        .catch((error) => {
          alert("Sign up failed (T.T)");
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: 24 }}>Sign Up</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: 8, color: "#000" }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: 8, color: "#000" }}
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "100%", color: "#000" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <button
            style={{
              padding: 8,
              cursor: "pointer",
            }}
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </form>
    </div>
  );
}

export default SignUp;
