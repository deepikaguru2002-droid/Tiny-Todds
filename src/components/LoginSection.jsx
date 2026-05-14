import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSection() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  // simple check
  if (username && password) {

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", username);

    // 👉 navigate to dashboard
    navigate("/dashboard");

  } else {
    // optional: you can show UI message instead of alert
    console.log("Please enter username & password");
  }
};
  return (
    <section id="login" className="py-20 px-6 bg-white">

      <div className="max-w-md mx-auto bg-gray-100 p-10 rounded-3xl shadow-2xl">

        <h2 className="text-4xl text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-4 rounded-2xl"
          >
            Sign In
          </button>

        </form>
      </div>
    </section>
  );
}