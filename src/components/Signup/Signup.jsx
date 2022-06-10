import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./signup.css";
export default function Signup() {
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      router("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("user Already There");
      console.log("error", error.code);
    }
  };

  return (
    <div className="signup">
      <span className="signuptitel">Signup</span>
      <form className="signupForm" onSubmit={handelSignup}>
        <lable>Username</lable>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => setName(e.target.value)}
        />
        <lable>Email</lable>
        <input
          className="signupInput"
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <lable>Password</lable>
        <input
          className="signupInput"
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signupButton" type="submit">
          Signup
        </button>
      </form>
      <Link className="link" to="/login">
        <h6>If you have existing account</h6>
        <button className="signupLogin">Login</button>
      </Link>
    </div>
  );
}
