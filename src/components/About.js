/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from "./Footer";
import Card from "./reusable/card.component"
import SectionCard from "./reusable/section-card.component"

const About = (props) => {

    return (
        <div id="body">
            <div id="content">
                <Card id="team-image" value="image" />
                <SectionCard id="about-section" value="What we're all about" cardValue={props.getAbout} />
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