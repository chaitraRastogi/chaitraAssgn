var app = angular.module('myApp', []);

app.controller('myCtrl',['$scope','countryService',function($scope,countryService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
	
	countryService.getRestraList()
      .then(function(response) {
        $scope.name = response;
      });
}]);