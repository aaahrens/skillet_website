import React from "react";
import {connect} from "react-redux";


const MenuItem = ({item}) => {
	return (
		<div className="menu-item">
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