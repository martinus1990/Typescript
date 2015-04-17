/// <reference path="../../lib/scripts/angular.d.ts" />
import bScope = require('../model/BaseScope');

interface IBaseController{
    name:string
}

class BaseController implements IBaseController{
    static $inject:string[] = ['$scope'];
     constructor(public name:string,public ctrlScope:bScope) {

    }
}

export = BaseController;