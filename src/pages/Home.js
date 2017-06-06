/**
 * Created by drunkengranite on 1/14/2017.
 */
import React from 'react';
import { connect } from 'react-redux'
import '../styles/screen.sass'
import * as data from '../actions/data.actions'


class Dashboard extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
		return (
            <div>
                <text>
                    hello everybody
                </text>
			</div>
		);
    }
};


export default connect(
    (state) => ({

    }),
    (dispatch) => ({

	})
)(Dashboard)

