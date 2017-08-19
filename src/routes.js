/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import "./styles/screen.css";
import {Route} from "react-router";
import Header from "./components/Header";
import AboutBody from "./components/bodies/About";
import {connect} from "react-redux";
import * as data from "./actions/data.actions";
import {Switch, withRouter} from "react-router-dom";
import * as state from "./actions/state.actions";
import Home from "./components/bodies/Home";
import MenuBody from "./components/bodies/Menu";
import LocationBody from "./components/bodies/Location";
import Footer from "./components/Footer";
import GalleryBody from "./components/bodies/Gallery";

class Routes extends React.Component {

	constructor(props) {
		super(props);
		this.props.select(props.location.pathname.replace("/", ''))
	}

	componentWillMount(){
		if(this.props.menu.size === 0) {
			this.props.onStart()
		}

		// if(this.props.specials.size === 0) {
		//
		// }
		// if(this.props.images.size === 0) {
		//
		// }


	}

	componentWillReceiveProps(nextProps) {
		this.props.select(nextProps.location.pathname.replace("/", ''))
	}

	render() {
		return (
			<div className="screen">
				<Route path="/" component={Header}/>
				<div className="content-wrapper">
					<Switch>

						<Route path="/menu" component={MenuBody}/>
						<Route path="/about" component={AboutBody}/>
						<Route path="/location" component={LocationBody}/>
						<Route path="/gallery" component={GalleryBody}/>
						<Route path="/" component={Home}/>

					</Switch>
					<Footer/>

				</div>
			</div>
		)
	}
}


export default withRouter(connect(
	(state) => ({
		menu: state.data.menu,
		specials: state.data.specials,
		images: state.data.images,
	}),
	(dispatch) => ({
		onStart: () => dispatch(data.fetchAll()),
		select: (name) => dispatch(state.selectTab(name))

	})
)(Routes))