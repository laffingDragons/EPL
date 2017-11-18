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
      .when('/match/:id1/:id2/:matchDate',{
            // location of the template
        	templateUrl		: 'views/matchDetails-view.html',
        	// Which controller it should use 
            controller 		: 'matchDetails',
            // what is the alias of that controller.
        	controllerAs 	: 'mD'
        })
    
}]);

myApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);