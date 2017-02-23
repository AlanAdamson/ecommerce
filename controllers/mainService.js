angular.module('mainApp').service('mainService',  function($http) {

  this.cartCounter = 0;
  this.prodPriceTotal = 0;
  this.cartItems = [];
  this.cartStorage = JSON.parse(localStorage.getItem('cartItems'));

  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: 'http://localhost:7878/products-load'
    });
  };

  this.addCart = function(prod) {
    this.cartItems.push(prod);
    // var oldCart = JSON.parse(localStorage.getItem('cartItems'));
    // // var oldCart = "";
    // console.log('oldcart: ' + oldCart);
    // if(!oldCart) {
    //   oldCart = "";
    // }
    // console.log('oldcart: ' + oldCart);
    // localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    // // localStorage.setItem('cartItems', JSON.stringify(oldCart + this.cartItems));
    // console.log('localstorage: ' + localStorage.getItem('cartItems'));
  };

  // this.addCart = function(prod) {
  //   console.log(this.cartItems);
  //   var cart = JSON.parse(localStorage.getItem('cartItems') || []);
  //   cart.push(prod);
  //   localStorage.setItem('cartItems', JSON.stringify(cart));
  // };

  this.removeCart = function(prod) {
    var prodLocal = this.cartItems.indexOf(prod);
     if (prodLocal === true) {
      this.cartCounter--;
    }
    this.cartItems.splice(prodLocal, 1);
  };



  this.cartCounter = 0;

  var prodPriceTotal = 0;

  this.cartTotaler = function(prodPrice) {
    console.log('Main service prodPrice ' + prodPrice);
   prodPriceTotal = prodPriceTotal + prodPrice;
    console.log('main service prodpricetotal ' + prodPriceTotal);
  };

  this.cartClear = function() {
    localStorage.clear();
    if(this.cartItems.length !== 0) {
      this.cartItems = [];
      this.prodPriceTotal = 0;
      console.log(localStorage.getItem('cartItems'));
      localStorage.removeItem('cartItems');
      console.log(localStorage.getItem('cartItems'));
    }
  };

});
