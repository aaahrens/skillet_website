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