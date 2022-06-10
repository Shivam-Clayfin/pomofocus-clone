import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
        .then((e) => {
          console.log(e);
          router("/");
        })
        .catch((error) => {
          console.log("error", error);
        });
      console.log("hi");
    } catch (error) {
      console.log("error", error.code);
    }
  };

  return (
    <div className="login">
      <span className="logintitel">Login</span>
      <form className="loginForm" onSubmit={(e) => handelLogin(e)}>
        <lable>Username</lable>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <lable>Password</lable>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <Link className="link" to="/signup">
        <h6>If you don't have Account</h6>
        <button className="register">signup</button>
      </Link>
    </div>
  );
}
