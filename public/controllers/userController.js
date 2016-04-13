(function(){
    "user strict";


    angular
        .module('BlogApp',[])
        .controller('UserController',UserController);

    UserController.$ingector = ['$scope'];

    function UserController($scope){

    }

}());