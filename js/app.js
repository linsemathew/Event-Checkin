var checkin = angular.module('eventCheckin', ['ngRoute']);

checkin.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'RegistrationController'
	}).
	when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegistratonController'
	}).
	when('/success', {
		templateUrl: 'views/success.html',
		controller: 'SuccessController'
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);

checkin.controller('checkinController', ['$scope', function($scope){
		$scope.message = "Welcome";
}])