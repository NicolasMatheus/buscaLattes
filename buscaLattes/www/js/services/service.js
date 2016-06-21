angular.module('lattes.service', [])
.factory('DadosCurriculo', function() {
	var archive = { idProfessor : '' };
	var url = { requestNome : '' , requestName : '' };
	return { archive , url };
});
