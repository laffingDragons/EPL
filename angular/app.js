// intailizing module
var myApp = angular.module("myEpl",['ngRoute']);
                  
// intailizing controller for getting json data
myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);





        myApp.controller('myController',['$http',function($http) {

  //create a context
  var main = this;
  this.name ;
  this.rounds= [];
  this.matches = [];
  
  

this.baseUrl = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";


  this.loadData = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.name = response.data.name;
          console.log(main.name);
          main.rounds = response.data.rounds;
          console.log(main.rounds);
          main.matches = response.data.rounds[0].matches;

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });

  }// end load all blogs
   this.loadData();
        }])