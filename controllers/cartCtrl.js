angular.module('mainApp').controller('cartCtrl', function($scope, mainService, $stateParams){
  $scope.blah = "working";
  var products = mainService.getProducts;
  var prodId = $stateParams.id;
    $scope.image = product[$stateParams.id].image;
    $scope.product =  product[$stateParams.id];
    $scope.description =  product[$stateParams.id].description;
});
