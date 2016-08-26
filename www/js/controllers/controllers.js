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
  $scope.id = {
    id_1 : false, id_2 : false, id_3 : false, id_4 : false,
    id_5 : false, id_6 : false, id_7 : false, id_8 : false,
    id_9 : false, id_10 : false, id_11 : false, id_12 : false,
    id_13 : false, id_14 : false, id_15 : false, id_16 : false,
    id_17 : false, id_18 : false, id_19 : false, id_20 : false,
    id_21 : false, id_22 : false, id_23 : false, id_24 : false,
    id_25 : false, id_26 : false, id_27 : false, id_28 : false,
    id_29 : false, id_30 : false, id_31 : false, id_32 : false,
    id_33 : false, id_34 : false, id_35 : false, id_36 : false,
    id_37 : false, id_38 : false, id_39 : false, id_40 : false
    //id_17 : false, id_18 : false, id_19 : false, id_20 : false
  };

	var requestNome = DadosCurriculo.requestNome;
	var requestName = DadosCurriculo.requestName;
	$http.get(requestName).success(function(data) {
		$scope.dadosCurriculo = data;
  });
  $http.get(requestNome).success(function(data) {
    $scope.dadosCurriculo = data;
  });
});
