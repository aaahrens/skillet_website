import React from 'react'
import {connect} from 'react-redux'

const Card = (props) => {
	this.render = () => {
		if (props.valueImage !== undefined)
			return <img src={props.valueImage} />;
		else if (props.value !== undefined)
			return props.value;
		else
			return "";
	}
	return (
		<div className="card">
			{this.render()}
		</div>
	)
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(Card)