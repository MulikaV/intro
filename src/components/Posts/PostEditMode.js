import React from "react";
import style from "../../styles/post.module.css";


const PostEditMode = ({post, deActivateEditMode, postText, onPostTextChange, updatePostText}) => {


    return <div className={style.content}>
        <div className="input-group">
            <input className={"form-control " + style.input} value={postText} onChange={onPostTextChange}/>
        </div>

        <div>
            <a href="/#" className={style.delete} onClick={() => {
                updatePostText(post.id)
            }}>Submit</a>
            <a href="/#" onClick={deActivateEditMode} className={style.delete}>Cancel</a>
        </div>
    </div>
};

export default PostEditMode;