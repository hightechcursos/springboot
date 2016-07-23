appCliente.controller("loginController", function ($scope, $http){
	
	$scope.usuario={};
	
	
	$scope.autenticar= function(){
		
		$http.post("/autenticar", $scope.usuario).then(function(response){
			console.log("Sucesso " + response);
		} , function(response){
			console.log("Falha " + response);
		});
		//console.log("Chamou Autenticar " + $scope.usuario.nome + " " + $scope.usuario.senha )
	}
});