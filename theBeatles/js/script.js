angular.module("lattes", ["ui.bootstrap"]);
angular.module("lattes", ["ui.bootstrap"]).controller("lattesCtrl", function ($scope, $http)
{
  $scope.isCollapsed = true;
  //$http.get("http://200.129.176.42:8085/Lattes1/json/professores.json")
  $http.get("js/professores.json")
  .success( function (data)
  {
    $scope.prof = data;
    var url = data.url;
    $scope.select = function ()
    {
      //var pc = $scope.prof.url
      $http.get(url).success( function (data11)
      {
        $scope.selected_prof = data11;
      }).
      error(function (data11) {
          alert("ERRO 2!!!!");
      });
    };
  });
  // $scope.nomes =
  // [
  //   {
  //     nome:'Claudio de Castro Monteiro',
  //     id:'ccm',
  //     url:'tampletes/ccm.html'
  //   },
  //   {
  //     nome:'Carlos Henrique Corrêa Tolentino',
  //     id:'chcl',
  //     url:'tampletes/chcl.html'
  //   },
  //   {
  //     nome:'Fagno Alves Fonseca',
  //     id:'faf',
  //     url:'tampletes/faf.html'
  //   },
  //   {
  //     nome:'Fernando Jorge Ebrahim Lima e Silva',
  //     id:'fjels',
  //     url:'tampletes/fjels.html'
  //   },
  //   {
  //     nome:'Francisco Willians Makoto Plácido Hirano',
  //     id:'fwmph',
  //     url:'tampletes/fwmph.html'
  //   },
  //   {
  //     nome:'Gerson Pesente Focking',
  //     id:'gpf',
  //     url:'tampletes/gpf.html'
  //   },
  //   {
  //     nome:'Helder Cleber Almeida Pereira',
  //     id:'hcap',
  //     url:'tampletes/hcap.html'
  //   },
  //   {
  //     nome:'Liliane Carvalho Félix Cavalcante',
  //     id:'lcfc',
  //     url:'tampletes/lcfc.html'
  //   },
  //   {
  //     nome:'Leonardo Jose de Sales',
  //     id:'ljs',
  //     url:'tampletes/ljs.html'
  //   },
  //   {
  //     nome:'Manoel Campos da Silva Filho',
  //     id:'mcsf',
  //     url:'tampletes/mcsf.html'
  //   },
  //   {
  //     nome:'Márlio Kleber Venâncio Gomes',
  //     id:'mkvg',
  //     url:'tampletes/mkvg.html'
  //   },
  //   {
  //     nome:'Mauro Lima de Boni',
  //     id:'mlb',
  //     url:'tampletes/mlb.html'
  //   },
  //   {
  //     nome:'Marcelo Mendes Pedroza',
  //     id:'mmp',
  //     url:'tampletes/mmp.html'
  //   },
  //   {
  //     nome:'Marinaldo Oliveira Santos',
  //     id:'mos',
  //     url:'tampletes/mos.html'
  //   },
  //   {
  //     nome:'Napoleão Póvoa Ribeiro Filho',
  //     id:'nprf',
  //     url:'tampletes/nprf.html'
  //   },
  //   {
  //     nome:'Paulo dos Santos Batista',
  //     id:'psb',
  //     url:'tampletes/psb.html'
  //   },
  //   {
  //     nome:'Paula Sabrinne Caldeira Mota Varão',
  //     id:'pscmv',
  //     url:'tampletes/pscmv.html'
  //   },
  //   {
  //     nome:'Roberta Alehandra Prados Nobre',
  //     id:'rapn',
  //     url:'tampletes/rapn.html'
  //   },
  //   {
  //     nome:'Rodrigo Luiz dos Santos',
  //     id:'rls',
  //     url:'tampletes/rls.html'
  //   },
  //   {
  //     nome:'Simone Dutra Martins Guarda',
  //     id:'sdmg',
  //     url:'tampletes/sdmg.html'
  //   },
  //   {
  //     nome:'Vinicius Istofel Oliveira',
  //     id:'vio',
  //     url:'tampletes/vio.html'
  //   },
  //   {
  //     nome:'Vinícius Oliveira Costa',
  //     id:'voc',
  //     url:'tampletes/voc.html'
  //   },
  //   {
  //     nome:'Wilson Wolf Costa',
  //     id:'wwc',
  //     url:'tampletes/wwc.html'
  //   }
  // ];
});
