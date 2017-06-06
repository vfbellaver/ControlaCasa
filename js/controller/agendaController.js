/**
 * Created by vfbeL on 17/05/2017.
 */

angular.module("controlacasa").controller("agendaController",function ($scope,agendaAPIService,$location) {
    $scope.listaDeAgendas = [];

    $scope.cadastrarAgenda = function (agenda) {
        if(agenda.id){
            agendaAPIService.atualizarAgenda(agenda).then(function (dados) {
                alert("Agenda atualizada com sucesso");
                $location.url("/listarAgenda")
            },function (err) {
                alert("Deu erro ao atualizar"+err);
            });
        }else{
            agendaAPIService.salvarAgenda(agenda).then(function (dados) {
                alert("Agenda salva com sucesso");
                $location.url("/listarAgenda")
            },function (err) {
                alert("Deu erro ao Agendar"+err);
            });
        }
        $scope.agenda = {};
    }

    $scope.imprimirDataEHorario = function (d) {
        alert(d.data)
    }

    $scope.editAgenda = function (agenda) {
        var copia = {}
        for (chave in agenda){
            copia[chave] = agenda[chave];
        };
        $scope.agenda=copia;
    }

    $scope.deleteAgenda = function (id) {
        agendaAPIService.deletarAgenda(id).then(function (dados) {
            alert("Evento deletado com sucesso");
            listarAgendas();
            // $location.url("/listarAgenda")
        },function (err) {
            alert("Deu erro ao Deletar"+err.status);
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


