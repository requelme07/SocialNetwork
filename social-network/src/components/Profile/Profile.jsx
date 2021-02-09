import React from "react"

import style from "./Profile.module.css"

import MyPosts from "./My posts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;