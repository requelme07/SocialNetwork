import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export default state;

