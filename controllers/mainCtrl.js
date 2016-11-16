angular.module('mainApp').controller('mainCtrl', function($scope, mainService){
  $scope.test = "working";
    $scope.getProducts = function() {
    console.log('getProducts started');
      mainService.getProducts()
      .then(function(dataFromService) {
        $scope.products = dataFromService.data;
        // console.log(dataFromService);
      });
    };

    $scope.getProducts();

});
