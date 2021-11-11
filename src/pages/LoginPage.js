import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import firebase from "../firebase.js";

function LoginPage({ setUserProp }) {
  const auth = firebase.auth();
  // const db = firebase.firestore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      setUserProp(user);
    });
    return () => {
      unlisten();
    };
  });

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      const user = res.user;
      console.log(user.uid);
      setUserProp(user.uid);
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const login = () => {
    console.log("Login");
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(email, password);
  };
  const goBack = () => {
    console.log("Back");
    navigate("/");
  };

  return (
    <div className="LoginScreen">
      <div className="container">
        <h1>Login</h1>
        <form className="add-form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder="Input email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="text"
              placeholder="Input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <Button color="green" text="Login" onClick={login} />
        <Button color="red" text="Back" onClick={goBack} />
      </div>
    </div>
  );
}

export default LoginPage;
