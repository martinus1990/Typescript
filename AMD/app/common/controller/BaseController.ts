import angular = require('../../../vendor/angular');
import bScope = require('../model/BaseScope');


export class BaseController{
    constructor(private $scope:bScope.BaseScope) {
    }
}