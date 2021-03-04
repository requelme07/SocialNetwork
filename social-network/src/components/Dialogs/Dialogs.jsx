import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id}/>
    ));

    let messagesElements = state.messages.map((m) => (
        <Message message={m.message}/>
    ));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={style.dialogs}>
            <h2 className={style.dialogs_title}>Dialogs</h2>
            <div className={style.dialogs_items}>{dialogsElement}</div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
            <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                className={style.input}
                placeholder="Введите ваше сообщение"
            ></textarea>
                    </div>
                    <div>
                        <button className={style.btn} onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
