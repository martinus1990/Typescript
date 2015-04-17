/// <reference path="./lib/scripts/angular.d.ts" />
define(["require", "exports", './home/controller/HomeController', 'angular'], function (require, exports, home, angular) {
    var application = angular.module('application', ['ngRoute', 'ngResource']);
    application.config(function ($routeProvider) {
        $routeProvider.
            when('/myPage', { controller: home, templateUrl: home.partialUrl }).
            otherwise({ redirectTo: '/myPage' });
    });
    return application;
});
//# sourceMappingURL=application.js.map