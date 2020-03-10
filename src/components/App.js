import React from 'react';
import '../styles/App.css';
import HomeContainer from "../pages/HomeContainer";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Navbar";
import RegisterForm from "./Auth/RegisterForm";
import LoginForm from "./Auth/LoginForm";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
        </BrowserRouter>

    );
};

export default App;
