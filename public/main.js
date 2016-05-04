var myApp = angular.module('streamApp',[]);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

  $scope.streamTweets = function(){
    console.log("hej2");
    var data = {
      'filter': 'awdawdawd'
    };
    $http.post('/twitterstream', data).success(function(data, status){
      //console.log("hej" + data);
    });
  };

}]);
