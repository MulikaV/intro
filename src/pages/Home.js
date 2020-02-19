import React, {useEffect} from "react";
import Home from "../components/Home";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/posts";


const HomeContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const isfetching = useSelector(state => state.posts.isfetching);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return <Home
        posts={posts}
        isfetching={isfetching}/>

};
export default HomeContainer;