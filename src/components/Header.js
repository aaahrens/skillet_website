/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import image from '../logo-1.png'
import * as data from '../actions/data.actions'
const Header = (props) => {


    props.getMenu();

    return (
        <div className="header">
            <a onClick={() => props.goHome()} id="logo-container">
				<img src={image} className="logo">

				</img>
            </a>
            <div id="button-container">
                <a className="menu-button" onClick={() => props.goLocation()}>
                    Location
                </a>
                <a className="menu-button" onClick={() => props.goMenu()}>
                    Menu
                </a>
				<div className="menu-button">
				</div>
                <a className="menu-button" onClick={() => props.goAbout()}>
                    About
                </a>
				<a className="menu-button" onClick={() => props.goAbout()}>
					Gallery
				</a>
            </div>
        </div>
    )
};


export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        goAbout: () => dispatch(push("/about")),
        goMenu: () => dispatch(push("/menu")),
        goLocation: () => dispatch(push("/location")),
        goHome: () => dispatch(push("/")),
        getMenu: () => dispatch(data.getMenu())
    })
)(Header)

