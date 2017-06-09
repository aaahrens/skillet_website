import ReactDOM from "react-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";
import store, {history} from "./store/store";
import {ConnectedRouter} from "react-router-redux";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();