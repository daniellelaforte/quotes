angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.quotes = [];
	

    $scope.addQuote = function() {
    	$scope.addquote = "addquote";	        	  

    }

    $scope.closeQuote = function() {
    	$scope.addquote = "nothing";
		        	  
    }

    $scope.Submit = function() {
		$scope.quotes.push({quote: $scope.quotes.quote, author: $scope.quotes.author}); 
		$scope.addquote = "nothing";

    }

}]
);