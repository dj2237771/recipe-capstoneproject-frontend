import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";
import React from "react";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Makeup</Navbar.Brand>
      {isAuthenticated && <Link to="/profile">Profile</Link>}
      {isAuthenticated && (
        <Link
          to="/"
          style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            padding: "1rem",
          }}
        >
          Favorites Makeup
        </Link>
      )}
      <Link to="/getAPIData">All Makeup</Link>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Navbar>
  );
}
export default Header;
