import React from 'react'
import {connect} from 'react-redux'

import Card from './card.component'

const SectionCard = (props) => {
	return (
		<div className="section">{props.value}</div>
	)
}

export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(SectionCard)