angular.module('mainApp').service('mainService', function($http) {

  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: 'http://localhost:7878/products-load'
    });

  };

});
