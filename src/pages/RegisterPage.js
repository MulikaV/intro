import React from "react";
import NavBar from "../components/Navbar";
import RegisterForm from "../components/Auth/RegisterForm";
import Error from "../components/Error";

const RegisterPage = () => {
    return <div>
        <NavBar/>
        <RegisterForm/>
       {/* <Error/>*/}
    </div>
};

export default RegisterPage;

