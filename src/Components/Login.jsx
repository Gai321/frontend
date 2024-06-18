import React, { useState } from "react";
import App from "./App.jsx";
import axios from "axios";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,

          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      history.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
