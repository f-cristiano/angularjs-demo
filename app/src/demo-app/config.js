'use strict';

angular.module('DemoApp.configs')
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'src/modules/home/view.html'
        });


        $routeProvider.when('/todo', {
            templateUrl: 'src/modules/todo/view.html',
            controller: 'UbModuleTodoController'
        });

        $routeProvider.when('/model', {
            templateUrl: 'src/modules/model/view.html',
            controller: 'UbModuleModelController'
        });

        $routeProvider.when('/heavy-work', {
            templateUrl: 'src/modules/heavy-work/view.html',
            controller: 'UbModuleHeavyWorkController'
        });

        $routeProvider.otherwise({ redirectTo: '/home' });

    }]);