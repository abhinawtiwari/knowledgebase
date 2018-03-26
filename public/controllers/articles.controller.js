angular.module("kB")

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){

  $http({
      method: 'GET',
      url: '/articles'
   }).then(function (success){
     $scope.articles = success.data;
   },function (error){
     console.log('unable to fetch articles');
   });
}])

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

  $http({
      method: 'GET',
      url: '/articles/category/'+$routeParams.category
   }).then(function (success){
     $scope.cat_articles = success.data;
     $scope.category = $routeParams.category;
   },function (error){
     console.log('unable to fetch articles from category');
   });

}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

  $http({
      method: 'GET',
      url: '/articles/'+$routeParams.id
   }).then(function (success){
     $scope.article = success.data;
   },function (error){
     console.log('unable to fetch articles details');
   });

  $scope.removeArticle = function(){
    // $http.delete('/articles/'+$routeParams.id).success(function(data){
    //   console.log(data);
    // });

    $http({
        method: 'DELETE',
        url: '/articles/'+$routeParams.id
     }).then(function (success){
       console.log(success.data);
     },function (error){
       console.log('unable to delete article');
     });

    $location.path('/articles');
  }
}])

.controller('ArticleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

  $http({
      method: 'GET',
      url: '/categories'
   }).then(function (success){
     $scope.categories = success.data;
   },function (error){
     console.log('unable to fetch categories');
   });

  $scope.addArticle = function(){
    var data = {
      title: $scope.title,
      body: $scope.body,
      category: $scope.category
    }

    $http.post('/articles', data)
   .then(
       function(response){
         console.log(response.status);
       },
       function(response){
         console.log(response.status);
       }
    );

    $location.path('/articles');
  }
}])

.controller('ArticleEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

  $http({
      method: 'GET',
      url: '/categories'
   }).then(function (success){
     $scope.categories = success.data;
   },function (error){
     console.log('unable to fetch categories');
   });

  $http({
      method: 'GET',
      url: '/articles/'+$routeParams.id
   }).then(function (success){
     $scope.article = success.data;
   },function (error){
     console.log('unable to fetch article');
   });

  $scope.updateArticle = function(){
    var data = {
      id: $routeParams.id,
      title: $scope.article.title,
      body: $scope.article.body,
      category: $scope.article.category
    }

    $http.put('/articles', data)
   .then(
       function(response){
         console.log(response.status);
       },
       function(response){
         console.log(response.status);
       }
    );

    $location.path('/articles');
  }
}]);
