/**
 * Created by vfbeL on 05/06/2017.
 */

angular.module("controlacasa").controller("editaAgendaController",function ($interval, $scope,agendaAPIService,$location,$routeParams) {
    $scope.salvou = false;
    $scope.erroaosalvar = false;
    var carregarDados = function () {
        var id = $routeParams.id;
        if(id == 0){
            $scope.agenda = {"ventilador":false,"tv":false,"luzQuarto":false,"luzSala":false};
        }else{
            agendaAPIService.buscarEventoPorid(id).then(function (dados) {
                $scope.agenda = dados.data;
            },function (err) {
                alert("Deu erro ao atualizar"+err);
            });
        }

    }
    
    $scope.cadastrarAgenda = function (agenda) {
        if(agenda.idEvento){
            agendaAPIService.atualizarAgenda(agenda).then(function (dados) {
                $scope.mensagem = "Agenda atualizada com sucesso!"
                $scope.salvou = true;
                $interval(function () {
                $scope.salvou = false;
                $location.url("/listarAgenda")
                }, 4000,1);
            },function (err) {
                $scope.mensagem = "Erro ao atualizar agenda!"
                $scope.erroaosalvar = true;
                $interval(function () {
                $scope.erroaosalvar = false;
                $location.url("/listarAgenda")
                }, 4000,1);
            });
        }else{
            agendaAPIService.salvarAgenda(agenda).then(function (dados) {
                $scope.mensagem = "Agenda inserida com sucesso!"
                $scope.salvou = true;
                $interval(function () {
                $scope.salvou = false;
                $location.url("/listarAgenda")
                }, 4000,1);
            },function (err) {
                if(err.status == 500){
                    $scope.mensagem = "Não é possivel agendar com data e horários iguais!"
                    $scope.erroaosalvar = true;
                    $interval(function () {
                        $scope.erroaosalvar = false;
                        $location.url("/listarAgenda")
                    }, 4000,1);
                }
            });
        }
        $scope.agenda = {};
    }

    carregarDados();
});


