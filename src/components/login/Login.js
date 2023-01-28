import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import LoginButton from "./LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Log in</Card.Title>
        <Card.Text>Click Below to log in</Card.Text>
      </Card.Body>
      <LoginButton />
    </Card>
  );
}

export default Login;
