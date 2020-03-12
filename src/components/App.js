import React from 'react';
import '../styles/App.css';
import Routers from "./Routes";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import Template from "./template";

const App = () => {
    const options = {
        position: positions.TOP_CENTER,
        timeout: 3000,
        offset: '300px',

        transition: transitions.SCALE
    };

    return (
        <AlertProvider template={Template} {...options} >
            <Routers/>
        </AlertProvider>
    );
};

export default App;
