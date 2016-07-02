appCliente.controller("mainController", function($scope, $location, $route, $routeParams){
	$scope.$location= $location;
	$scope.$route=$route;
	$scope.$routeParams= $routeParams;
});