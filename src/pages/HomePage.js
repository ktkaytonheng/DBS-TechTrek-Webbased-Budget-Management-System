import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import firebase from "../firebase.js";

function HomePage({ userProp, setUserProp }) {
  const auth = firebase.auth();
  const db = firebase.firestore();

  let navigate = useNavigate();

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      setUserProp(user);
    });
    return () => {
      unlisten();
    };
  });

  const goBack = () => {
    console.log("Sign out");
    auth
      .signOut()
      .then(() => {
        setUserProp(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  const printUser = () => {
    console.log(userProp.uid);
  };

  return (
    <div className="HomePage">
      <div className="container">
        <h1>Home Page</h1>
        <Button color="red" text="Sign out" onClick={goBack} />
        <Button color="darkorange" text="Print user" onClick={printUser} />
      </div>
    </div>
  );
}

export default HomePage;
