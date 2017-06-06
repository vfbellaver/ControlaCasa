/**
 * Created by vfbeL on 05/06/2017.
 */
angular.module("controlacasa").filter("ligadesliga",function () {
   return function (estado) {
       return (estado?"Ligado":"Desligado");
   }
});