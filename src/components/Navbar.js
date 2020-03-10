import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/auth/actions";

const NavBar = () => {

    const isAuth = useSelector(store => store.auth.isAuth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <nav className="container  navbar-expand-lg navbar navbar-dark bg-dark justify-content-between">
            <NavLink className="navbar-brand" activeClassName="active" to="/">Home</NavLink>
            {!isAuth
                ? <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" activeClassName="active" to="/login" exact>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/register">Sign Up</NavLink>
                    </li>
                </ul>
                : <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#" onClick={logOut}>Logout</NavLink>
                    </li>
                </ul>
            }

        </nav>
    )
};

export default NavBar;