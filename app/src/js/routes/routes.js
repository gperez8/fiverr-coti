angular.module('app')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when("/", {
            templateUrl: 'view/index.html',
            controller: 'appCtrl',

        })
        .otherwise({
			redirectTo: '/',
		});
        $locationProvider.html5Mode(true);
    });