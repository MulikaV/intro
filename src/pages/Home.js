import React, {useEffect} from "react";
import Home from "../components/Home";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts, setIsSuccessFalse} from "../store/posts/actions";


const HomeContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const isSuccess = useSelector(state => state.posts.isSuccess);
    const isFetching = useSelector(state => state.posts.isFetching);

    useEffect(() => {
            if (isSuccess){
                dispatch(getAllPosts());
                dispatch(setIsSuccessFalse());
            }


    }, [dispatch,isSuccess]);

    return <Home
        posts={posts}
        isFetching={isFetching}/>

};
export default HomeContainer;