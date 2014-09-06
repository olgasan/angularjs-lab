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

    $scope.noPendingTasks = function()
    {
        return $scope.incompleteCount()==0;
    }
});