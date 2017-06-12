/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from './Footer'

import Section from './Section'
import Card from './Card'

import image from '../location.png'
// import phone from ''

const Location = (props) => {

    return (
        <div id="body">
            <div id="content">
                <div id="location-meta-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195.0243085592106!2d-122.80565611736877!3d38.54785188890775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6a6c94f9aa5d3d!2sSkillets+Cafe!5e0!3m2!1sen!2sus!4v1497289403255" width="600" height="450" frameborder="0" style="border:0" allowfullscreen />
                    <Card className="location-meta-card">
                        <text className="font-header-1">1234 Inifity Loop</text>
                        <p>Windsor, CA 95494</p>
                        <text>Everyday</text>
                        <text className="float-right">6am-3pm</text>
                    </Card>
                    <p className="location-phone-card">(707) 123-4567</p>
                </div>
                <Section valueImage={image} />
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
)(Location)