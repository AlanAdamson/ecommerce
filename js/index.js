var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = require('../dbConnection.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

var db = app.get('db');

var controllers = require('../controllers/productsCtrl.js');

app.get('/products-load',
    controllers.getAll
  );

  app.get('/products-load',
      controllers.getAll
    );

var port = 7878;
app.listen(port, function(){
  console.log('Listening on port:' + port);
});
