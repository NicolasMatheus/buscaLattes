angular.module('lattes.config', [])

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider

    .state('app',
    {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'ProfessoresCtrl'
  })
  .state('app.home',
  {
      url: '/home',
      views:
      {
        'menuContent':
        {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('app.professores',
    {
      url: '/professores',
      views: {
        'menuContent':
        {
          templateUrl: 'templates/professores.html',
          controller: 'ProfessoresCtrl'
        }
      }
    })

  .state('app.single',
  {
    url: '/professores/:id',
    views: {
      'menuContent':
      {
        templateUrl: 'templates/professor.html',
        controller: 'ProfessoreCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
