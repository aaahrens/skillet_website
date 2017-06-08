/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css";
import {Route, Switch} from "react-router";
import Header from "./components/Header";
import Location from "./components/Location";
import About from "./components/About";
import Menu from "./components/Menu";
import Home from "./components/Home";
import {connect} from "react-redux";
import * as data from "./actions/data.actions";
import { withRouter } from 'react-router-dom'

class Routes extends React.Component {

	constructor(props){
		super(props);
		this.props.getMenu()
	}


	render() {
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
	}
}


export default withRouter(connect(
	(state) => ({

	}),
	(dispatch) => ({
		getMenu: () => dispatch(data.getMenu())
	})
)(Routes))