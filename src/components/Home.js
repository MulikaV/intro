import React from "react";
import Form from "./Form";
import {Post} from "./Post";
import style from "../styles/home.module.css"


const Home = ({posts, isReady, addPost, deletePost}) => {

    const addNewPost = (data) => {
        addPost(data.message);
    };

    const delPost = (e) => {
        deletePost(e.target.id);
    };


    return (
        <div>
            <div>
                <Form onSubmit={addNewPost}/>
            </div>
            {!isReady
                ? <div>Loading</div>
                : <div className={style.posts}>
                    {posts.map(post =>
                        <Post post={post}
                              delPost={delPost}/>
                    )}
                </div>

            }


        </div>

    )

};

export default Home;