var model = {
    user: "olgasan",
    items:[
        {
            action: "Buy flowers",
            done: true
        },
        {
            action: "Get Shoes",
            done: false
        },
        {
            action: "Get Tickets",
            done: true
        }
    ]
};

var toDoApp = angular.module("toDoApp", []);

toDoApp.filter("checkedItems", function(){
   return function(items, showComplete){
       var resultArray = [];
       angular.forEach(items, function(item){
           if (!item.done || showComplete){
               resultArray.push(item);
           }
       });
       return resultArray;
   }
});

toDoApp.controller("ToDoCntrl", function($scope){
    $scope.toDo = model;

    $scope.incompleteCount = function(){
        var count = 0;
        angular.forEach($scope.toDo.items, function(item){
            if (!item.done){
                count++;
            }
        });
        return count;
    };

    $scope.noPendingTasks = function(){
        return $scope.incompleteCount()==0;
    };

    $scope.warningLevel = function(){
        return $scope.incompleteCount() > 2 ? "label-warning" : "label-default";
    };

    $scope.addItem = function(itemText){
        $scope.toDo.items.push({
            action: itemText,
            done: false
        });
    }
});