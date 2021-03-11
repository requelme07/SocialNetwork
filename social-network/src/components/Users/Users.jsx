import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: "Ilya",
                status: "I am a boss",
                locations: {city: "Barnaul", country: "Russia"},
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg/274px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg"
            },
            {
                id: 2,
                followed: false,
                fullName: "Anton",
                status: "I am a boss too",
                locations: {city: "Krasnodar", country: "Russia"},
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg/274px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg"
            },
            {
                id: 3,
                followed: false,
                fullName: "Anastasya",
                status: "I am a manager",
                locations: {city: "Barnaul", country: "Russia"},
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg/274px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg"
            },
            {
                id: 4,
                followed: true,
                fullName: "Kirill",
                status: "Only i am a boss",
                locations: {city: "Almaty", country: "Kazakhstan"},
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg/274px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_2015.jpg"
            },
        ])
    }


    return (
        <div>
            <h3>Users</h3>
            {props.users.map((u) => (
                <div key={u.id}>
                    <div className={style.container}>
                        <div className={style.user_avatar}>
                            <img
                                className={style.user_photo}
                                src={u.photoUrl}
                                alt="userPhoto"
                            />
                            {u.followed
                                ? <button onClick={()=> {props.unfollow(u.id)}} className={style.btn}>Unfollow</button>
                                : <button onClick={()=> {props.follow(u.id)}} className={style.btn}>Follow</button>
                            }

                        </div>
                        <div className={style.user_info}>
                            <div className={style.user_item}>
                                <div>{u.fullName}</div>
                                <div className={style.status}>{u.status}</div>
                            </div>
                            <div className={style.user_item}>
                                <div>{u.locations.country}</div>
                                <div>{u.locations.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
