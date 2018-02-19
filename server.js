const http = require('http');
const express = require('express');
const path = require('path');
const engine = require('ejs-locals');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/view', express.static(path.join(__dirname, '/app/view')));
app.use('/src', express.static(path.join(__dirname, '/app/src')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.engine('html', engine);
app.set('view', path.join(__dirname, 'app/view'));
app.set('view engine', 'html');

app.use(bodyParser.urlencoded());

const httpServer = http.createServer(app);
httpServer.listen(app.get('port'));

app.use('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'app/view/team.html'));
});

app.get('/team', function(req, res) {

	console.log('aiojdlsajldjsalkjdl')

	res.render(path.join(__dirname, 'app/view/team.html'));
});