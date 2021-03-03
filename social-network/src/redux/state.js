import {rerenderEntireTree} from "../index";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESAGE_BODY = 'UPDATE-NEW-MESAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 22},
                {id: 2, message: "My first post!", likesCount: 17},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ilya"},
                {id: 2, name: "Anton"},
                {id: 3, name: "Saha"},
                {id: 4, name: "Andrey"},
                {id: 5, name: "Anasteisha"},
                {id: 6, name: "Ilya"},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo!"},
                {id: 4, message: "Bay!"},
                {id: 5, message: "Hi!"},
                {id: 6, message: "Hi!"},
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Fred"},
                {id: 2, name: "Bred"},

                {id: 3, name: "Martin"},
            ]
        }
    },
    _callSubscriber() {
        console.log('state is change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id:6, message: body })
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESAGE_BODY, body: body });


export default store;
window.state = store;
