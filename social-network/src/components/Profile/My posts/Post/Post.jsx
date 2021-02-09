import React from "react";
import photo from "../../photo.jpg";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
                <img className={style.photo} src={photo}/>
                <div className={style.text}>{props.message}</div>
            </div>
            <div className={style.like}>
                <span>Like <span className={style.red}>{props.like}</span></span>
            </div>
        </div>
    );
};

export default Post;
