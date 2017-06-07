import store from '../src/store/serverStore'
import Routes from '../src/routes'
import React from 'react'
import path from 'path'
import {StaticRouter} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import {Provider} from 'react-redux'
const fs = require('fs');


const universalLoader = (req, res) => {
	const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
	axios.get("").then((response) => console.log(response)).catch((error) => console.log(error))

	fs.readFile(filePath, 'utf8', (err, htmlData) => {
		if (err) {
			console.error('read err', err)
			return res.status(404).end()
		}
		const context = {};

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
			// Somewhere a `<Redirect>` was rendered
			// redirect(301, context.url)
		} else {
			// we're good, send the response
			const RenderedApp = htmlData.replace('{{SSR}}', markup)
			res.send(RenderedApp)
		}
	})
};

export default universalLoader
