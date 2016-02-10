angular.module('lattes.controllers', [])

.controller('ProfessoresCtrl', function($scope, $http, $stateParams)
{
  var carregarProfessores = function ()
  {
          var URL = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/professores.json";
          var url = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/professores.json";

          $http.get(URL)
            .success(function (data)
            {
                  $scope.prof = data;
            })
            .error(function(erro)
            {
              $http.get(url)
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
var pegarJson = function ()
          {
            $scope.k = $stateParams.nome;
            var n = $stateParams.id;


            var rec = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ n +"/"+ n +".json";
            var REC = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ n +"/"+ n + ".json";
                  // console.log(REC);
                  // console.log(rec);

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
