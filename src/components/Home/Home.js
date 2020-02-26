import React from "react";
import Form from "./InputForm";
import {Post} from "./Post";
import style from "../../styles/home.module.css"
import {useDispatch} from "react-redux";
import {addPost, deletePost} from "../../store/posts/actions";
import Error from "../Error";


const Home = ({posts, isFetching,error}) => {

    const dispatch = useDispatch();

    const addNewPost = (data) => {
        dispatch(addPost(data.message));
    };

    const delPost =  (e) => {
        dispatch(deletePost(e.target.id))
    };

    return (
        <div>
            <div>
                <Form onSubmit={addNewPost}/>
            </div>

             <Error error={error}/>
            {isFetching && !error
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