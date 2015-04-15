require.config({
    baseUrl: '/AMD/app/'
});
require(['jquery', 'angular', 'angular-route', 'angular-resource',
    'main', 'routes'], function ($, angular, angularRoute, angularResource, angularUiBootstrap, application, routes) {
    $(function () {
        angular.bootstrap(document, ['application']);
    });
});
//# sourceMappingURL=requireMain.js.map