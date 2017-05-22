/**
 * Created by vfbeL on 17/05/2017.
 */

angular.module("controlacasa").controller("agendaController",function ($scope) {
    $scope.listaDeAgendas = [];

    $scope.cadastrarAgenda = function (agenda) {
        alunoAPIService.salvarAluno(agenda).then(function (dados) {
            alert("Agenda salva com sucesso");
            $location.url("/listarAlunos")
        },function (err) {
            alert("Deu erro ao Agendar");
        });
    }
    $scope.imprimirDataEHorario = function (d) {
        alert(d.data)
    }

    var listarAgendas = function () {
        var sucesso = function (dados) {
            $scope.listaDeAgendas = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar Agenda"+err)
        };
        agendaAPIService.listarAgenda().then(sucesso,erro);
    }
});


