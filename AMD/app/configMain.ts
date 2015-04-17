require.config({
    baseUrl: 'app',

    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'angular': 'lib/angular/angular.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min'
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

require(
    [
        'angular',
        'jquery',
        'angular-route',
        'angular-resource',
        'application'
    ],
    (angular,application) => {
        'use strict';

        angular.element(document).ready(function() {
                angular.bootstrap(document, ['application']);
            }
        );
    }
);



