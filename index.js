require('ignore-styles');
require('babel-register')({ignore: /\/(build|node_modules)\//, presets: ['es2015', 'react-app']})

const server = require('./server');

const PORT = process.env.PORT || 3001;

// Why don't I need http createServer
server.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`)
});

