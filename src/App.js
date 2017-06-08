import React from "react";
import "./styles/screen.sass";
import {connect} from "react-redux";

const App = (props) => {

	return (
		<div className="container">
			{props.children}
		</div>

		//embed the analytics and shiz right into here
	);
};

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(App)


