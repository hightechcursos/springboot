//Criacao do modulo principal da aplicacao
var appCliente = angular.module("appCliente",[]); 

//Criacao de controllers
appCliente.controller ("indexController", function  ($scope, $http){
		
	
	$scope.clientes=[];
	$scope.cliente={};
	
	$scope.carregarClientes= function (){
		$http({method:'GET', url:'http://localhost:8080/clientes'})
		.then(function (response){
			$scope.clientes=response.data;
			
		} , function (response){
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.salvarCliente= function (){
		
		$http({method:'POST', url:'http://localhost:8080/clientes',data:$scope.cliente})
		.then(function (response){
			$scope.clientes.push(response.data) ;
			
		} , function (response){
			console.log(response.data);
			console.log(response.status);
			
		});
	}
	
	$scope.excluirCliente=function(cliente){
		$http({method:'DELETE', url:'http://localhost:8080/clientes/'+cliente.id})
		.then(function (response){
			
			pos = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(pos , 1);
			
		} , function (response){
			console.log(response.data);
			console.log(response.status);
			
		});	
		
	}
	
	
	$scope.carregarClientes();
	
	
	
	
});

