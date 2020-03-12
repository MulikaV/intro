import React from "react";
import NavBar from "../components/Navbar";
import LoginForm from "../components/Auth/LoginForm";
import Error from "../components/Error";

const LoginPage = () => {
  return <div>
      <NavBar/>
      <LoginForm/>
     {/* <Error/>*/}
  </div>
};

export default LoginPage;

