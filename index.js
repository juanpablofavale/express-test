const http = require('http');
const express = require('express');
const morgan = require('morgan');

//crear servidor con node
/*http.createServer((req, res) => {
    res.end('Hola Mundo');
}).listen(3000);*/

//crear servidor con express
const app = express();

//requiriendo rutas
const rutas = require('./rutas');
const rutasApi = require('./rutas-api')

//configuraciones
app.set('appNombre', 'Mi primer Server');
//configurar vistas en carpeta views
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

//middlewares
app.use(function (req, res, next){
    console.log('request url: ' + req.url);
    next();
}
);
app.use((req, res, next) => {
    console.log('Pasaste por aca!');
    next();
});

//middlewares externos de npm
app.use(morgan('dev'));

//rutas
app.use('/api', rutasApi);
app.use(rutas);

app.listen(3000, () =>{
    console.log('Servidor On en puerto 3000');
    console.log('Nombre de la app: ' + app.get('appNombre'));
});