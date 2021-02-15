import {rerenderEntireTree} from "../index";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 22},
                {id: 2, message: "My first post!", likesCount: 17},
            ],
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Fred"},
                {id: 2, name: "Bred"},
                {id: 3, name: "Martin"},
            ]
        }
    },
    _callSubscriber () {
        console.log('state is change')
    },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer



    },

    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    dispatch (action) {
        if(action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT")   {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    },
}


export default store;
window.state = store;
