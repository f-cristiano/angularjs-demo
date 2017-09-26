'use strict';

angular.module('Ub.Module.HeavyWork').controller('UbModuleHeavyWorkController',['$scope','UbModuleHeavyWorkService',function ($scope, UbModuleHeavyWorkService) {

    $scope.work = {
        ready  : true ,
        isBroken: false,
        isCompleted: false,
        status : 'Ready to work',
        init: function () {
            $scope.work.ready = true;
            $scope.work.isBroken = false ;
            $scope.work.isCompleted = false ;
        }
    };
    $scope.work.init();

    $scope.pushMe = function () {

        $scope.work.init();
        $scope.work.ready = false ;
        $scope.work.status = 'Work harder...';

        var promise = UbModuleHeavyWorkService.longRun();

        promise.then(function (message) {
            $scope.work.isCompleted = true ;
            $scope.work.status = message ;
        });

        promise.catch(function (message){
            $scope.work.isBroken = true ;
            $scope.work.status = message ;
        });

        promise.finally(function () {
            $scope.work.ready = true ;
        })
    }

}]);