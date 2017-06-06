/**
 * Created by vfbeL on 05/06/2017.
 */
angular.module("controlacasa").filter("statusEvento",function () {
    return function (status) {
        return (status?"Processado":"Não processado");
    }
});