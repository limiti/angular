(function(){
    'use strict';


    angular
        .module('BlogApp')
        .controller('ContactUsController', ContactUsController);

    ContactUsController.$injector = ['$scope'];

    function ContactUsController($scope){
        console.log('init Contact');
    }

}());