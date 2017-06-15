/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css";
import {Route, Switch} from "react-router";
import Header from "./components/Header";
import Location from "./components/bodies/Location";
import About from "./components/bodies/About";
import Menu from "./components/bodies/Menu";
import Home from "./components/bodies/Home";
import Gallery from "./components/bodies/Gallery";
import Footer from "./components/Footer";
import {connect} from "react-redux";
import * as data from "./actions/data.actions";
import {withRouter} from "react-router-dom";
import * as state from "./actions/state.actions";

class Routes extends React.Component {

	constructor(props) {
		super(props);
		this.props.getMenu();
		this.props.select(props.location.pathname.replace("/", ''))
	}

	componentWillReceiveProps(nextProps) {
		this.props.select(nextProps.location.pathname.replace("/", ''))
	}

	render() {
		return (
			<div className="screen">
				<Route path="/" component={Header}/>
				<Switch>
					<Route path="/about" component={About}/>
					<Route path="/location" component={Location}/>
					<Route path="/menu" component={Menu}/>
					<Route path="/gallery" component={Gallery}/>
					<Route path="/" component={Home}/>
				</Switch>
			 	<Route path="/" component={Footer}/>
			</div>
		)
	}
}


export default withRouter(connect(
	(state) => ({}),
	(dispatch) => ({
		getMenu: () => dispatch(data.getMenu()),
		select: (name) => dispatch(state.selectTab(name))

	})
)(Routes))