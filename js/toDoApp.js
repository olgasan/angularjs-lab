var model = {
    user: "olgasan",
    items:[
        {
            action: "Buy flowers",
            done: false
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
});