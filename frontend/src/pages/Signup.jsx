import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api/userAuth";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate=useNavigate()
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(formData);
      console.log(response.data.message);

      setMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/home"); 
    } catch (error) {
      // console.log(error.message);

      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
      {message && <p>{message}</p>}
      <Link to={"/login"}>Login</Link>
    </>
  );
}

export default Signup;
