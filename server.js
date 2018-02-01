const http = require('http');
const express = require('express');
const path = require('path');
const engine = require('ejs-locals');

//create a server object:
/*const app = express();
const directoryToServe = path.join(__dirname, '/app/src');

//	Se establece directorio estatico
app.use('/view', express.static(path.join(__dirname, '/app/view')));
app.use('/src', express.static(directoryToServe));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));



app.engine('html', engine);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');

const httpServer = http.createServer(app);
httpServer.listen(app.get('port'));*/

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/view', express.static(path.join(__dirname, '/app/view')));
app.use('/src', express.static(path.join(__dirname, '/app/src')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.engine('html', engine);
app.set('view', path.join(__dirname, 'app/view'));
app.set('view engine', 'html');

const httpServer = http.createServer(app);
httpServer.listen(app.get('port'));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, 'app/view/index.html'));
});