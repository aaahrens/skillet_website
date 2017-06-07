/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from "./Footer";
import Card from "./Card"
import SectionCard from "./Section"

const About = (props) => {

    return (
        <div id="body">
            <div id="content">

            </div>
            <Footer/>
        </div>
    )
};


export default connect(
    (state) => ({
    }),
    (dispatch) => ({

    })
)(About)