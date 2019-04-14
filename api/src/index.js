'use strict'

const express = require('express');
const app = express();
const user_routes = require('./routes/users');
const prov_routes = require('./routes/providers');
const purch_routes = require('./routes/purchases');
const prod_routes = require('./routes/products');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Cors

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Routes
app.use('/api',user_routes);
app.use('/api',prov_routes);
app.use('/api',purch_routes);
app.use('/api',prod_routes);

app.listen(app.get('port'), ()=> {
    console.log('Server on port',  app.get('port'))
});