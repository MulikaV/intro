import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/auth/auth-actions";
import {NavBarContainer, NavBarLink, NavBarUl} from "./StyledComponent/NavBarContainer";

const NavBar = () => {

    const isAuth = useSelector(store => store.auth.isAuth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <NavBarContainer >
            <NavBarLink   href="/">Home</NavBarLink>
            {!isAuth
                ? <NavBarUl >
                    <li >
                        <NavBarLink activeClassName="active" href="/login" exact>Login</NavBarLink>
                    </li>
                    <li >
                        <NavBarLink  activeClassName="active" href="/register">Sign Up</NavBarLink>
                    </li>
                </NavBarUl>
                : <NavBarUl >
                    <li >
                        <NavBarLink  href='/#' onClick={logOut}>Logout</NavBarLink>
                    </li>
                </NavBarUl>
            }

        </NavBarContainer>
    )
};

export default NavBar;