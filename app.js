'use strict';

var angularFormlyApp = angular.module('angularFormlyApp', ['formly', 'formlyBootstrap', 'mgo-angular-wizard','ui.bootstrap']);
angularFormlyApp.run(function(formlyConfig) {
  formlyConfig.setType({
    name: 'typeahead',
    template: '<input type="text" ng-model="personAddress[options.key]" uib-typeahead="item.name for item in to.options | filter:$viewValue | limitTo:8" class="form-control">',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
  });

});
