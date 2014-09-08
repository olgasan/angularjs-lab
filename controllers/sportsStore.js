angular.module('sportsStore').controller('sportsStoreCntrl', function($scope){
    $scope.data = {
        products: [
            {name:"sksk1", category: "category 1", price:100},
            {name:"sksk2", description:"ssl lsls ls", category: "category 1", price:100},
            {name:"sksk3", description:"ssl lsls ls", category: "category 2", price:100},
            {name:"sksk4", description:"ssl lsls ls", category: "category 2", price:100}
        ]
    }
});