import bController = require('../../common/controller/BaseController');
import bScope = require('../../common/model/BaseScope');
import angular = require("../../../vendor/angular");

interface IHomeScope extends bScope.BaseScope{
    message:string
    home:any
}

export class HomeController extends bController.BaseController{
    static $inject = ["$scope"];
    static partialUrl:string = "./home/views/partial.html"
    
    constructor(private $scope: IHomeScope) {
       super($scope);
       $scope.home = this;
    } 
}

