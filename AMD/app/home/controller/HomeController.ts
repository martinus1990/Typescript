import bController = require('../../common/controller/BaseController');
import bScope = require('../../common/model/BaseScope');

interface IHomeScope extends bScope{
    message:string
    home:any
}

class HomeController extends bController{
    static partialUrl:string = "/Typescript/app/home/views/partial.html";

    constructor(private $scope: IHomeScope) {
        super('homeController',$scope);
        $scope.ctrl = this;
    }
}

export = HomeController;

