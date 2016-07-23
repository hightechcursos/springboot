appCliente.controller("loginController", function ($scope, $http){
	
	$scope.usuario={};
	
	$scope.token="";
	
	$scope.autenticar= function(){
		
		$http.post("/autenticar", $scope.usuario).then(function(response){
			console.log("Sucesso " + response);
			$scope.token = response.data.token;
			
		} , function(response){
			console.log("Falha " + response);
		});
		//console.log("Chamou Autenticar " + $scope.usuario.nome + " " + $scope.usuario.senha )
	}
});