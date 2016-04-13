(function(){
    'use strict';

    angular
        .module('BlogApp')
        .controller('HomeController',HomeController);

    HomeController.$inject = ['$scope','$http','PostsService','ngDialog'];

    function HomeController($scope ,$http, PostsService,ngDialog){
        $scope.pageTitle = 'Home';

        $scope.postsInfo = {
            postsLimit: 5,
            postsCount:0
        };

        PostsService
            .getPosts()
            .then(function(responce){

                $scope.posts = responce.data;

                $scope.postsInfo.postsCount = responce.data.length;

            });

        $scope.addNewPost = function(collectionPostData){

            var resultPush =  $scope.posts.push({
                id:$scope.postsInfo.postsCount+1,
                name:collectionPostData.name,
                description:collectionPostData.description
            });

            $scope.postsInfo.postsCount++;


            if(resultPush){

                collectionPostData.name = '';
                collectionPostData.description = '';
            }

        };

        $scope.deletePost = function(post){
            var currentItemDelete = $scope.posts.indexOf(post);
            $scope.posts.splice(currentItemDelete,1);
        };

        $scope.editPost = function(post){

            /*
            * @Open Dialog
            */
            var postData = $scope.$new();
            postData.post = post;
            ngDialog.open({
                template:'/public/views/modals/post/edit.post.html',
                scope: postData
            });


            $scope.saveNewData = function(post, updateData){

                if(updateData.name){
                    post.name = updateData.name;
                    post.description = updateData.description;

                    ngDialog.close({
                        preCloseCallback:function(event){
                            console.log(event);
                        }
                    });
                }
            }
        };


        $scope.showDialogUserPostLike = function(post){

            /*
            * @create clear exemplar scope
            */
            var scope = $scope.$new();
            scope.usersLikePost = post.like.userLike;
            scope.postName = post.name;

            ngDialog.open({
                template:'/public/views/modals/post/user.like.post.html',
                scope:scope
           });
        };

        $scope.loadMorePosts = function(){
            $scope.postsInfo.postsLimit += 5;
        };


    }

}());