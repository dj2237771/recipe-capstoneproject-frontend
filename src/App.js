import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavorites from "./components/MyFavorites";
import AllDataAPI from "./components/AllDataAPI";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/login/Profile";
import Login from "./components/login/Login";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/"
            element={isAuthenticated ? <MyFavorites /> : <Login />}
          />
          <Route exact path="/getAPIData" element={<AllDataAPI />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
