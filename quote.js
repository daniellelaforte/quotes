angular.module("bear", []);



angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.quotes = [];
    $scope.whatWasDeleted = {};

    var array1 = [{quote: "The greatness of a nation and its moral progress can be judged by the way its animals are treated.", author: "Mahatma Ghandi", rating: [], avgrating: 0}, {quote: "Life's Most Persistent Question Is: What Are You Doing For Others?", author: "Martin Luther King, Jr.", rating: [], avgrating: 0.1}]
    var beforearray;
    var afterarray;
	localStorage.setItem(beforearray, JSON.stringify(array1));

    afterarray = localStorage.getItem(beforearray);
    afterarray = JSON.parse(afterarray)

    $scope.quotes = afterarray;

    $scope.addQuote = function() {
    	$scope.addquote = "addquote";	        	  

    }
    $scope.randomQuote = function() {
        $scope.backlight = "backlight"; 
        $scope.frontlight = "frontlight";  
        var randomindex = Math.floor(Math.random()*$scope.quotes.length)
        $scope.random = $scope.quotes[randomindex].quote + "by "+ $scope.quotes[randomindex].author; 


    }

    $scope.removeRandom = function() {
        $scope.backlight = "nothing"; 
        $scope.frontlight = "nothing";                 

    }

    $scope.undo = function() {
        $scope.backlight = "nothing"; 
        $scope.frontlight = "nothing"; 

        if (_.isEmpty($scope.whatWasDeleted)){
            
        }

        else {
                //$scope.quotes.push($scope.whatWasDeleted)
                $scope.quotes.splice($scope.keeptrackofindex, 0, $scope.whatWasDeleted); 
                $scope.quotes.sort(function(argA, argB){

            if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
                return 1
                }
            else if ( argA.avgrating < argB.avgrating ) {
                return -1
            }
            else if ( argA.avgrating === argB.avgrating ) {
                return 0
            }
        })  
          $scope.whatWasDeleted = {}         
            }
    }
   

    $scope.closeQuote = function() {
    	$scope.addquote = "nothing";
		        	  
    }

     $scope.Auth = function(index) {
        $scope.authorz = $scope.quotes[index].author;
                      
    }

    $scope.All = function(index) {
        $scope.authorz = null;
                      
    }

    $scope.Submit = function() {
		$scope.quotes.push({quote: $scope.quotes.quote, author: $scope.quotes.author, rating: [], avgrating: 0}); 
		$scope.addquote = "nothing";
         $scope.quotes.sort(function(argA, argB){

            if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
                return 1
                }
            else if ( argA.avgrating < argB.avgrating ) {
                return -1
            }
            else if ( argA.avgrating === argB.avgrating ) {
                return 0
            }
        })  
        console.log($scope.quotes)

    }
    $scope.Star1 = function(index) {
       $scope.quotes[index].rating.push(1);
        var sum = $scope.quotes[index].rating.reduce(function(a,b) {
        return a + b;
        });
        var avg = sum/($scope.quotes[index].rating.length)
        $scope.quotes[index].avgrating = avg;

        $scope.quotes.sort(function(argA, argB){

     if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
        return 1
    }
     else if ( argA.avgrating < argB.avgrating ) {
         return -1
    }
     else if ( argA.avgrating === argB.avgrating ) {
         return 0
    }
        })
       
                      
    }
    $scope.Star2 = function(index) {
         $scope.quotes[index].rating.push(2);

         var sum = $scope.quotes[index].rating.reduce(function(a,b) {
        return a + b;
        });
        var avg = sum/($scope.quotes[index].rating.length)
        $scope.quotes[index].avgrating = avg;

               $scope.quotes.sort(function(argA, argB){

     if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
        return 1
    }
     else if ( argA.avgrating < argB.avgrating ) {
         return -1
    }
     else if ( argA.avgrating === argB.avgrating ) {
         return 0
    }
        })
                      
    }
    $scope.Star3 = function(index) {
        $scope.quotes[index].rating.push(3);

        var sum = $scope.quotes[index].rating.reduce(function(a,b) {
        return a + b;
        });
        var avg = sum/($scope.quotes[index].rating.length)
        $scope.quotes[index].avgrating = avg;

               $scope.quotes.sort(function(argA, argB){

  if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
        return 1
    }
     else if ( argA.avgrating < argB.avgrating ) {
         return -1
    }
     else if ( argA.avgrating === argB.avgrating ) {
         return 0
    }
        })
                      
    }
    $scope.Star4 = function(index) {
        $scope.quotes[index].rating.push(4);

        var sum = $scope.quotes[index].rating.reduce(function(a,b) {
        return a + b;
        });
        var avg = sum/($scope.quotes[index].rating.length)
        $scope.quotes[index].avgrating = avg;
               $scope.quotes.sort(function(argA, argB){

    if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
        return 1
    }
     else if ( argA.avgrating < argB.avgrating ) {
         return -1
    }
     else if ( argA.avgrating === argB.avgrating ) {
         return 0
    }
        })
                      
    }
    $scope.Star5 = function(index) {
        $scope.quotes[index].rating.push(5);

        var sum = $scope.quotes[index].rating.reduce(function(a,b) {
        return a + b;
        });
        var avg = sum/($scope.quotes[index].rating.length)
        $scope.quotes[index].avgrating = avg;

               $scope.quotes.sort(function(argA, argB){

    if ( argA.avgrating > argB.avgrating ) {
         // if a sort function returns a positive number, then argA should be sorted before argB
        return 1
    }
     else if ( argA.avgrating < argB.avgrating ) {
         return -1
    }
     else if ( argA.avgrating === argB.avgrating ) {
         return 0
    }
        })

    console.log($scope.quotes)
                      
    }

  $scope.Delete = function(index) {
     $scope.whatWasDeleted = $scope.quotes[index];
     $scope.keeptrackofindex = index;
      $scope.quotes.splice(index, 1)
      console.log($scope.whatWasDeleted)
      
      
                      
    }


}]
);