import React, {useEffect} from "react";
import Home from "../components/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/posts/actions";


const HomeContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const error = useSelector(state => state.errors.error);
    const isFetching = useSelector(state => state.posts.isFetching);
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
                dispatch(getAllPosts());
    }, [dispatch]);

    return <div className="container bg-light pt-5">
        <Home
            posts={posts}
            error={error}
            isAuth={isAuth}
            isFetching={isFetching}/>
    </div>

};
export default HomeContainer;
