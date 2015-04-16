/// <reference path="../vendor/angular.d.ts" />
/// <reference path="../vendor/angular-route.d.ts" />
/// <reference path="../vendor/require.d.ts" />
import application = require('./main');
import home = require('./home/controller/HomeController');

application.config(function ($routeProvider:ng) {
    $routeProvider.
        when('/myPage', { controller: home.HomeController, templateUrl: home.HomeController.partialUrl }).
        otherwise({ redirectTo: '/myPage' });
});