import React from 'react'
import {connect} from 'react-redux'

const MenuItem = (props) => {
	let classes = "menu-item " + props.className;

	let item = props.value;
	return (
		<div id={props.id} className={classes}>
			<text className="subject">{item.subject}</text>
			<text className="price">{item.price}</text>
			<text className="description">{item.description}</text>
		</div>
	)
}

export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(MenuItem)