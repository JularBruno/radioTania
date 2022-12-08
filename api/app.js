import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import routes from './routes'
import http from 'http'
import multipart from 'connect-multiparty'

const cors = require('cors');

const https = require('https')
const fs = require('fs');

const app = express()
const server = http.Server(app)


let options = {
};

https.createServer(options, app)
.listen(4071);


app.use(function (req, res, next) {
	if (process.env.NODE_ENV && process.env.NODE_ENV == 'test') {
		req.settings = require('./test/config/settings')
	} else {
		req.settings = require('./config/settings')
	}
	return next()
})


// cache control error 304
app.disable('etag');

// CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept, x-access-token, x-accepted-format')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	next()
})

app.use(multipart({
	uploadDir: '/tmp/'
}))

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({
	parameterLimit: 100000,
	limit: '50mb',
	extended: true
}));

app.use(cookieParser())


/*
 * @static content
 * app.use('/speechToText', express.static(path.join(__dirname, './static/speechToText.html')));
 * app.use('/files', express.static(path.join(__dirname, './static/files/')));
 */

app.use('/api', routes);
app.use('/files', express.static(path.join(__dirname, '../api/files')));

app.use('/admin', express.static(path.join(__dirname, '../adm/dist/')))

app.use('/', express.static(path.join(__dirname, '../web/dist/')))
app.use('/home', express.static(path.join(__dirname, '../web/dist/')))
app.use('/events', express.static(path.join(__dirname, '../web/dist/')))
app.use('/events/:id', express.static(path.join(__dirname, '../web/dist/')))
app.use('/audios', express.static(path.join(__dirname, '../web/dist/')))
app.use('/audios/:province', express.static(path.join(__dirname, '../web/dist/')))
app.use('/videos', express.static(path.join(__dirname, '../web/dist/')))
app.use('/videos/:category', express.static(path.join(__dirname, '../web/dist/')))

// app.get('/admin/*',  function(req, res) {
// 	res.sendFile('index.html', { root: '../adm/dist/' })
// })


export {app, server}
