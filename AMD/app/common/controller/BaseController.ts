/// <reference path="../../../vendor/angular.d.ts" />
import bScope = require('../model/BaseScope');

interface IBaseController{
    ctrlScope:bScope
    name:string
}

class BaseController implements IBaseController{
    static $inject:string[] = ['$scope'];
     constructor(public name:string,public ctrlScope:bScope) {

    }
}

export = BaseController;