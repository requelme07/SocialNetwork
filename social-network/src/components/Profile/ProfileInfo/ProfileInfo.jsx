import React from "react"

import style from "./ProfileInfo.module.css"
import photo from "../photo.jpg";
import background from "../background.jpg"

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={style.bg} src={background}/>
            <div className={style.profile}>
                <img className={style.photo} src={photo}/>
                <div className={style.info}>
                    <div className={style.name}>Ilya L.</div>
                    <div>Date of Birth: 21 january</div>
                    <div>City: Barnaul</div>
                    <div>Education: ASU'13</div>
                    <div>Web site: https://magnum40.com</div>
                </div>
            </div>
        </div>
    )
}

export  default ProfileInfo;