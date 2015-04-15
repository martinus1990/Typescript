import application = require('./main');
import home = require('./home/controller/HomeController');

application.config(function ($routeProvider) {
    $routeProvider.
        when('/myPage', { controller: home.HomeController, templateUrl: home.HomeController.partialUrl }).
        otherwise({ redirectTo: '/myPage' });
});