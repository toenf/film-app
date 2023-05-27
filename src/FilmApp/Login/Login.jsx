import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: 24 }}>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: 8, color: "#000" }}
          />
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: 8, color: "#000" }}
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
          <NavLink
            to="/"
            style={{
              padding: 8,
              cursor: "pointer",
            }}
            type="submit"
          >
            Login
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
