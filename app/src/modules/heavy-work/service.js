//
'use strict';

angular.module('Ub.Module.HeavyWork').factory('UbModuleHeavyWorkService',['$q',function ($q) {
    return {
        longRun : function() {

            var deferred = $q.defer();

            setTimeout(function(){
                if( Math.random() > 0.5 ) deferred.resolve("Time to having fun!");
                else deferred.reject("Not enough!... try again");
            },1000);

            return deferred.promise;
        }
    };

}]);