/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css"
import {Route, Switch} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Location from "./components/Location"
import About from "./components/About"
import Menu from "./components/Menu"
import Home from "./components/Home"


const Routes = (props) => {

    return (
        <div className="screen">
            <Route path="/" component={Header}/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/location" component={Location}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
        )
    };


export default Routes