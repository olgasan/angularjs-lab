angular.module('sportsStore')
    .constant('productListActiveClass','btn-primary')
    .controller('productListCntrl', function($scope, $filter, productListActiveClass){

        var selectedCategory = null;
        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || selectedCategory == product.category;
        };

        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? productListActiveClass : "";
        }
    });