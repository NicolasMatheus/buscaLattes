angular.module('lattes.controllers', [])
.controller('ProfessoresCtrl', function($scope, $http, $stateParams) {
  var carregarProfessores = function () {
    const URL = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/professores.json";
    const url = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/professores.json";

    $http.get(URL).success(function (data) {
      $scope.prof = data;
    });
    $http.get(url).success(function (data) {
      $scope.prof = data;
    });
  };
  $scope.$on('$ionicView.enter', function() {
    carregarProfessores();
  });
})
.controller('ProfessoreCtrl', function($scope, $http, $stateParams, DadosCurriculo) {
  var pegarJson = function (){
    $scope.nomeProfessor = $stateParams.nome;
    var idProfessor = $stateParams.id;
    var requestNome = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".json";
    var requestName = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor + ".json";
    var requestImagem = "http://10.101.0.251:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";
    var requestPicture = "http://200.129.176.42:8085/Lattes1/json/buscaLattes/"+ idProfessor +"/"+ idProfessor +".gif";
		DadosCurriculo.requestNome = requestNome;
		DadosCurriculo.requestName = requestName;
    $http.get(requestPicture).success(function (data) {
      $scope.picProfessor = requestPicture;
    });
    $http.get(requestImagem).success(function(data) {
      $scope.picProfessor = requestPicture;
    });
  };
  $scope.$on('$ionicView.enter', function(){
    pegarJson();
  });
})
.controller('DadosCtrl', function($scope, $http, $stateParams, DadosCurriculo) {
  $scope.dg = {id_1 : false, id_2 : false, id_3 : false, id_4 : false};
	var requestNome = DadosCurriculo.requestNome;
	var requestName = DadosCurriculo.requestName;
	$http.get(requestName).success(function(data) {
		$scope.dadosCurriculo = data;
  });
  $http.get(requestNome).success(function(data) {
    $scope.dadosCurriculo = data;
  });
});
