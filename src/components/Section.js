import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'


const SectionCard = (props) => {
	return (
		<div className="section-card">
			<div className="section">

			</div>
		</div>
	)
}

export default connect(
	(state) => ({
		getAbout: state.data.aboutBody
	}),
	(dispatch) => ({})
)(SectionCard)