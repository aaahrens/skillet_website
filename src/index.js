import ReactDOM from "react-dom";
import Routes from "./routes";
import {Provider} from "react-redux";
import {history, store} from "./store/store";
import {ConnectedRouter} from "react-router-redux";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";


console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();