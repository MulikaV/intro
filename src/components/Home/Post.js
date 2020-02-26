import React, {useEffect, useState} from "react";
import style from "../../styles/post.module.css"
import {useDispatch} from "react-redux";
import {updatePost} from "../../store/posts/actions";

export const Post = ({post, delPost}) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [postText, setPostText] = useState(post.text);

    useEffect(() => {
        setPostText(post.text)
    }, [post.text]);


    const onPostTextChange = (e) => {
        setPostText(e.target.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
    };

    const updatePostText = (e) => {
        setEditMode(false);
        dispatch(updatePost(e.target.id, postText));
    };


    return <div className={style.post}>
            <p><small>{post.updated_at}</small></p>

        {editMode
            ? <div className={style.cont}>
                <div className="input-group">
                    <input className={"form-control " + style.input} value={postText} onChange={onPostTextChange}/>
                </div>

                <div>
                    <a href="/#" id={post.id} className={style.delete} onClick={updatePostText}>Submit</a>
                    <a href="/#" id={post.id} onClick={deActivateEditMode} className={style.delete}>Cancel</a>
                </div>
            </div>
            : <div className={style.cont}>
                <p className={style.text}>{post.text}</p>
                <div>
                    <a href="/#" id={post.id} onClick={delPost} className={style.delete}>Delete</a>
                    <a href="/#" id={post.id} onClick={activateEditMode} className={style.delete}>Edit</a>
                </div>
            </div>
        }
    </div>
};

