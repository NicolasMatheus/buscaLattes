angular.module('lattes.config', [])

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider

    .state('app',
    {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'LattesCtrl'
  })

  .state('app.search',
  {
    url: '/search',
    views: {
      'menuContent':
      {
        templateUrl: 'templates/search.html'
      }
    }
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
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single',
  {
    url: '/playlists/:playlistId',
    views: {
      'menuContent':
      {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
