import store from './src/store/serverStore'
import * as actions from './src/actions/data.actions'
import Routes from './src/routes'
import React from 'react'
import path from 'path'
import {StaticRouter} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import {Provider} from 'react-redux'
const fs = require('fs');





const universalLoader = (req, res) => {


	const filePath = path.resolve(__dirname, '.', 'build', 'index.html')

	fs.readFile(filePath, 'utf8', (err, htmlData) => {
		if (err) {
			console.error('read err', err)
			return res.status(404).end()
		}
		let context = {

		};

		store.dispatch(actions.fetchAll());



		const markup = ReactDOMServer.renderToString(
			<Provider store={store}>
				<StaticRouter
					location={req.url}
					context={context}>
					<Routes />
				</StaticRouter>
			</Provider>
		);

		if (context.url) {
			redirect(301, context.url)

		} else {
			// we're good, send the response
			const preloadedState = store.getState();

			const RenderedApp = htmlData
				.replace('{{SSR}}', markup)
				.replace('{{STORE}}', JSON.stringify(preloadedState).replace(/</g, '\\u003c'));

			res.send(RenderedApp)
		}
	})
};

export default universalLoader
