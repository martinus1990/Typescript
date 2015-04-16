/// <reference path="../../../vendor/require.d.ts" />
import bController = require('../../common/controller/BaseController');
import bScope = require('../../common/model/BaseScope');

interface IHomeScope extends bScope{
    message:string
    home:any
}

export class HomeController extends bController{
    static partialUrl:string = "./home/views/partial.html"
    
    constructor(private $scope: IHomeScope) {
       super('homeController',$scope);
       $scope.ctrl = this;
    }
}

