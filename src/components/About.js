/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from "./Footer";

import Card from "./Card"
import Section from "./Section"

import image from "../about-image.png"

const About = (props) => {
    return (
        <div id="body">
            <div id="content">
                <Card id="team-image" valueImage={image}/>
                <Section value="What we're all about" />
                <Card id="about-section" value={props.getAbout} />
            </div>
            <Footer/>
        </div>
    )
};


export default connect(
    (state) => ({
        getAbout : state.data.aboutBody
    }),
    (dispatch) => ({

    })
)(About)