angular.module('lattes.controllers', [])
.controller('ProfessoresCtrl', function($scope, $http, $stateParams, Salve) {
    var carregarProfessores = function () {

        const URL = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/professores.json";
        const url = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/professores.json";

        $http.get(URL)
          .success(function (data) {
            $scope.prof = data;
        })
        .error(function(erro) {
            $http.get(url)
              .success(function (data) {
                $scope.prof = data;
            });
        });
    };
    $scope.$on('$ionicView.enter', function() {
        carregarProfessores();
    });
})
.controller('ProfessoreCtrl', function($scope, $http, $stateParams, Salve) {
    var pegarJson = function (){

        $scope.nomeProfessor = $stateParams.nome;
        
        var idProfessor = $stateParams.id;
        
        Salve.idProfessor = idProfessor;
        
        const requestNome = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".json";
        const requestName = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor + ".json";
        
        Salve.requestNome = requestNome;
        Salve.requestName = requestName;
        
        const requestImagem = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";
        const requestPicture = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";

        $http.get(requestPicture,requestImagem)
            .success(function (data) {
                $scope.picProfessor = requestPicture;
        });
    };
    $scope.$on('$ionicView.enter', function() {
        pegarJson();
    });
})
.controller('CurriculoCtrl', function($scope, $http, $stateParams, Salve) {
    
    $scope.choice = true;
    $scope.esquema = Salve.idProfessor;
    
    const requestName = Salve.requestName;
    const requestNome = Salve.requestNome;

    console.log('Request Nome: ' + requestNome);
    console.log('Request Name: ' + requestName);

    $http.get(requestName, requestNome)
        .success(function(data) {
            $scope.select = data;
    });

 // $scope.$on('$ionicView.enter', function() {
     // $scope.esquema = Salve.dados;
     // console.log(Salve.dados);
  // }); 
});
