import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllPosts, getAllPosts} from "../store/posts/post-actions";
import InputForm from "../components/InputForm";
import style from "../styles/home.module.css";
import PostsPage from "./PostsPage";
import NavBar from "../components/Navbar";
import {Container} from "../components/StyledComponent/Container";


const HomePage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);


    useEffect(() => {
        dispatch(getAllPosts(1));
        return (() => {
            dispatch(deleteAllPosts());
        })
    }, [dispatch]);


    return <div>
        <NavBar/>
        <Container paddingTop ="2em">
            {isAuth
                ? <InputForm/>
                : <div className={style.attention}>Only authorized users can send messages.</div>}

            {/*<Error/>*/}
            <PostsPage isAuth={isAuth}/>
        </Container>
    </div>

};
export default HomePage;
