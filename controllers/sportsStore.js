angular.module('sportsStore').controller('sportsStoreCntrl', function($scope){
    $scope.data = {
        products: [
            {name:"sksks", category: "category 1", price:100},
            {name:"sksks", description:"ssl lsls ls", category: "category 1", price:100}
        ]
    }
    $scope.selectCategory = function(item)
    {

    }
});