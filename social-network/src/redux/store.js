import { rerenderEntireTree } from "../index";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 22 },
        { id: 2, message: "My first post!", likesCount: 17 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Ilya" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Saha" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Anasteisha" },
        { id: 6, name: "Ilya" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "Bay!" },
        { id: 5, message: "Hi!" },
        { id: 6, message: "Hi!" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Fred" },
        { id: 2, name: "Bred" },

        { id: 3, name: "Martin" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state is change");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};



export default store;
window.state = store;
