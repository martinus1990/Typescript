/// <reference path="../vendor/angular.d.ts" />

require.config({
    baseUrl: 'bower_components',

    paths: {
        'jquery': 'jquery/jquery.min',
        'angular': 'angular/angular.min',
        'angular-route': 'angular-route/angular-route.min',
        'angular-resource': 'angular-resource/angular-resource.min'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route':{
            exports: 'angular-route',
            deps:['angular']
        },
        'angular-resource':{
            exports: 'angular-resource',
            deps:['angular']
        }
    }
});

// TypeScript declarations useful for importing angular modules
declare module 'angular' {
    var angular: ng.IAngularStatic;
export = angular;
}
declare module 'angular-route' {
}
declare module 'angular-resource' {
}
declare module 'angular-ui-bootstrap' {
}

require(['angular','jquery','angular-route','angular-resource'], function(angular, $,$route,$resource){
    angular.module( 'demo', []);


    angular.element(document).ready(function() {
            angular.bootstrap(document, ['demo']);
        }
    );

});