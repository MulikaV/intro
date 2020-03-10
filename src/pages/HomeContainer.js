import React, {useEffect} from "react";
import Home from "../components/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllPosts, getAllPosts} from "../store/posts/actions";


const HomeContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const currentPage = useSelector(state => state.posts.currentPage);
    const total = useSelector(state => state.posts.total);
    const error = useSelector(state => state.errors.error);
    const isAuth = useSelector(state => state.auth.isAuth);


    useEffect(() => {
        dispatch(getAllPosts(1));
        return () => {
            dispatch(deleteAllPosts());
        }
    }, [dispatch]);

    return <div className="container bg-light pt-5">
        <Home
            posts={posts}
            error={error}
            isAuth={isAuth}
            currentPage={currentPage}
            total={total}
        />
    </div>

};
export default HomeContainer;
