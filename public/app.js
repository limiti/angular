(function(){
    "use strict";

    angular
        .module('BlogApp', [
           'ui.router',
            'ngDialog'
        ])
        .run(InitApp);

    InitApp.$inject = ['$rootScope','$state'];

    function InitApp ($rootScope, $state){

    }

}());
