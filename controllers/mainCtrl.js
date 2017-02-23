angular.module('mainApp').controller('mainCtrl', function($scope, mainService){
  $scope.test = "working";
  $scope.cartCount = 0;
  $scope.cartStorage = mainService.cartStorage;

  $scope.getProducts = function() {
    mainService.getProducts()
    .then(function(dataFromService) {
      $scope.products = dataFromService.data;
    });
  };
  $scope.getProducts();

  $scope.addCart = function(prod, prodPrice) {
    // mainService.cartCounter++;
    mainService.addCart(prod);
    $scope.cartTotaler(prodPrice);
    $scope.cartItems = mainService.cartItems;
    $scope.cartCount = mainService.cartCounter;
    $scope.cartTotal = mainService.prodPriceTotal;
  };

  $scope.update = function() {
    console.log('returned');
    return 0;
  };

  // $scope.cartTotaler = function(prodPrice) {
  //   $scope.cartTotal = 0;
  // };

  $scope.removeCart = function(prod, prodPrice) {
    // mainService.cartCounter--;
    mainService.removeCart(prod);
    $scope.cartReducer(prodPrice);
    $scope.cartCount = mainService.cartCounter;
  };

  var prodTotalPrice = 0;
  $scope.prodTotal = prodTotalPrice;
  $scope.cartTotaler = function(prodPrice) {
    console.log(prodTotalPrice);
    prodTotalPrice = prodTotalPrice + prodPrice;
    $scope.prodTotal = prodTotalPrice;
  };

  $scope.cartReducer = function(prodPrice) {
  console.log('cartReducer prodPrice ' + prodPrice);
  console.log(prodTotalPrice);
    prodTotalPrice = prodTotalPrice - prodPrice;
    $scope.prodTotal = prodTotalPrice;
    console.log(prodTotalPrice);
  };

  $scope.cartClear = function() {
    mainService.cartClear();
    $scope.cartItems = mainService.cartItems;
    prodTotalPrice = 0;
    $scope.prodTotal = prodTotalPrice;
  };

  });
