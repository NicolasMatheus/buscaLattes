angular.module('starter.config', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.professores', {
      url: '/professores',
      views: {
        'menuContent': {
          templateUrl: 'templates/professores.html',
          controller: 'ProfessoresCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/professores/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'ProfessorCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/professores');
});
