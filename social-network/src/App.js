import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import Stories from "./components/Stories/Stories";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer store={props.store}/>}
                />
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
            <Stories/>
        </div>
    );
};

export default App;
