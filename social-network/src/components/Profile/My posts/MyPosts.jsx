import React from "react";

import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts
        .map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = ()=> {
        props.dispatch({ type: 'ADD-POST' });
    }
    let onPostChange = ()=> {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div className={style.posts}>
            <h2>My posts</h2>
            <div>
                <input onChange={ onPostChange } ref={newPostElement}
                       className={style.input}
                       value={props.newPostText}
                       name="search"
                       placeholder="your news..."
                       type="search"
                />
            </div>
            <button onClick={ addPost } className={style.btn}>Send
            </button>
            {postElements}
        </div>
    );
};

export default MyPosts;
