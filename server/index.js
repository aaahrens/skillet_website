require('ignore-styles');
require('babel-register')({ignore: /\/(build|node_modules)\//, presets: ['react-app', 'es2015', 'react']})

const server = require('./server');

const PORT = process.env.PORT || 3001;

// Why don't I need http createServer
server.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`)
});

