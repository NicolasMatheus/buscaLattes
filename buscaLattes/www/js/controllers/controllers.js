angular.module('lattes.controllers', [])

.controller('ProfessoresCtrl', function($scope, $http, $stateParams)
{
  var carregarProfessores = function ()
  {
          //$http.get("http://10.101.0.251:8085/Lattes1/json/professores.json").success(function (data)
          $http.get("http://200.129.176.42:8085/Lattes1/json/professores.json")
            .success(function (data)
            {
                  $scope.prof = data;
            })
            .error(function(erro)
            {
              $http.get("http://10.101.0.251:8085/Lattes1/json/professores.json")
                .success(function (data)
                {
                  $scope.prof = data;
                });
            });
  };

  $scope.$on('$ionicView.enter', function()
  {
    carregarProfessores();
  });
})
.controller('ProfessoreCtrl', function($scope, $http, $stateParams)
{
  //console.log(select(name));
var pegarJson = function ()
          {
            var n = $stateParams.id;

            var REC = "http://200.129.176.42:8085/Lattes1/json/" + n+ ".json";
            var rec = "http://10.101.0.251:8085/Lattes1/json/" + n + ".json";
                  //$http.get("http://10.101.0.251:8085/Lattes1/json/" + name.id + ".json").success(function (data)
                  console.log(REC);
                  console.log(rec);
                  $http.get(REC)
                    .success(function (data)
                    {
                          $scope.selectedNome = data;
                    })
                    .error(function(erro)
                    {
                      $http.get(rec)
                        .success(function (data)
                        {
                          $scope.selectedNome = data;
                        });
                    });
          };

  $scope.$on('$ionicView.enter', function()
    {
      pegarJson();
    });
});
