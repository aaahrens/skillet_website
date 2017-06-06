/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css"

import {Route, Switch} from "react-router";
import Dashboard from "./pages/Home";

const Routes = (props) => {

    return (
        <div>
            <Route path="/" component={Dashboard}/>
        </div>
        )
    };


export default Routes