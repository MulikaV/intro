import React from "react";
import style from "../../styles/post.module.css";


const Post = ({post, isAuth, delPost, activateEditMode}) => {


    return <div className={style.content}>
        <p>{post.body}</p>
        {isAuth && <div>
            <a href="/#" onClick={() => {
                delPost(post.id)
            }} className={style.delete}>Delete</a>
            <a href="/#" onClick={activateEditMode} className={style.delete}>Edit</a>
        </div>}
    </div>
};

export default Post;