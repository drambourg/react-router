import React from 'react';
import {BrowserRouter, Switch, Route, Router, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home";
import Story from "./Component/Story";
import Header from "./Component/Header";

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/story" component={Story}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
