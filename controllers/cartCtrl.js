angular.module('mainApp').controller('mainCtrl', function($scope, mainService, $stateParams){
  var products = mainService.getProducts;
  var prodId = $stateParams.id;
    $scope.image = products[$stateParams.id].image;
    $scope.product =  products[$stateParams.id];
    $scope.description =  products[$stateParams.id].description;
});
