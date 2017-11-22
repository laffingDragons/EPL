myApp.controller("teams16",['$http','$location','$routeParams',function($http,$location,$routeParams){
    
    //creating context
    var main=this;
    
    // var for data
     this.code1 = $routeParams.code1 ;
    
    this.rounds=[];
    
     
    console.log(main.code1);
     

    
 var matchesPlayed=0;
    var wins=0;
    var loss=0;
    var draw=0;
    
    this.team15=function(data){
        
        main.rounds=data.rounds;
        
        
        for(var x in main.rounds){
            for(var y in main.rounds[x].matches){
               
               
        if (main.rounds[y].matches[x].team1.code === main.code1){
                matchesPlayed++; 
             main.name1 = main.rounds[y].matches[x].team1.name;
              if(main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2){
                        wins ++ ; 
                       
                      }

                      else if(main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2){
                        loss ++;
                       
                      }

                      else if(main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2){
                        draw ++;
                       
                      }
            
        
       
        
        }
           
           else if(main.rounds[y].matches[x].team2.code == main.code1){

                       main.name1 = main.rounds[y].matches[x].team2.name ;
                      
                       matchesPlayed++ ;

                    

                     
                      
                       if(main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2){
                        loss++ ; 
                        
                      }

                      else if(main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2){
                        wins++;
                        
                      }

                      else if(main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2){
                        draw++;
                   
                      }
           

                    } 
                    main.matches=matchesPlayed;
                    main.wins=wins;
                    main.loss=loss;
                    main.draw=draw;
                
               
            }
        }
    }
    
     //intailizing URL's
    
    this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
    
    //http function for getting data
             this.url1 = function(){
             $http({
                method:"GET",
                url:main.baseUrl1
              }).then(function successCallback(response){

                main.team15(response.data);
                //console.log(main.teamArray);
              },
                      function errorCallback(reason){
              alert("Some error occurred. Check the console.");
              })
            }

            this.url1() //call for first url
    
}])

