import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <h2 className={style.dialogs_title}>Dialogs</h2>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;