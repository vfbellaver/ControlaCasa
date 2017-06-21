/**
 * Created by vfbeL on 17/05/2017.
 */

angular.module("controlacasa").controller("agendaController",function ($interval,$scope,agendaAPIService,$location) {
    $scope.listaDeAgendas = [];
    $scope.salvou = false;
    $scope.erroaosalvar = false;
    $scope.editAgenda = function (agenda) {
        $location.url("/novaAgenda/"+agenda.idEvento)
    }

    $scope.deleteAgenda = function (id) {
        agendaAPIService.deletarAgenda(id).then(function (dados) {
            $scope.mensagem = "Agenda delegada com sucesso!"
            $scope.salvou = true;
            $interval(function () {
                $scope.salvou = false;
                listarAgendas();
            }, 4000,1);

            // $location.url("/listarAgenda")
        },function (err) {
            $scope.mensagem = "Erro ao deletar agenda!"
            $scope.erroaosalvar = true;
            $interval(function () {
                $scope.erroaosalvar = false;
                $location.url("/listarAgenda")
            }, 4000,1);
        });
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



    listarAgendas();
});


