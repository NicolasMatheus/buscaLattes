angular.module('buscaLattes').config(function ($routeProvider)
{
	$routeProvider
		.when('/lattes',
		{
			templateUrl: 'view/lattes.html',
			controller: 'lattesCtrl'
		});
	$routeProvider
		.when('/opcoesLattes',
		{
			templateUrl: 'view/opcoesLattes.html',
			controller: 'lattesCtrl.ui'
		});
	$routeProvider.otherwise({redirectTo:'/lattes'});
});