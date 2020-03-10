import React, {useEffect, useState} from "react";
import InputForm from "./InputForm";
import {PostContainer} from "../../pages/PostContainer";
import style from "../../styles/home.module.css"
import {useDispatch} from "react-redux";
import {deletePost, getAllPosts} from "../../store/posts/actions";
import Error from "../Error";
import InfiniteScroll from 'react-infinite-scroll-component';


const Home = ({posts, error, isAuth, total, currentPage}) => {

    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (posts.length < total) {
            setHasMore(true);
        } else {
            setHasMore(false);
        }
    }, [posts, total]);


    const getNextPage = () => {
        dispatch(getAllPosts(currentPage + 1));
    };
    return (
        <div>
            {isAuth
                ? <div><InputForm/></div>
                : <div className={style.attention}>Only authorized users can send messages.</div>
            }

            {error && <Error error={error}/>}

            <InfiniteScroll
                next={getNextPage}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                dataLength={posts.length}
                endMessage={<p className="text-center">
                    <b>Yay! You have seen it all</b></p>}
            >
                <div className={style.posts}>
                    {posts.map(post =>
                        <PostContainer post={post}
                                       key={post.id}
                                       isAuth={isAuth}
                                      />
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
};

export default Home;