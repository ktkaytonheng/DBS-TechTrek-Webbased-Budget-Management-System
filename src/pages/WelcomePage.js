import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="container">
      <h1>Welcome to DBS TechTrek App!</h1>
      <Link to="/login">
        <Button color="green" text="Login"></Button>
      </Link>
      <Link to="register">
        <Button color="dodgerblue" text="Register"></Button>
      </Link>
    </div>
  );
}

export default WelcomePage;
