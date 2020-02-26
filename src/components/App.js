import React from 'react';
import '../styles/App.css';
import HomeContainer from "../pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Navbar";
import RegisterFormContainer from "../pages/RegisterForm";
import LoginFormContainer from "../pages/LoginForm";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container bg-light pt-5">
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/login">
                    <LoginFormContainer/>
                </Route>
                <Route path="/register">
                    <RegisterFormContainer/>
                </Route>

            </div>
        </BrowserRouter>

    );
};

export default App;
