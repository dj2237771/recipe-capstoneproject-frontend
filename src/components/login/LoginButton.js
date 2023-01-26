import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        to="/"
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
        }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
