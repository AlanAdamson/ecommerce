angular.module('mainApp').service('mainService',  function($http) {

  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: 'http://localhost:7878/products-load'
    });
  };

  this.cartItems = [];

  this.addCart = function(prod) {
    this.cartItems.push(prod);
  };

  this.removeCart = function(prod) {
    var prodLocal = this.cartItems.indexOf(prod);
     if (prodLocal === true) {
      this.cartCounter--;
    }
    this.cartItems.splice(prodLocal, 1);
    console.log(this.cartItems);
  };

  this.cartCounter = 0;

  var prodPriceTotal = 0;

  this.cartTotaler = function(prodPrice) {
    console.log('Main service prodPrice ' + prodPrice);
    prodPriceTotal = prodPriceTotal + prodPrice;
    console.log('main service prodpricetotal ' + prodPriceTotal);
  };

  this.cartClear = function() {
    console.log('cartClear ran');
    this.cartItems = [];
    console.log(this.cartItems);
  };

});
