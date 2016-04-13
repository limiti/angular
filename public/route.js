(function () {
    'use strict';

    angular
        .module('BlogApp')
        .config(Routes);

    Routes.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];

    function Routes($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.html5Mode({
           // enabled: true
        });

        /* if undefined url */

        $stateProvider
            .state('home' , {
                url: '/',
                templateUrl:'public/views/home.html',
                controller: 'HomeController'
            })
            .state('contact-us',{
                url:'/contact-us',
                templateUrl: 'public/views/contact-us.html',
                controller: 'ContactUsController'

            })
            .state('user',{
                url:'/user:id',
                templateUrl:'public/views/user.html',
                controller:'UserController'
            });




        $urlRouterProvider.otherwise('/');

    }

}());