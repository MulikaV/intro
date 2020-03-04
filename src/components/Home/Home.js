import React from "react";
import InputForm from "./InputForm";
import {Post} from "./Post";
import style from "../../styles/home.module.css"
import {useDispatch} from "react-redux";
import {deletePost} from "../../store/posts/actions";
import Error from "../Error";


const Home = ({posts, isFetching, error, isAuth}) => {

    const dispatch = useDispatch();

    const delPost = (id) => {
        dispatch(deletePost(id))
    };

    return (
        <div>
            {isAuth
                ? <div><InputForm /></div>
                : <div className={style.attention}>Only authorized users can send messages.</div>
            }
            {error && <Error error={error}/>}
            {isFetching && !error
                ? <div>Loading</div>
                : <div className={style.posts}>
                    {posts.map(post =>
                        <Post post={post}
                              key={post.id}
                              isAuth={isAuth}
                              delPost={delPost}/>
                    )}
                </div>
            }
        </div>
    )
};

export default Home;