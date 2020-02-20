import React, {useEffect} from "react";
import Home from "../components/Home";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/posts";


const HomeContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const isFetching = useSelector(state => state.posts.isFetching);

    useEffect(() => {
        dispatch(getAllPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Home
        posts={posts}
        isFetching={isFetching}/>

};
export default HomeContainer;