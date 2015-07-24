(function(){
	var app = angular.module("HomeApp", [])
       .config(function($interpolateProvider){
              $interpolateProvider.startSymbol('[[').endSymbol(']]');
       });

	app.controller('loginController', function($scope){
		$scope.MyLogin = {};

		$scope.MyLogin.sendForm = function(){
			console.log("email: ", $scope.MyLogin.email);
			console.log("password: ", $scope.MyLogin.password);
		};
	});

	app.controller('registerController', function($scope){
		$scope.MyRegister = {};

		$scope.MyRegister.sendForm = function(){
			console.log("First Name: ", $scope.MyRegister.firstName);
			console.log("Last Name: ", $scope.MyRegister.lastName);
			console.log("Email: ", $scope.MyRegister.email);
			console.log("Password: ", $scope.MyRegister.password);
		};
	});

})();
