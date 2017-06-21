/**
 * Created by vfbeL on 03/05/2017.
 */
angular.module("controlacasa").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"view/home/home.html"
    });

    $routeProvider.when("/listarAgenda",{
        templateUrl:"view/listagem/listarAgenda.html",
        controller:"agendaController"
    });
    $routeProvider.when("/novaAgenda/:id",{
        templateUrl:"view/agendar/novaAgenda.html",
        controller:"editaAgendaController"
    });
}]);