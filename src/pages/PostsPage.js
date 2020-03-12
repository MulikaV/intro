import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch} from "react-redux";
import style from "../styles/home.module.css";
import {Posts} from "../components/Posts/Posts";
import {getAllPosts} from "../store/posts/post-actions";
import {usePosts} from "../hooks/usePost";


const PostsPage = ({isAuth}) => {
    const dispatch = useDispatch();

    const [posts, currentPage, total] = usePosts();
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setHasMore(posts.length < total);
    }, [posts, total]);


    const getNextPage = () => {
        dispatch(getAllPosts(currentPage + 1));
    };

    return <InfiniteScroll
        next={getNextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        dataLength={posts.length}
        >
        <div className={style.posts}>
            {posts.map(post =>
                <Posts post={post}
                       key={post.id}
                       isAuth={isAuth}
                />
            )}
        </div>
    </InfiniteScroll>
};

export default PostsPage;