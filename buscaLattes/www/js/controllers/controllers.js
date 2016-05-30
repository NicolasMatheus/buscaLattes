angular.module('lattes.controllers', [])

.controller('ProfessoresCtrl', function($scope, $http, $stateParams)
{
  var carregarProfessores = function ()
  {
          var URL = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/professores.json";
          var url = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/professores.json";

              console.log(URL);
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
var pegarJson = function (){

    $scope.choice = true;

            $scope.nomeProfessor = $stateParams.nome;
            var idProfessor = $stateParams.id;


            var requestNome = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".json";
            var requestName = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor + ".json";

            var requestImagem = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";
          var requestPicture = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";

            $http.get(requestName,requestPicture)
                    .success(function (data)
                    {
                        $scope.selected = data;
                        $scope.picProfessor = requestPicture;
                    })
                    .error(function(erro)
                    {
                      $http.get(requestNome,requestImagem)
                        .success(function (data)
                        {
                            $scope.selected = data;
                            $scope.picProfessor = requestImagem;
                        });
                    });
                    console.log(requestNome);
                    console.log(requestName);
          };

  $scope.$on('$ionicView.enter', function()
  {
    pegarJson();
  });
});
