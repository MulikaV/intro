import React, {useEffect, useState} from "react";
import style from "../styles/post.module.css"
import {useDispatch} from "react-redux";
import {deletePost, updatePost} from "../store/posts/actions";
import PostEditMode from "../components/Home/Posts/PostEditMode";
import Post from "../components/Home/Posts/Post";

export const PostContainer = ({post, isAuth}) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [postText, setPostText] = useState(post.body);

    useEffect(() => {
        setPostText(post.body)
    }, [post.body]);

    const delPost = (id) => {
        dispatch(deletePost(id))
    };
    const onPostTextChange = (e) => {
        setPostText(e.target.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
    };

    const updatePostText = (id) => {
        setEditMode(false);
        dispatch(updatePost(id, postText));
    };


    return <div className={style.post}>
        <div className={style.content}>
            <p><small>{post.updated_at}</small></p>
            <p><small>{post.user.username}</small></p>
        </div>

        {editMode
            ? <PostEditMode
                deActivateEditMode={deActivateEditMode}
                onPostTextChange={onPostTextChange}
                postText={postText}
                post={post}
                updatePostText={updatePostText}/>
            : <Post
                post={post}
                isAuth={isAuth}
                activateEditMode={activateEditMode}
                delPost={delPost}/>
        }
    </div>
};

