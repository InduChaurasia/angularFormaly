(function() {

	'use strict';

	angularFormlyApp.controller('MainController', function($scope, province) {

		var vm = this;

		vm.person = {};

		vm.personFields = [ {
			key : 'first_name',
			type : 'input',
			templateOptions : {
				type : 'text',
				label : 'First Name',
				placeholder : 'Enter your first name',
				required : true
			}
		}, {
			key : 'last_name',
			type : 'input',
			templateOptions : {
				type : 'text',
				label : 'Last Name',
				placeholder : 'Enter your last name',
				required : true
			}
		}, {
			key : 'email',
			type : 'input',
			templateOptions : {
				type : 'email',
				label : 'Email address',
				placeholder : 'Enter email',
				required : true
			}
		}, {
			key : 'province',
			type : 'select',
			templateOptions : {
				label : 'Province',
				options : province.getProvinces()
			},
			hideExpression : '!model.email',
		}

		];

	})

})();