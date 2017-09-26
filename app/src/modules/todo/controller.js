'use strict';

angular.module('Ub.Module.Todo').controller('UbModuleTodoController',['$scope','UbModuleTodoService',function ($scope, UbModuleTodoService) {

    $scope.todo = UbModuleTodoService ;

    $scope.selected = {
        item: false,
        select: function (item) {
            $scope.selected.item = item
        }
    } ;

    UbModuleTodoService.loadList();

}]);