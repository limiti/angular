(function(){
    "use strict";

    angular
        .module('BlogApp')
        .factory('PostsService',PostsService);

    PostsService.$inject = ['$http'];

    function PostsService($http){

        return {
            getPosts: getPosts
        }

        function getPosts(){

            return $http.get('API/blogData.json');
        }
    }

}());