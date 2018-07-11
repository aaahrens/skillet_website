import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import React from 'react';
import { history, store } from './store/store';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import './styles/print.css';
import './styles/screen.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
