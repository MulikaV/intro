import React, {useEffect, useState} from "react";
import style from "../../styles/post.module.css"
import {useDispatch} from "react-redux";
import {updatePost} from "../../store/posts/actions";

export const Post = ({post, delPost,isAuth}) => {

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

    const updatePostText = (id) => {
        setEditMode(false);
        dispatch(updatePost(id, postText));
    };


    return <div className={style.post}>
        <div className={style.cont}>
            <p><small>{post.updated_at}</small></p>
            <p><small>{post.user.name}</small></p>
        </div>

        {editMode
            ? <div className={style.cont}>
                <div className="input-group">
                    <input className={"form-control " + style.input} value={postText} onChange={onPostTextChange}/>
                </div>

                <div>
                    <a href="/#"  className={style.delete} onClick={()=>{updatePostText(post.id)}}>Submit</a>
                    <a href="/#"  onClick={deActivateEditMode} className={style.delete}>Cancel</a>
                </div>
            </div>
            : <div className={style.cont}>
                <p className={style.text}>{post.text}</p>
                { isAuth && <div>
                    <a href="/#"  onClick={()=>{delPost(post.id)}} className={style.delete}>Delete</a>
                    <a href="/#"  onClick={activateEditMode} className={style.delete}>Edit</a>
                </div>}
            </div>
        }
    </div>
};

