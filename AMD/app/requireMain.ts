require.config({
    baseUrl: '/AMD/app/'
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

require(['jquery', 'angular', 'angular-route', 'angular-resource',
        'main', 'routes'],
    function ($: JQueryStatic, angular: ng.IAngularStatic, angularRoute, angularResource, angularUiBootstrap,
              application, routes) {
        $(function () {
            angular.bootstrap(document, ['application']);
        });
    });