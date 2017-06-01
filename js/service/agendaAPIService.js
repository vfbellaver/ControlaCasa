/**
 * Created by vfbeL on 17/05/2017.
 */
angular.module("controlacasa").factory("agendaAPIService",function ($http) {

    var _salvarAgenda = function (dados) {
        return $http({
            method:"POST",
            url:"http://localhost:8084/WSRestControlaCasa/evento",
            data:dados
        });
    };

    var _listarAgenda = function () {
        return $http({
            method: "GET",
            url:"http://localhost:8084/WSRestControlaCasa/evento",
        });
    };

    return{
        listarAgenda: _listarAgenda,
        salvarAgenda: _salvarAgenda
    }
})