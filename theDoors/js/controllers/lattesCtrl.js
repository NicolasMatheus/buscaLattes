angular.module("buscaLattes", []).controller("lattesCtrl", function($scope, $http)
{
        $scope.titulo = "Busca Lattes"
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
        $scope.aqui = false;
        $scope.mestreDosMagos = function ()
        {
                $scope.aqui = !$scope.aqui;
        };
});
