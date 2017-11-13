myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'myController',
            // what is the alias of that controller.
        	controllerAs 	: 'epl'
        })
      
    
}]);