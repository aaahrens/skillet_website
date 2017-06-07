/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const Footer = (props) => {

    return (
        <div id="footer">
            <div id="footer-line">
                8776 Lakewood Dr
                Windsor, CA 95492
            </div>
            <div id="footer-line">
                penis
            </div>
        </div>
    )
};


export default withRouter(connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(Footer))

