import express from 'express'
import universalLoader from './universal'
import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'
// routes
const router = express.Router();
router.get('/', universalLoader);


const server = express();


// Support Gzip
server.use(compression());

// Suport post requests with body data (doesn't support multipart, use multer)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Setup logger
// server.use(morgan('combined'));

server.use('/', router);

// Serve static assets
server.use(express.static(path.resolve(__dirname, '.', 'build')));

server.use('/', universalLoader);

module.exports = server;
