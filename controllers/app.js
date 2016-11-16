angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })

  .state('products', {
    url: '/products',
    templateUrl: './views/products.html'
  })

  .state('account', {
    url: '/account',
    templateUrl: './views/account.html'
  })

  .state('cart', {
    url: '/cart/:id',
    templateUrl: './views/cart.html',
    controller: 'cartCtrl',
    controllerAs: 'vm'
  })

  .state('products.all', {
    url: '/products/all',
    templateUrl: './views/products/allProducts.html'
  })

  .state('products.description', {
    url: '/products/some',
    templateUrl: './views/products/someProducts.html'
  });

  $urlRouterProvider.otherwise('/');

});
