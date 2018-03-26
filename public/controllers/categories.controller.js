angular.module("kB")

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
  // $http.get('/categories').success(function(data){
  //   $scope.categories = data;
  // });

  $http({
      method: 'GET',
      url: '/categories'
   }).then(function (success){
     $scope.categories = success.data;
   },function (error){
     console.log('unable to fetch categories');
   });
}]);
