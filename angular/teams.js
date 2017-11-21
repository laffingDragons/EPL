myApp.controller("teams",['$http','$location','$routeParams',function($http,$location,$routeParams){
    
    //creating context
    var main=this;
    
    // var for data
    this.teamArray=[];
    this.dup=[];
    this.final=[];
    
    this.team15=function(data){
        
        main.rounds=data.rounds;
        
        for(var x in main.rounds){
            for(var y in main.rounds[x].matches){
               
            main.teamArray= _.map(main.rounds[x].matches[y].team1.name);
                main.dup= main.teamArray.join("");
                main.final= _.uniqBy(main.dup)
                console.log(main.final);
            
           /*     function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
                main.teamArray= .filter( onlyUnique );
                console.log(main.teamArray)  */
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