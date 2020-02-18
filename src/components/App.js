import React from 'react';
import '../styles/App.css';
import HomeContainer from "../containers/Home";
import style from "../styles/App.css"

const App = () => {
    return (
        <div className="container bg-light pt-5">
            <HomeContainer/>
        </div>
    );
}

export default App;
