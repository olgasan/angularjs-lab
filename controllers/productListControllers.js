angular.module('sportsStore')
    .controller('productListCntrl', function($scope, $filter){

        var selectedCategory = null;
        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || selectedCategory == product.category;
        };
    });