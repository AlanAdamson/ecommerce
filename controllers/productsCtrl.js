var app = require('../js/server.js');
var db = app.get('db');

module.exports = {
    // create: function(){
    //     db.create_product(['new stereo', 'new one', 300, 'placeholder.jpg'], function(err, products){
    //         console.log(err, products);
    //     });
    // },
    // getOne: function(){
    //     db.read_product(function(err, products){
    //         console.log(err, products);
    //     });
    // },
    getAll: function(req, res){
        db.read_products(function(err, products){
          res.send(products);
        });
    },

    getCart: function(req, res) {
      db.get_cart([cartProd], function(err, products){
        res.send(products);
      });
    }
    // update: function(){
    //     db.update_product(function(err, products){
    //         console.log(err, products);
    //     });
    // },
    // delete: function(){
    //     db.delete_product(function(err, products){
    //         console.log(err, products);
    //     });
    // }
};
