import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import React from "react";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


const Routers = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
        </BrowserRouter>
    )
};

export default Routers;