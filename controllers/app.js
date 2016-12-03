angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })

  .state('products', {
    abstract: true,
    url: '/products',
    templateUrl: './views/products.html'
  })

  .state('account', {
    url: '/account',
    templateUrl: './views/account.html'
  })

  .state('cart', {
    url: '/cart',
    templateUrl: './views/cart.html'
  })

  .state('productsAll', {
    url: '/',
    templateUrl: './views/products/allProducts.html',
    parent: 'products'
  })

  .state('products.description', {
    url: '/products/some',
    templateUrl: './views/products/someProducts.html'
  });

  $urlRouterProvider.otherwise('/');

});
