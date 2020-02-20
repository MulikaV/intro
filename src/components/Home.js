import React from "react";
import Form from "./Form";
import {Post} from "./Post";
import style from "../styles/home.module.css"
import {useDispatch} from "react-redux";
import {addPost, deletePost} from "../store/posts/actions";


const Home = ({posts, isFetching}) => {

    const dispatch = useDispatch();

    const addNewPost = (data) => {
        dispatch(addPost(data.message));
    };

    const delPost = (e) => {
        dispatch(deletePost(e.target.id));
    };

    return (
        <div>
            <div>
                <Form onSubmit={addNewPost}/>
            </div>
            {isFetching
                ? <div>Loading</div>
                : <div className={style.posts}>
                    {posts.map(post =>
                        <Post post={post}
                              key={post.id}
                              delPost={delPost}/>
                    )}
                </div>
            }
        </div>
    )
};

export default Home;