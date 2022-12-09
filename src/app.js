/* const express = require('express') */
import express from 'express';
import config from './config';
const morgan = require('morgan');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();

const methodOverride = require('method-override');


// setings

app.set('port', config.port);

// middlewares para que pueda recibir JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(methodOverride('__method'))



// configuracion vistass
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs');


app.use(morgan('start'));
app.use(require('./routes/index'));
app.use(require('./routes/empleado.routs'));
app.use(require('./routes/permisos.routs'));
app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));



console.log('Hola mundo2')

 export default app; 

