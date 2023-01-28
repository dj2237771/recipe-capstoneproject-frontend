import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";
import React from "react";

function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="links">
        {isAuthenticated && <a href="/profile">Profile</a>}
        <a href="/">Recipes</a>
        <a href="/favorite">Favorite Recipe</a>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}
export default Header;
