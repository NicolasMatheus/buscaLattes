angular.module('lattes.config', [])
/*  appropriate CORS headers globally

.config(function($httpProvider)
{
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
})
 appropriate CORS headers globally*/

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('app',{
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'ProfessoresCtrl'
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })
    .state('app.about', {
        url: '/about',
        views:{
            'menuContent':{
                templateUrl: 'templates/about.html',
                controller: 'ProfessoresCtrl'
            }
        }
    })
    .state('app.professores', {
        url: '/professores',
        views: {
            'menuContent':{
                templateUrl: 'templates/professores.html',
                controller: 'ProfessoresCtrl'
            }
        }
    })
    .state('app.dg', {
    	url : '/dadosgerais',
    	views : {
    		'menuContent' : {
    			templateUrl : 'templates/dadosgerais.html',
    			controller : 'DadosCtrl'
    		}
    	}
    })
    .state('app.fa', {
    	url : '/formacaoacademica',
    	views : {
    		'menuContent' : {
    			templateUrl : 'templates/formacaoacademica.html',
    			controller : 'DadosCtrl'
    		}
    	}
    })
    .state('app.ap', {
    	url : '/atuacoesproficionais',
    	views : {
    		'menuContent' : {
    			templateUrl : 'templates/atuacoesprofissionais.html',
    			controller : 'DadosCtrl'
    		}
    	}
    })
    .state('app.at', {
        url : '/areadeatuacao',
        views : {
            'menuContent' : {
                templateUrl : 'templates/areadeatuacao.html',
                controller : 'DadosCtrl'
            }
        }
    })
    .state('app.pb', {
        url : '/producaobibiografica',
        views : {
            'menuContent' : {
                templateUrl : 'templates/producaobibliografica.html',
                controller : 'DadosCtrl'
            }
        }
    })
    .state('app.single', {
        url: '/professores/:id/:nome',
        views: {
            'menuContent': {
                templateUrl: 'templates/professor.html',
                controller: 'ProfessoreCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
