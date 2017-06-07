/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from './Footer'


const Menu = (props) => {

    return (
        <div id="body">
            <div id="content">
				{
					props.menu.map((item, index) => {
						return (
							<div key={index}>
								{JSON.stringify(item)}
							</div>
						)
					})
				}
            </div>
            <Footer/>
        </div>
    )
};


export default connect(
    (state) => ({
		menu : state.data.menu
    }),
    (dispatch) => ({

    })
)(Menu)