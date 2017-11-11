// intailizing module
var myApp=angular.module("myEpl",['ngRoute']);
                  
// intailizing controller for getting json data
        myApp.controller("myController",['$http', function($http){
            
            var main=this;
            //create context
            this.name;
            this.rounds=[];
            this.matches=[];
            
            this.baseUrl='https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json'
            
            // function for getting data
            this.stats= function(){
                
                $http({
                    method: 'GET',
                    url: main.baseUrl
                }).then(function successCallback(response){
                    main.name=response.data.name;
                    console.log(main.name);
                    main.rounds=response.data.rounds;
                    console.log(main.rounds);
                    main.matches=response.data.rounds[0].matches;
                },
                       function errorCallback(response) {
                  alert("some error occurred. Check the console.");
                  console.log(response);
                });
              }//end of stats function
            this.stats();
        }]);