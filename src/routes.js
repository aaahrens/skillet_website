/**
 * Created by drunkengranite on 2/26/17.
 */
import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import Header from "./containers/Header";
import AboutBody from "./containers/About";
import * as data from "./actions/DataActions";
import Home from "./containers/Home";
import MenuBody from "./containers/Menu";
import { LocationBody } from "./presentation/Location";
import Footer from "./presentation/Footer";
import GalleryBody from "./containers/Gallery";

class Routes extends React.PureComponent {
    componentWillMount() {
        const {
            menu: { size },
            onStart
        } = this.props;

        if (size === 0) {
            onStart();
        }
    }

    render() {
        return (
            <div className="screen">
                <Route path="/" component={Header} />
                <div className="content-wrapper">
                    <Switch>
                        <Route path="/menu" component={MenuBody} />
                        <Route path="/about" component={AboutBody} />
                        <Route path="/location" component={LocationBody} />
                        <Route path="/gallery" component={GalleryBody} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(
        (state) => ({
            menu: state.data.get("menu"),
            specials: state.data.get("specials"),
            images: state.data.get("images")
        }),
        (dispatch) => ({
            onStart: () => dispatch(data.fetchAll())
        })
    )(Routes)
);
