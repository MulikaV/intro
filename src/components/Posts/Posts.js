import React, {useEffect, useState} from "react";
import style from "../../styles/post.module.css"
import {useDispatch} from "react-redux";
import {deleteAndGetAllPosts, deletePost, updatePost} from "../../store/posts/post-actions";
import PostEditMode from "./PostEditMode";
import Post from "./Post";
import {useAlert} from "react-alert";

export const Posts = ({post, isAuth}) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const [editMode, setEditMode] = useState(false);
    const [postText, setPostText] = useState(post.body);

    useEffect(() => {
        setPostText(post.body)
    }, [post.body]);

    const delPost = (id) => {
        dispatch(deletePost(id))
            .then(data => {dispatch(deleteAndGetAllPosts())})
            .catch(e =>
                alert.error(e.error.response.data.message));
    };

    const updatePostText = (id) => {
        setEditMode(false);
        dispatch(updatePost(id, postText))
            .then(() => {dispatch(deleteAndGetAllPosts())})
            .catch(e =>
                alert.error(e.error.response.data.message));
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

