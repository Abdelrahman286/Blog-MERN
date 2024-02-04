import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const naviagte = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.email) {
      return setError("Fill Everything");
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // TO PARSE WHAT RECIEVED FROM THE SERVER
      const data = await res.json();
      console.log(res);

      if (data.success === false) {
        // error message from server
        setError(data.message);
      }
      if (res.ok) {
        naviagte("/signin");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form className="border-4 m-4 p-2  flex flex-col" onSubmit={handleSubmit}>
        <label>Username :</label>

        <input
          value={formData.username}
          className="border-2"
          id="username"
          onChange={handleChange}
        ></input>

        <label>Email :</label>
        <input
          value={formData.email}
          className="border-2"
          type="email"
          id="email"
          onChange={handleChange}
        ></input>

        <label>Password :</label>
        <input
          value={formData.password}
          className="border-2"
          type="password"
          id="password"
          onChange={handleChange}
        ></input>
        <br></br>
        <button
          type="submit"
          className="border-2 bg-green-300"
          disabled={loading}
        >
          Sign Up
        </button>
      </form>
      {error && <h1 className="font-bold bg-red-500"> {error}</h1>}
      <div>
        <h4>Have an account ?</h4>
        {loading && <h1 className="bg-blue-300">Loading</h1>}
        <Link to="/signin">
          <button className="p-2 bg-yellow-400">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
