import React from 'react';
import '../styles/App.css';
import HomeContainer from "../pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Navbar";
import RegisterFormContainer from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";

const App = () => {


    return (
        <BrowserRouter>
            <NavBar/>
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/login">
                    <LoginForm/>
                </Route>
                <Route path="/register">
                    <RegisterFormContainer/>
                </Route>
        </BrowserRouter>

    );
};

export default App;
