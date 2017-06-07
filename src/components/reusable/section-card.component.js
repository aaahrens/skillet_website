import React from 'react'
import {connect} from 'react-redux'

import Card from './card.component'

const SectionCard = (props) => {
	return (
		<div className="section-card">
			<h2 className="section">{props.value}</h2>
			<Card value={props.cardValue} />
		</div>
	)
}

export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(SectionCard)