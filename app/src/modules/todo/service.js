//
'use strict';

angular.module('Ub.Module.Todo').factory('UbModuleTodoService',['$http',function ($http) {

    var TodoService =  {
        list : [],

        loadList : function() {
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/todos'
            }).then(function (response) {

                var list = [] ;
                for( var i = 0; i < 10; i++ ) {
                    list.push( response.data[i])
                }

                TodoService.list = list ;
            }).catch(function(response,status){
                console.error('Error STATUS: '+status);
                console.log(response)
            })
        }
    };

    return TodoService ;

}]);