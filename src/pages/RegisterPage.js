import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import firebase from "../firebase.js";

function RegisterPage({ setUserProp }) {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState("");
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

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        email: email,
      });
      setUserProp(user.uid);
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const register = () => {
    console.log("Register");
    console.log(email);
    console.log(password);
    registerWithEmailAndPassword(name, email, password);
  };

  const goBack = () => {
    console.log("Back");
    navigate("/");
  };

  return (
    <div className="LoginScreen">
      <div className="container">
        <h1>Register</h1>
        <form className="add-form">
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              placeholder="Input name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
        <Button color="green" text="Register" onClick={register} />
        <Button color="red" text="Back" onClick={goBack} />
      </div>
    </div>
  );
}

export default RegisterPage;
