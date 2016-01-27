angular.module('lattes.controllers', [])

.controller('LattesCtrl', function($scope, $ionicModal, $timeout, $http)
{

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  // $scope.loginData = {};

  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html',
  //{
  //  scope: $scope
  //}).then(function(modal)
  //{
  //  $scope.modal = modal;
  //});

  // Triggered in the login modal to close it
  //$scope.closeLogin = function()
  //{
  //  $scope.modal.hide();
  //};

  // Open the login modal
  //$scope.login = function()
  //{
    //$scope.modal.show();
  //};

  // Perform the login action when the user submits the login form
  //$scope.doLogin = function()
  //{
    //console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    //$timeout(function()
    //{
      //$scope.closeLogin();
    //}, 1000);
  //};
})

.controller('ProfessoresCtrl', function($scope, $http)
{

  var carregarProfessores = function ()
  {
          //$http.get("http://10.101.0.251:8085/Lattes1/json/professores.json").success(function (data)
          $http.get("http://200.129.176.42:8085/Lattes1/json/professores.json").success(function (data)
          //$http.get("js/professores2.json").success(function (data)
          {
                  $scope.prof = data;
          });
  };
  carregarProfessores();
   $scope.select = function (name)
   {
           var pegarJson = function ()
           {
                   //$http.get("http://10.101.0.251:8085/Lattes1/json/" + name.id + ".json").success(function (data)
                   //var path = "http://200.129.176.42:8085/Lattes1/json/" + name.id + ".json";
                   //$http.get(path).success(function (data)
                   $http.get("http://200.129.176.42:8085/Lattes1/json/" + name.id + ".json").success(function (data)
                   {
                           $scope.selectedNome = data;
                   });
           };
           pegarJson();
  };

})

.controller('ProfessorCtrl', function($scope, $stateParams) {});
