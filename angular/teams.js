myApp.controller("teams",['$http','$location','$routeParams',function($http,$location,$routeParams){
    
    //creating context
    var main=this;
    
    // var for data
    this.teamArray=[];
    
    this.team15=function(data){
        
        main.rounds=data.rounds;
        
        for(var x in main.rounds){
            for(var y in main.rounds[x].matches){
                
               function removeDuplicateNames() {
    var realArray = [];
    main.rounds[x].matches.team1.name.forEach(function(value,index) { 
           (realArray.indexOf(main.rounds[x].matches[y].team1.name[index]) == -1) ? realArray.push(main.rounds[x].matches[y].team1.name[index]): ' ';                //conditional statement
    });
}
                
                removeDuplicateNames();
                console.log(main.teamArray);
                
                
            }
        }
    }
    
     //intailizing URL's
    this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
    
    //http function for getting data
             this.url1 = function(){
             $http({
                method:"GET",
                url:main.baseUrl1
              }).then(function successCallback(response){

                main.team15(response.data);
                console.log(main.teamArray);
              },
                      function errorCallback(reason){
              alert("Some error occurred. Check the console.");
              })
            }

            this.url1() //call for first url
}])