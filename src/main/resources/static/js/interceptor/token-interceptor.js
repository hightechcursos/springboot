appCliente.factory("tokenInterceptor", function($q){
	
	return {
		
		'request': function(config){
			
			config.headers.Authorization = 'Bearer ' + localStorage.getItem("userToken");  
		
			return config;
		}
	};
	
});