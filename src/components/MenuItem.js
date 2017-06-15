import React from "react";
import {connect} from "react-redux";

import image from '../about-image.png'

const MenuItem = ({item}) => {
	return (
		<div className="menu-item">
			<div className="image">
				<img src={image} />
			</div>
			<div className="meta">
				<p className="font-header-1">{item.title}</p>
				<p className="font-caption">{item.price}</p>
				<p className="font-body-copy">{item.description}</p>
			</div>
		</div>
	)
};

export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(MenuItem)