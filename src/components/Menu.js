/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "./Footer";
import Card from "./Card";


const Menu = (props) => {


	return (
		<div id="body">
			<Card text={props.text}/>
			<Card text={props.text}/>
			<Card text={props.text}/>
			<Card text={props.text}/>
			<Card text={props.text}/>
			{/*<Card text={props.text}/>*/}
			{/*<Card text={props.text}/>*/}
			{/*<Card text={props.text}/>*/}
			<Footer/>
		</div>
	)
};


export default connect(
	(state) => ({
		text: state.data.placeHolder
	}),
	(dispatch) => ({})
)(Menu)