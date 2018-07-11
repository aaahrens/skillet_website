/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const Header = (props) => (
    <div className="header-wrapper">
        <div className="header">
            <a className="header-logo" onClick={() => props.goHome()} />
            <div className="header-inner">
                <a
                    className="header-item"
                    href="/menu"
                    onClick={(e) => {
                        e.preventDefault();
                        props.goMenu();
                    }}
                >
                    Menu
                </a>
                <a
                    className="header-item"
                    href="/location"
                    onClick={(e) => {
                        e.preventDefault();
                        props.goLocation();
                    }}
                >
                    Location
                </a>
                <a
                    className="header-item"
                    href="/gallery"
                    onClick={(e) => {
                        e.preventDefault();
                        props.goGallery();
                    }}
                >
                    Gallery
                </a>
                <a
                    className="header-item"
                    href="/about"
                    onClick={(e) => {
                        e.preventDefault();
                        props.goAbout();
                    }}
                >
                    About
                </a>
            </div>
        </div>
    </div>
);

export default connect(
    (state) => ({
        currentTab: state.state.currentTab
    }),
    (dispatch) => ({
        goMenu: () => dispatch(push('/menu')),
        goLocation: () => dispatch(push('/location')),
        goHome: () => dispatch(push('/')),
        goAbout: () => dispatch(push('/about')),
        goGallery: () => dispatch(push('/gallery'))
    })
)(Header);
