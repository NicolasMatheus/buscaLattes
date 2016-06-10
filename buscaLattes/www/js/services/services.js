angular.module('lattes.services', [])
.factory('Salve', function() {

	var archive = { idProfessor: "" };
	var url = {requestNome: "" , requestName: ""};
	return archive, url;
});