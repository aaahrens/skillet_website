/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Footer from "./Footer";


const Home = (props) => {

    return (
        <div id="body">
            <div id="content">
                <text>
                    I am a home body
                </text>
            </div>
            <Footer />
        </div>
    )
};


export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(Home)