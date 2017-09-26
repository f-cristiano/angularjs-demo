'use strict';

angular.module('DemoApp', [
    'ng',
    'ngRoute',
    'DemoApp.configs',
    'Ub.Module.Todo',
    'Ub.Module.Model',
    'Ub.Module.HeavyWork'
]).run([ function () {}]);

angular.module('DemoApp.configs', []);