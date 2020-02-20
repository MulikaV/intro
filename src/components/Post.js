import React from "react";
import style from "../styles/post.module.css"

export const Post = ({post,delPost,editPost}) => {
    return <div className={style.post}>
        <p><small>{post.createdAt.slice(0, 10)}</small></p>
      <div className={style.cont}>
        <p className={style.text}>{post.text}</p>
        <a href="/#" id={post.id} onClick={delPost} className={style.delete}>Delete</a>
      </div>

    </div>
};

